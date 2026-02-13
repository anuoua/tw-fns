import { createAttributeVariant } from "../core/variants";

// ARIA states
const aria_checked = createAttributeVariant("aria-checked");
const aria_expanded = createAttributeVariant("aria-expanded");
const aria_disabled = createAttributeVariant("aria-disabled");
const aria_hidden = createAttributeVariant("aria-hidden");
const aria_invalid = createAttributeVariant("aria-invalid");
const aria_pressed = createAttributeVariant("aria-pressed");
const aria_selected = createAttributeVariant("aria-selected");

// Data attributes
const data_active = createAttributeVariant("data-active");
const data_selected = createAttributeVariant("data-selected");
const data_disabled = createAttributeVariant("data-disabled");

// Direction
const rtl = createAttributeVariant('[dir="rtl"] &');
const ltr = createAttributeVariant('[dir="ltr"] &');

// State
const open = createAttributeVariant("open");
const inert = createAttributeVariant("inert");

export {
  aria_checked,
  aria_expanded,
  aria_disabled,
  aria_hidden,
  aria_invalid,
  aria_pressed,
  aria_selected,
  data_active,
  data_selected,
  data_disabled,
  rtl,
  ltr,
  open,
  inert,
};
