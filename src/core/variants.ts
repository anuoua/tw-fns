import type { StyleFn, VariantStyleFn, VariantInfo } from "./types";

export function createVariantStyleFn(
  style: StyleFn,
  variantInfo: VariantInfo,
): VariantStyleFn {
  return () => {
    const result = style();
    return {
      styles: result,
      variant: variantInfo,
    };
  };
}

export function createPseudoVariant(
  pseudo: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "pseudo",
      value: pseudo,
      selector: `&:${pseudo}`,
    });
}

export function createPseudoElementVariant(
  element: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "pseudo-element",
      value: element,
      selector: `&::${element}`,
    });
}

export function createResponsiveVariant(
  breakpoint: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "media",
      value: breakpoint,
      selector: `@media (min-width: ${breakpoint})`,
    });
}

export function createContainerVariant(
  breakpoint: string,
): (containerName: string, style: StyleFn) => VariantStyleFn {
  return (containerName, style) => {
    return createVariantStyleFn(style, {
      type: "container",
      value: breakpoint,
      containerName,
      selector: `@container ${containerName || ""} (min-width: ${breakpoint})`,
    });
  };
}

export function createGroupVariant(
  pseudo: string,
  groupName?: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "group",
      value: `${pseudo}${groupName ? `-${groupName}` : ""}`,
      groupName,
      selector: `.group${groupName ? `-${groupName}` : ""}:${pseudo} &`,
    });
}

export function createPeerVariant(
  pseudo: string,
  peerName?: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "peer",
      value: `${pseudo}${peerName ? `-${peerName}` : ""}`,
      peerName,
      selector: `.peer${peerName ? `-${peerName}` : ""}:${pseudo} &`,
    });
}

export function createAttributeVariant(
  attribute: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "attribute",
      value: attribute,
      selector: `&[${attribute}]`,
    });
}

export function createFeatureVariant(
  feature: string,
): (style: StyleFn) => VariantStyleFn {
  return (style) =>
    createVariantStyleFn(style, {
      type: "feature",
      value: feature,
      selector: `@${feature}`,
    });
}
