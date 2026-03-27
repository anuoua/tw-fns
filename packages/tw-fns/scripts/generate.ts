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

  const arbitraryTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName} = (arbitrary: string, ...fns: (() => string)[]) => () => \`${functionContent}\`;\n`;
  const nameTemplate = (functionName: string, functionContent: string) =>
    `export const ${functionName}_by = (name: string) => (arbitrary: string, ...fns: (() => string)[]) => \`${functionContent}\`;\n`;

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
      name: {
        content: `@container \${name} (width < \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "@min-[]:": {
      arbitrary: {
        content: `@container (width >= \${arbitrary}) {\n${fns}\n}`,
      },
      name: {
        content: `@container \${name} (width >= \${arbitrary}) {\n${fns}\n}`,
      },
    },
    "group-[]:": {
      arbitrary: {
        content: `&:is(:where([aria-group}]):is(\${arbitrary}) *) {\n${fns}\n}`,
      },
      name: {
        content: `&:is(:where([aria-group="\${name}"]):is(\${arbitrary}) *) {\n${fns}\n}`,
      },
    },
    "peer-[]:": {
      arbitrary: {
        content: `&:is(:where([aria-peer])\${arbitrary} ~ *) {\n${fns}\n}`,
      },
      name: {
        content: `&:is(:where([aria-peer="\${name}"])\${arbitrary} ~ *) {\n${fns}\n}`,
      },
    },
  };

  if (map[item.label]) {
    const arbitraryText = map[item.label].arbitrary
      ? arbitraryTemplate(functionName, map[item.label].arbitrary.content)
      : "";

    arbitraryText &&
      writeFileSync(
        `./src/wraps-arbitrary/${functionName}.ts`,
        arbitraryText,
        "utf-8",
      );

    const nameText = map[item.label].name
      ? nameTemplate(functionName, map[item.label].name.content)
      : "";

    nameText &&
      writeFileSync(
        `./src/wraps-arbitrary/${functionName}_by.ts`,
        nameText,
        "utf-8",
      );
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
  const detail = item.desc.replace(arbitraryPlaceholder, "\${arbitrary}");

  writeFileSync(
    `./src/utilities-arbitrary/${name}.ts`,
    `export const ${name} = (arbitrary: string) => () => \`${detail}\`;\n`,
    "utf-8",
  );
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
  const className = item[1];
  const css = item[2];

  const functionName = getNameFromLabel(className.trim());
  const fileName = functionName + ".ts";
  const content = `/**
${css
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((line) => ` * ${line.trim()}`)
  .join("\n *\n")}
 */
export const ${functionName} = () => \`${css}\`;\n`;

  writeFileSync(`./src/utilities/${fileName}`, content, "utf-8");
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
