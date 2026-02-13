import { createPseudoElementVariant } from "../core/variants";

const before = createPseudoElementVariant("before");
const after = createPseudoElementVariant("after");
const placeholder = createPseudoElementVariant("placeholder");
const file = createPseudoElementVariant("file-selector-button");
const marker = createPseudoElementVariant("marker");
const selection = createPseudoElementVariant("selection");
const first_line = createPseudoElementVariant("first-line");
const first_letter = createPseudoElementVariant("first-letter");
const backdrop = createPseudoElementVariant("backdrop");

export {
  before,
  after,
  placeholder,
  file,
  marker,
  selection,
  first_line,
  first_letter,
  backdrop,
};
