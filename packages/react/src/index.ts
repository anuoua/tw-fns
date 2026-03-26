import { useId, useInsertionEffect, useRef } from "react"

export const useStyleMap = <T extends Record<string, any>>(styleMap: T, customId?: string) => {
    const compId = useId();
    const id = customId ?? styleMap.id ?? compId;


    !styleMap.id && Object.defineProperty(styleMap, "id", {
        value: id,
        enumerable: false,
    });

    const styleId = `data-twfns${id}`;

    type ProxyInstance = { [K in keyof T]: T[K] extends Function ? (...args: Parameters<T[K]>) => string : string; };

    const proxyRef = useRef<ProxyInstance>(null)

    useInsertionEffect(() => {
        if (styleMap.done || document.getElementById(styleId)) return;
        const style = document.createElement("style");
        style.id = styleId;
        let styleContent = ""
        const entries = Object.entries(styleMap);

        for (const entry of entries) {
            const [key, value] = entry;
            styleContent += getStyles(`${key}_${id}`, value);
        }

        style.innerHTML = styleContent;

        document.head.append(style);

        Object.defineProperty(styleMap, "done", {
            value: true,
            enumerable: false,
        });
    });

    proxyRef.current = new Proxy({} as { [K in keyof T]: T[K] extends Function ? (...args: Parameters<T[K]>) => string : string }, {
        get(_, p: string) {
            if (typeof styleMap[p] === "function") {
                return (...args: any[]) => getClasses(`${p}_${id}`, styleMap[p](...args))
            } else {
                return getClasses(`${p}_${id}`, styleMap[p])
            }
        },
    })

    return proxyRef.current;
}