import type {
  StyleCollection,
  StyleFn,
  VariantStyleFn,
  StyleRule,
  MultiStyleRule,
  VariantInfo,
} from "../core/types";

export function toCSS(collection: StyleCollection, selector?: string): string {
  const baseStyles: StyleRule[] = [];
  const variantStyles: Map<
    string,
    { rules: StyleRule[]; variantInfo: VariantInfo }
  > = new Map();

  for (const styleFn of collection) {
    const result = styleFn();

    const variantInfo = getVariantInfo(result);

    if (variantInfo) {
      const styles = getStyles(result);
      const styleArray = Array.isArray(styles) ? styles : [styles];
      const key = getVariantKey(variantInfo);

      if (!variantStyles.has(key)) {
        variantStyles.set(key, { rules: [], variantInfo });
      }
      variantStyles.get(key)!.rules.push(...styleArray);
    } else {
      const styleArray = Array.isArray(result) ? result : [result];
      baseStyles.push(...styleArray);
    }
  }

  let css = "";

  if (baseStyles.length > 0) {
    if (selector) {
      css += `${selector} {\n`;
      css += stylesToCSS(baseStyles);
      css += "}\n";
    } else {
      css += stylesToCSS(baseStyles);
    }
  }

  variantStyles.forEach(({ rules, variantInfo }) => {
    let fullSelector: string;

    if (variantInfo.selector) {
      fullSelector = selector
        ? variantInfo.selector.replace("&", selector)
        : variantInfo.selector.replace("&", "");
    } else {
      const { prefix, query } = parseVariantKey(getVariantKey(variantInfo));
      fullSelector = selector
        ? `${prefix} ${selector}${query}`
        : `${prefix}${query}`;
    }

    css += `${fullSelector} {\n`;
    css += stylesToCSS(rules);
    css += "}\n";
  });

  return css;
}

function getStyles(
  result:
    | StyleRule
    | MultiStyleRule
    | { styles: StyleRule | MultiStyleRule; variant?: VariantInfo },
): StyleRule | MultiStyleRule {
  if (typeof result === "object" && "styles" in result) {
    return (result as { styles: StyleRule | MultiStyleRule }).styles;
  }
  return result;
}

function getVariantInfo(
  result:
    | StyleRule
    | MultiStyleRule
    | { styles: StyleRule | MultiStyleRule; variant?: VariantInfo },
): VariantInfo | undefined {
  if (typeof result === "object" && "variant" in result) {
    return (result as { variant: VariantInfo }).variant;
  }
  return undefined;
}

function stylesToCSS(rules: StyleRule[]): string {
  return rules
    .map(({ property, value }) => `  ${property}: ${value};`)
    .join("\n");
}

function getVariantKey(variant: VariantInfo): string {
  const parts: string[] = [variant.type, variant.value];

  if (variant.containerName) {
    parts.push(variant.containerName);
  }
  if (variant.groupName) {
    parts.push(variant.groupName);
  }
  if (variant.peerName) {
    parts.push(variant.peerName);
  }

  return parts.join(":");
}

function parseVariantKey(key: string): { prefix: string; query: string } {
  if (key.startsWith("media:")) {
    const [_, query] = key.split(":");
    return { prefix: query, query: "" };
  }
  if (key.startsWith("container:")) {
    const [_, name, query] = key.split(":");
    return { prefix: `@container ${name}`, query: "" };
  }
  if (key.startsWith("pseudo:")) {
    const [_, selector] = key.split(":");
    return { prefix: "", query: selector };
  }
  if (key.startsWith("pseudo-element:")) {
    const [_, selector] = key.split(":");
    return { prefix: "", query: selector };
  }
  if (key.startsWith("group:")) {
    const [_, selector] = key.split(":");
    return { prefix: "", query: selector };
  }
  if (key.startsWith("peer:")) {
    const [_, selector] = key.split(":");
    return { prefix: "", query: selector };
  }
  if (key.startsWith("attribute:")) {
    const [_, selector] = key.split(":");
    return { prefix: "", query: selector };
  }
  if (key.startsWith("feature:")) {
    const [_, query] = key.split(":");
    return { prefix: query, query: "" };
  }

  return { prefix: "", query: "" };
}
