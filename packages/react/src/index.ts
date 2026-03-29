import { useInsertionEffect, useRef } from "react";
import { getStyles, getClasses } from "tw-fns";

let count = BigInt(0);

const getId = () => (++count).toString(32);

export const createStyles = <T extends Record<string, any>>(
  styleMap: T,
  customId?: string,
) => {
  return {
    id: `twfns_${customId ?? getId()}`,
    refCount: 0,
    styleMap,
  };
};

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
    const styleId = `style_${id}`;
    if (!!state.refCount || document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    let styleContent = "";

    for (const entry of Object.entries(styleMap)) {
      const [key, value] = entry;
      styleContent += getStyles(`${key}_${id}`, value);
    }

    style.innerHTML = styleContent;

    document.head.append(style);

    state.refCount++;

    return () => {
      state.refCount--;
      if (state.refCount === 0) {
        style.remove();
      }
    };
  }, []);

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
