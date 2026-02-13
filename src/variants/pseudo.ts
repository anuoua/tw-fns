import { createPseudoVariant } from "../core/variants";

const hover = createPseudoVariant("hover");
const focus = createPseudoVariant("focus");
const active = createPseudoVariant("active");
const focus_visible = createPseudoVariant("focus-visible");
const focus_within = createPseudoVariant("focus-within");
const visited = createPseudoVariant("visited");
const target = createPseudoVariant("target");

const first = createPseudoVariant("first-child");
const last = createPseudoVariant("last-child");
const odd = createPseudoVariant("nth-child(odd)");
const even = createPseudoVariant("nth-child(even)");
const only_child = createPseudoVariant("only-child");
const empty = createPseudoVariant("empty");

const required = createPseudoVariant("required");
const invalid = createPseudoVariant("invalid");
const valid = createPseudoVariant("valid");
const disabled = createPseudoVariant("disabled");
const read_only = createPseudoVariant("read-only");
const checked = createPseudoVariant("checked");
const indeterminate = createPseudoVariant("indeterminate");

export {
  hover,
  focus,
  active,
  focus_visible,
  focus_within,
  visited,
  target,
  first,
  last,
  odd,
  even,
  only_child,
  empty,
  required,
  invalid,
  valid,
  disabled,
  read_only,
  checked,
  indeterminate,
};
