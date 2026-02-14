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
  // Font families
  fontFamily: Record<string, string[]>;

  // Colors
  colors: Record<string, Record<string, string | Record<string, string>>>;

  // Spacing base unit (single value)
  spacing: string;

  // Breakpoints
  breakpoints: Record<string, string>;

  // Container widths
  container: Record<string, string>;

  // Font sizes
  text: Record<string, string>;

  // Font weights
  fontWeight: Record<string, string>;

  // Letter spacing
  tracking: Record<string, string>;

  // Line height
  leading: Record<string, string>;

  // Border radius
  radius: Record<string, string>;

  // Box shadows
  shadow: Record<string, string>;

  // Inset shadows
  insetShadow: Record<string, string>;

  // Drop shadows
  dropShadow: Record<string, string>;

  // Text shadows
  textShadow: Record<string, string>;

  // Blur
  blur: Record<string, string>;

  // Perspective
  perspective: Record<string, string>;

  // Aspect ratios
  aspect: Record<string, string>;

  // Easing functions
  ease: Record<string, string>;

  // Animations
  animate: Record<string, string>;

  // Keyframes
  keyframes: Record<string, Record<string, Record<string, string | string[]>>>;
};