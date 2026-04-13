import { getStyles, getClasses } from "tw-fns/builder";
import { styleSheet } from "j20";

let count = BigInt(0);

const getId = () => (++count).toString(32);

export const createStyles = <T extends Record<string, any>>(
  styleMap: T,
  customId?: string,
) => {
  const id = `tf__${customId ?? getId()}`;

  return () => {
    let styleContent = "";

    for (const entry of Object.entries(styleMap)) {
      const [key, value] = entry;
      styleContent += getStyles(`${key}_${id}`, value);
    }

    styleSheet(styleContent, id);

    return new Proxy(
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
  };
};
