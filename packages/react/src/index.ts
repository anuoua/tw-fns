import { useInsertionEffect, useRef } from "react";
import { getStyles, getClasses } from "tw-fns/builder";

let count = BigInt(0);

const getId = () => (++count).toString(32);

const cacheMap = new Map<string, HTMLStyleElement>();

export const createStyles = <T extends Record<string, any>>(
  styleMap: T,
  customId?: string,
) => {
  const id = `tf__${customId ?? getId()}`;
  let refCount = 0;

  return () => {
    type ProxyInstance = {
      [K in keyof T]: T[K] extends Function
        ? (...args: Parameters<T[K]>) => string
        : string;
    };

    const proxyRef = useRef<ProxyInstance>(null);

    useInsertionEffect(() => {
      if (refCount === 0 && !cacheMap.get(id)) {
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

      refCount++;

      return () => {
        refCount--;
        if (refCount === 0) {
          cacheMap.get(id)?.remove();
          cacheMap.delete(id);
        }
      };
    }, []);

    proxyRef.current = new Proxy(
      {} as {
        [K in keyof T]: T[K] extends Function
          ? (...args: Parameters<T[K]>) => string
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
};
