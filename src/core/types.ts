export type StyleRule = { property: string; value: string };

export type MultiStyleRule = StyleRule[];

export type StyleFn = () => StyleRule | MultiStyleRule;

export type VariantStyleFn = () => {
  styles: StyleRule | MultiStyleRule;
  variant?: VariantInfo;
};

export type VariantType =
  | "media"
  | "container"
  | "pseudo"
  | "pseudo-element"
  | "group"
  | "peer"
  | "attribute"
  | "feature";

export type VariantInfo = {
  type: VariantType;
  value: string;
  selector?: string;
  containerName?: string;
  groupName?: string;
  peerName?: string;
};

export type StyleCollection = StyleFn[];

export type AnyStyle = StyleFn | VariantStyleFn | null | undefined | boolean;

export type Theme = {
  colors: Record<string, Record<string, string>>;
  spacing: Record<string, string>;
  fontFamily: Record<string, string[]>;
  breakpoints: Record<string, string>;
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  transition: Record<string, string>;
  aspectRatio: Record<string, string>;
  animation: Record<string, string>;
  keyframes: Record<string, Record<string, Record<string, string>>>;
};
