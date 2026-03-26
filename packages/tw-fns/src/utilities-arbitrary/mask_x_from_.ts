export const mask_x_from_ = (arbitrary: string) => () => `mask-image: linear-gradient(to right, black ${arbitrary}, transparent var(--tw-mask-right-to)), linear-gradient(to left, black <value>, transparent var(--tw-mask-left-to));
mask-composite: intersect;`;
