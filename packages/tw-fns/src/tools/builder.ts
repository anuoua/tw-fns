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
