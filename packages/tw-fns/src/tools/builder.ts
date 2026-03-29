enum AssetType {
  Build = "build",
  When = "when",
  Else = "else",
}

export interface BuildAsset {
  type: AssetType;
  fns: (() => string)[];
  valid: boolean;
}

export const build = (...args: (() => string)[]) => {
  const assets: BuildAsset[] = [
    {
      type: AssetType.Build,
      fns: args,
      valid: true,
    },
  ];

  const chain = {
    when(bool: boolean, ...fns: (() => string)[]) {
      assets.push({
        type: AssetType.When,
        fns,
        valid: bool,
      });
      return chain as Pick<typeof chain, "when" | "else">;
    },
    else(...fns: (() => string)[]) {
      assets.push({
        type: AssetType.Else,
        fns,
        valid: assets.at(-1)?.valid === false,
      });
      return chain as Pick<typeof chain, "when">;
    },
    getAssets() {
      return assets;
    },
  };

  return chain as Pick<typeof chain, "when">;
};

type BuildReturn = ReturnType<typeof build>;

export const getStyles = (
  rootClass: string,
  builder: BuildReturn | (() => BuildReturn),
) => {
  let buildAssets: BuildAsset[] = [];

  if (typeof builder === "function") {
    buildAssets = (builder() as any).getAssets() as BuildAsset[];
  } else {
    buildAssets = (builder as any).getAssets() as BuildAsset[];
  }

  const builded = [...buildAssets];

  const result = builded.reduce(
    (pre, cur) => {
      switch (cur.type) {
        case AssetType.Build: {
          const parentClass = pre.parentClass;
          return {
            parentClass,
            styleStr: `${pre.styleStr}\n.${parentClass} {\n${cur.fns.map((fn) => fn()).join("\n")}\n}`,
          };
        }
        case AssetType.When: {
          const parentClass = `${pre.parentClass}_w`;
          return {
            parentClass,
            styleStr: `${pre.styleStr}\n.${parentClass} {\n${cur.fns.map((fn) => fn()).join("\n")}\n}`,
          };
        }
        case AssetType.Else: {
          const parentClass = `${pre.parentClass}_e`;
          return {
            parentClass,
            styleStr: `${pre.styleStr}\n.${parentClass} {\n${cur.fns.map((fn) => fn()).join("\n")}\n}`,
          };
        }
      }
    },
    {
      parentClass: rootClass,
      styleStr: "",
    } as { parentClass: string; styleStr: string },
  );

  return result.styleStr;
};

export const getClasses = (rootClass: string, builder: BuildReturn) => {
  let buildAssets = [];

  buildAssets = (builder as any).getAssets();

  const builded = [...buildAssets];

  const result = builded.reduce(
    (pre, cur) => {
      switch (cur.type) {
        case AssetType.Build: {
          const parentClass = pre.parentClass;
          return {
            parentClass,
            classes: pre.classes,
          };
        }
        case AssetType.When: {
          const parentClass = `${pre.parentClass}_w`;
          return {
            parentClass,
            classes: cur.valid ? `${pre.classes} ${parentClass}` : pre.classes,
          };
        }
        case AssetType.Else: {
          const parentClass = `${pre.parentClass}_e`;
          return {
            parentClass,
            classes: cur.valid ? `${pre.classes} ${parentClass}` : pre.classes,
          };
        }
      }
    },
    {
      parentClass: rootClass,
      classes: rootClass,
    } as { parentClass: string; classes: string },
  );

  return result.classes;
};
