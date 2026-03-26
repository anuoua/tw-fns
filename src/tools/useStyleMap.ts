import { useId, useInsertionEffect, useRef } from "react"

export interface buildAsset {
    type: 'build' | "if" | "not";
    fns: (() => string)[];
    valid: boolean;
}

export const build = (...args: (() => string)[]) => {
    const assets: buildAsset[] = [{
        type: 'build',
        fns: args,
        valid: true,
    }]

    const chain = {
        if(bool: boolean, ...fns: (() => string)[]) {
            assets.push({
                type: "if",
                fns,
                valid: bool,
            });
            return chain;
        },
        not(bool: boolean, ...fns: (() => string)[]) {
            assets.push({
                type: "not",
                fns,
                valid: bool,
            })
            return chain;
        },
        getAssets() {
            return assets;
        },
    };

    return chain;
}

type BuildReturn = ReturnType<typeof build>;

const getStyles = (rootClass: string, builder: BuildReturn | (() => BuildReturn)) => {
    let buildAssets = [];

    if (typeof builder === 'function') {
        buildAssets = builder().getAssets();
    } else {
        buildAssets = builder.getAssets()
    }

    const builded = [...buildAssets];

    const result = builded.reduce((pre, cur) => {
        switch (cur.type) {
            case "build": {
                const parentClass = pre.parentClass
                return {
                    parentClass,
                    styleStr: `${pre.styleStr}\n.${parentClass}{\n${cur.fns.map(fn => fn()).join("\n")}}`
                }
            }
            case "if": {
                const parentClass = `${pre.parentClass}_if`
                return {
                    parentClass,
                    styleStr: `${pre.styleStr}\n.${parentClass}{\n${cur.fns.map(fn => fn()).join("\n")}}`
                }
            }
            case "not": {
                const parentClass = `${pre.parentClass}_not`
                return {
                    parentClass,
                    styleStr: `${pre.styleStr}\n.${parentClass}{\n${cur.fns.map(fn => fn()).join("\n")}}`
                }
            }
        }
    }, {
        parentClass: rootClass,
        styleStr: ""
    } as { parentClass: string, styleStr: string })

    return result.styleStr;
}

const getClasses = (rootClass: string, builder: BuildReturn) => {
    let buildAssets = [];

    buildAssets = builder.getAssets()

    const builded = [...buildAssets];

    const result = builded.reduce((pre, cur) => {
        switch (cur.type) {
            case "build": {
                const parentClass = pre.parentClass
                return {
                    parentClass,
                    classes: pre.classes,
                }
            }
            case "if": {
                const parentClass = `${pre.parentClass}_if`
                return {
                    parentClass,
                    classes: cur.valid ? `${pre.classes} ${parentClass}` : pre.classes,
                }
            }
            case "not": {
                const parentClass = `${pre.parentClass}_not`
                return {
                    parentClass,
                    classes: cur.valid ? `${pre.classes} ${parentClass}` : pre.classes,
                }
            }
        }
    }, {
        parentClass: rootClass,
        classes: rootClass
    } as { parentClass: string, classes: string })

    return result.classes;
}

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
