import { createStyle } from "../../core/style";

// Rotate utilities
export const rotate_0 = createStyle("transform", "rotate(0deg)");
export const rotate_1 = createStyle("transform", "rotate(1deg)");
export const rotate_2 = createStyle("transform", "rotate(2deg)");
export const rotate_3 = createStyle("transform", "rotate(3deg)");
export const rotate_6 = createStyle("transform", "rotate(6deg)");
export const rotate_12 = createStyle("transform", "rotate(12deg)");
export const rotate_45 = createStyle("transform", "rotate(45deg)");
export const rotate_90 = createStyle("transform", "rotate(90deg)");
export const rotate_180 = createStyle("transform", "rotate(180deg)");

// X axis rotation
export const rotate_x_0 = createStyle("transform", "rotateX(0deg)");
export const rotate_x_1 = createStyle("transform", "rotateX(1deg)");
export const rotate_x_2 = createStyle("transform", "rotateX(2deg)");
export const rotate_x_3 = createStyle("transform", "rotateX(3deg)");
export const rotate_x_6 = createStyle("transform", "rotateX(6deg)");
export const rotate_x_12 = createStyle("transform", "rotateX(12deg)");
export const rotate_x_45 = createStyle("transform", "rotateX(45deg)");
export const rotate_x_90 = createStyle("transform", "rotateX(90deg)");
export const rotate_x_180 = createStyle("transform", "rotateX(180deg)");

// Y axis rotation
export const rotate_y_0 = createStyle("transform", "rotateY(0deg)");
export const rotate_y_1 = createStyle("transform", "rotateY(1deg)");
export const rotate_y_2 = createStyle("transform", "rotateY(2deg)");
export const rotate_y_3 = createStyle("transform", "rotateY(3deg)");
export const rotate_y_6 = createStyle("transform", "rotateY(6deg)");
export const rotate_y_12 = createStyle("transform", "rotateY(12deg)");
export const rotate_y_45 = createStyle("transform", "rotateY(45deg)");
export const rotate_y_90 = createStyle("transform", "rotateY(90deg)");
export const rotate_y_180 = createStyle("transform", "rotateY(180deg)");

// Z axis rotation
export const rotate_z_0 = createStyle("transform", "rotateZ(0deg)");
export const rotate_z_1 = createStyle("transform", "rotateZ(1deg)");
export const rotate_z_2 = createStyle("transform", "rotateZ(2deg)");
export const rotate_z_3 = createStyle("transform", "rotateZ(3deg)");
export const rotate_z_6 = createStyle("transform", "rotateZ(6deg)");
export const rotate_z_12 = createStyle("transform", "rotateZ(12deg)");
export const rotate_z_45 = createStyle("transform", "rotateZ(45deg)");
export const rotate_z_90 = createStyle("transform", "rotateZ(90deg)");
export const rotate_z_180 = createStyle("transform", "rotateZ(180deg)");

// Create rotate with custom value
export const createRotate = (value: string) => {
  return createStyle("transform", `rotate(${value})`);
};