import { useInsertionEffect, useRef } from "react";
import { getStyles, getClasses } from "tw-fns/builder";

let count = BigInt(0);

const getId = () => (++count).toString(32);

export const createStyles = <T extends Record<string, any>>(
  styleMap: T,
  customId?: string,
) => {
  return {
    id: `tf__${customId ?? getId()}`,
    refCount: 0,
    styleMap,
  };
};

const cacheMap = new Map<string, HTMLStyleElement>();

export const useStyles = <T extends ReturnType<typeof createStyles>>(
  state: T,
) => {
  type StyleMap = T["styleMap"];

  const { styleMap, id } = state;

  type ProxyInstance = {
    [K in keyof StyleMap]: StyleMap[K] extends Function
      ? (...args: Parameters<StyleMap[K]>) => string
      : string;
  };

  const proxyRef = useRef<ProxyInstance>(null);

  useInsertionEffect(() => {
    if (!state.refCount && !cacheMap.get(id)) {
      const style = document.createElement("style");

      style.id = id;

      let styleContent = "";

      for (const entry of Object.entries(styleMap)) {
        const [key, value] = entry;
        styleContent += getStyles(`${key}_${id}`, value);
      }

      style.innerHTML = styleContent;

      document.head.append(style);

      cacheMap.set(id, style);
    }

    state.refCount++;

    return () => {
      state.refCount--;
      if (state.refCount === 0) {
        cacheMap.get(id)?.remove();
      }
    };
  }, [state]);

  proxyRef.current = new Proxy(
    {} as {
      [K in keyof StyleMap]: StyleMap[K] extends Function
        ? (...args: Parameters<StyleMap[K]>) => string
        : string;
    },
    {
      get(_, p: string) {
        if (typeof styleMap[p] === "function") {
          return (...args: any[]) =>
            getClasses(`${p}_${id}`, styleMap[p](...args));
        } else {
          return getClasses(`${p}_${id}`, styleMap[p]);
        }
      },
    },
  );

  return proxyRef.current;
};
