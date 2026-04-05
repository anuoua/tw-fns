import all from "./tailwindcss-all.json" with { type: "json" };
import classesArbitrary from "./utilities-arbitrary.json" with { type: "json" };
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { $ } from "zx";

const getNameFromLabel = (label: string) => {
  return (
    label
      .trim()
      .replace(/\-\[\]\:$/, "")
      .replace(/\[\]\:$/, "")
      .replace(/\]\:$/, "")
      .replace(/\:$/, "")
      .replaceAll("-", "_")
      .replaceAll("\\", "")
      .replaceAll("/", "_slash_")
      .replaceAll(".", "_dot_")
      // in 是关键词，不能做变量
      .replace(/^in$/, "in_")
      // default 是关键词，不能做变量
      .replace(/^default$/, "defualt_")
      // static 是关键词，不能做变量
      .replace(/^static$/, "static_")
      .replace("**", "below")
      .replace("*", "children")
      .replace(/^@(\w)/, "at_$1")
      .replace(/^@$/, "at")
      .replace(/%$/, "_percent")
      // 遇到 2xl 这种类名，把数字放后面
      .replace(/(\d)([a-zA-Z]+)$/, "$2$1")
  );
};

const fns = `\${fns.map((fn) => fn()).join("\\n")}`;

rmSync("./src/wraps", { recursive: true, force: true });
mkdirSync("./src/wraps");
rmSync("./src/wraps-arbitrary", { recursive: true, force: true });
mkdirSync("./src/wraps-arbitrary");

// wrap arbitrary
const wrapArbitraryArr = all.filter(
  (i) => i.kind === 9 && i.label.endsWith("]:"),
);

for (const item of wrapArbitraryArr) {
  const functionName = getNameFromLabel(item.label);

  const withoutTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName} = (...fns: (() => string)[]) => () => \`${functionContent}\`;\n`;

  const nameTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName} = (name: string, ...fns: (() => string)[]) => () => \`${functionContent}\`;\n`;

  const arbitraryTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName} = (arbitrary: string, ...fns: (() => string)[]) => () => \`${functionContent}\`;\n`;
  const namedTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName} = (arbitrary: string, name: string, ...fns: (() => string)[]) => () => \`${functionContent}\`;\n`;

  const map: Record<string, any> = {
    "not-[]:": {
      arbitrary: {
        content: `&:not(\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "@[]:": {
      arbitrary: {
        content: `@container (width >= \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "aria-[]:": {
      arbitrary: {
        content: `&[aria-\${arbitrary}] {\n${fns}\n}`,
      },
    },
    "in-[]:": {
      arbitrary: {
        content: `:where(*:\${arbitrary}) & {\n${fns}\n}`,
      },
    },
    "has-[]:": {
      arbitrary: {
        content: `&:has(*:is(\${arbitrary})) {\n${fns}\n}`,
      },
    },
    "data-[]:": {
      arbitrary: {
        content: `&[data-\${arbitrary}] {\n${fns}\n}`,
      },
    },
    "nth-[]:": {
      arbitrary: {
        content: `&:nth-child(\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "nth-last-[]:": {
      arbitrary: {
        content: `&:nth-last-child(\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "nth-of-type-[]:": {
      arbitrary: {
        content: `&:nth-of-type(\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "nth-last-of-type-[]:": {
      arbitrary: {
        content: `&:nth-last-of-type(\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "supports-[]:": {
      arbitrary: {
        content: `@supports (\${arbitrary}) {\n${fns}\n}`,
      },
    },
    "max-[]:": {
      arbitrary: {
        content: `@media (width < \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "min-[]:": {
      arbitrary: {
        content: `@media (width >= \${arbitrary}) {\n${fns}\n}`,
      },
    },
    // has name
    "@max-[]:": {
      arbitrary: {
        content: `@container (width < \${arbitrary}) {\n${fns}\n}`,
      },
      arbitraryName: {
        content: `@container \${name} (width < \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "@min-[]:": {
      arbitrary: {
        content: `@container (width >= \${arbitrary}) {\n${fns}\n}`,
      },
      arbitraryName: {
        content: `@container \${name} (width >= \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "group-[]:": {
      without: {
        content: `&:is(:where([aria-group]) *) {\n${fns}\n}`,
      },
      name: {
        content: `&:is(:where([aria-group="\${name}"]) *) {\n${fns}\n}`,
      },
      arbitrary: {
        content: `&:is(:where([aria-group]):is(\${arbitrary}) *) {\n${fns}\n}`,
      },
      arbitraryName: {
        content: `&:is(:where([aria-group="\${name}"]):is(\${arbitrary}) *) {\n${fns}\n}`,
      },
    },
    "peer-[]:": {
      without: {
        content: `&:is(:where([aria-peer]) ~ *) {\n${fns}\n}`,
      },
      name: {
        content: `&:is(:where([aria-peer="\${name}"]) ~ *) {\n${fns}\n}`,
      },
      arbitrary: {
        content: `&:is(:where([aria-peer]):is(\${arbitrary}) ~ *) {\n${fns}\n}`,
      },
      arbitraryName: {
        content: `&:is(:where([aria-peer="\${name}"]):is(\${arbitrary}) ~ *) {\n${fns}\n}`,
      },
    },
  };

  const templateData = map[item.label];

  if (templateData) {
    const hasName = !!templateData.name;

    // without
    {
      const withoutText = templateData.without
        ? withoutTemplate(functionName, templateData.without.content)
        : "";

      withoutText &&
        writeFileSync(
          `./src/wraps-arbitrary/${functionName}.ts`,
          withoutText,
          "utf-8",
        );
    }

    // name
    {
      const fnName = `${functionName}_by`;

      const nameText = templateData.name
        ? nameTemplate(fnName, templateData.name.content)
        : "";

      nameText &&
        writeFileSync(`./src/wraps-arbitrary/${fnName}.ts`, nameText, "utf-8");
    }

    // arbitrary
    {
      const fnName = `${functionName}${hasName ? "_is" : ""}`;

      const arbitraryText = templateData.arbitrary
        ? arbitraryTemplate(fnName, templateData.arbitrary.content)
        : "";

      arbitraryText &&
        writeFileSync(
          `./src/wraps-arbitrary/${fnName}.ts`,
          arbitraryText,
          "utf-8",
        );
    }

    // arbitraryName
    {
      const fnName = `${functionName}_is_by`;

      const arbitraryNameText = templateData.arbitraryName
        ? namedTemplate(fnName, templateData.arbitraryName.content)
        : "";

      arbitraryNameText &&
        writeFileSync(
          `./src/wraps-arbitrary/${fnName}.ts`,
          arbitraryNameText,
          "utf-8",
        );
    }
  } else {
    console.log("未处理的 wrap:", item.label);
  }
}

// wrap
const wrapArr = all.filter((i) => i.kind === 9 && i.detail);

for (const item of wrapArr) {
  const name = getNameFromLabel(item.label);

  const content = /\}$/.test(item.detail)
    ? item.detail.replace(/\}$/, `{\n${fns}\n}}`)
    : item.detail + ` {\n${fns}\n}`;

  const contenReplaceed = content
    .replace(":where(.peer)", `:where([aria-peer])`)
    .replace(":where(.group)", `:where([aria-group])`);

  writeFileSync(
    `./src/wraps/${name}.ts`,
    `export const ${name} = (...fns: (() => string)[]) => () => \`${contenReplaceed}\`;\n`,
    "utf-8",
  );

  // named peer or group
  if (content.includes(":where(.peer)") || content.includes(":where(.group)")) {
    const contenReplaceed2 = content
      .replace(":where(.peer)", `:where([aria-peer="\${name}"])`)
      .replace(":where(.group)", `:where([aria-group="\${name}"])`);

    writeFileSync(
      `./src/wraps/${name}_by.ts`,
      `export const ${name}_by = (name: string) => (...fns: (() => string)[]) => () => \`${contenReplaceed2}\`;\n`,
      "utf-8",
    );
  }
}

// utilities
const arr = all
  .filter((i) => [16, 21].includes(i.kind))
  .map((item) => {
    return `<div class="${item.label}"></div>`;
  });

rmSync("./output.html", { force: true });

writeFileSync("./output.html", arr.join("\n"), "utf-8");

rmSync("./output.css", { force: true });

await $`npx @tailwindcss/cli -i ./input.css -o ./output.css`;

const output = readFileSync("./output.css", "utf-8");

const utilitiesLayerStartIndex = output
  .split("\n")
  .findIndex((line) => line.includes("@layer utilities {"));
const utilitiesLayerEndIndex = output
  .split("\n")
  .findIndex((line) => line.includes("@property --tw-border-spacing-x {"));

const utilitiesLayer = output
  .split("\n")
  .slice(utilitiesLayerStartIndex + 1, utilitiesLayerEndIndex)
  .join("\n");

const lines = output.split("\n");
lines.splice(
  utilitiesLayerStartIndex,
  utilitiesLayerEndIndex - utilitiesLayerStartIndex,
);
const resetLayers = lines.join("\n");

writeFileSync("./utilities.css", utilitiesLayer, "utf-8");
writeFileSync("./base.css", resetLayers, "utf-8");

const reg = /\.(.*)\s+\{([\n.\s\S]*?)\}/g;

const res = utilitiesLayer.matchAll(reg);

rmSync("./src/utilities", { recursive: true, force: true });
mkdirSync("./src/utilities");

for (const item of res) {
  if (!item[1]) throw new Error("className is empty");
  if (!item[2]) throw new Error("css is empty");

  const className = item[1].trim();
  const css = item[2].trim();

  const styles = css
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => line.trim());

  const functionName = getNameFromLabel(className);
  const fileName = functionName + ".ts";
  const content = `/**
${styles.map((i) => " * - " + i).join("\n")}
 */
export const ${functionName} = () => \`${styles.map((i) => "  " + i).join("\n")}\`;
`;

  writeFileSync(`./src/utilities/${fileName}`, content, "utf-8");
}

rmSync("./src/utilities-arbitrary", { recursive: true, force: true });
mkdirSync("./src/utilities-arbitrary");

for (const item of classesArbitrary) {
  const reg = /\-\[(.*)\]$/;

  const res = item.label.trim().match(reg);

  if (!res) {
    console.log("未处理的 classesArbitrary:", item.label);
    continue;
  }

  const name = getNameFromLabel(item.label.replace(reg, "")) + "_";
  const arbitraryPlaceholder = res[1];
  if (!arbitraryPlaceholder) {
    throw new Error("classesArbitrary 匹配失败: " + item.label);
  }
  const styles = item.desc
    .replace(arbitraryPlaceholder, "\${arbitrary}")
    .split("\n");

  writeFileSync(
    `./src/utilities-arbitrary/${name}.ts`,
    `/**
${styles.map((i) => " * - " + i).join("\n")}
 */
export const ${name} = (arbitrary: string) => () => \`${styles.map((i) => `  ${i}`).join("\n")}\`;\n`,
    "utf-8",
  );
}

// index.ts
rmSync("./src/index.ts", {
  force: true,
});

// generate a index.ts exports all functions
const wraps = readdirSync("./src/wraps");
const wrapsArbitrary = readdirSync("./src/wraps-arbitrary");
const utilities = readdirSync("./src/utilities");
const utilitiesArbitrary = readdirSync("./src/utilities-arbitrary");
const tools = readdirSync("./src/tools");

const getExportName = (file: string) => file.replace(".ts", "");

const wrapsExports = wraps
  .map(
    (file) =>
      `export { ${getExportName(file)} } from "./wraps/${getExportName(file)}";`,
  )
  .join("\n");
const wrapsArbitraryExports = wrapsArbitrary
  .map(
    (file) =>
      `export { ${getExportName(file)} } from "./wraps-arbitrary/${getExportName(file)}";`,
  )
  .join("\n");
const utilitiesExports = utilities
  .map(
    (file) =>
      `export { ${getExportName(file)} } from "./utilities/${getExportName(file)}";`,
  )
  .join("\n");

const utilitiesArbitraryExports = utilitiesArbitrary
  .map(
    (file) =>
      `export { ${getExportName(file)} } from "./utilities-arbitrary/${getExportName(file)}";`,
  )
  .join("\n");

const toolsExports = tools
  .map((file) => `export * from "./tools/${getExportName(file)}";`)
  .join("\n");

const indexContent = `${wrapsExports}\n${wrapsArbitraryExports}\n${utilitiesExports}\n${utilitiesArbitraryExports}\n${toolsExports}\n`;

writeFileSync("./src/index.ts", indexContent, "utf-8");
