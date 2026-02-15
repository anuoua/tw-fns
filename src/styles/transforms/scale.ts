import { createStyle } from "../../core/style";

// Scale utilities
export const scale_0 = createStyle("transform", "scale(0)");
export const scale_50 = createStyle("transform", "scale(0.5)");
export const scale_75 = createStyle("transform", "scale(0.75)");
export const scale_90 = createStyle("transform", "scale(0.9)");
export const scale_95 = createStyle("transform", "scale(0.95)");
export const scale_100 = createStyle("transform", "scale(1)");
export const scale_105 = createStyle("transform", "scale(1.05)");
export const scale_110 = createStyle("transform", "scale(1.1)");
export const scale_125 = createStyle("transform", "scale(1.25)");
export const scale_150 = createStyle("transform", "scale(1.5)");

// X axis scale
export const scale_x_0 = createStyle("transform", "scaleX(0)");
export const scale_x_50 = createStyle("transform", "scaleX(0.5)");
export const scale_x_75 = createStyle("transform", "scaleX(0.75)");
export const scale_x_90 = createStyle("transform", "scaleX(0.9)");
export const scale_x_95 = createStyle("transform", "scaleX(0.95)");
export const scale_x_100 = createStyle("transform", "scaleX(1)");
export const scale_x_105 = createStyle("transform", "scaleX(1.05)");
export const scale_x_110 = createStyle("transform", "scaleX(1.1)");
export const scale_x_125 = createStyle("transform", "scaleX(1.25)");
export const scale_x_150 = createStyle("transform", "scaleX(1.5)");

// Y axis scale
export const scale_y_0 = createStyle("transform", "scaleY(0)");
export const scale_y_50 = createStyle("transform", "scaleY(0.5)");
export const scale_y_75 = createStyle("transform", "scaleY(0.75)");
export const scale_y_90 = createStyle("transform", "scaleY(0.9)");
export const scale_y_95 = createStyle("transform", "scaleY(0.95)");
export const scale_y_100 = createStyle("transform", "scaleY(1)");
export const scale_y_105 = createStyle("transform", "scaleY(1.05)");
export const scale_y_110 = createStyle("transform", "scaleY(1.1)");
export const scale_y_125 = createStyle("transform", "scaleY(1.25)");
export const scale_y_150 = createStyle("transform", "scaleY(1.5)");

// Z axis scale
export const scale_z_0 = createStyle("transform", "scaleZ(0)");
export const scale_z_50 = createStyle("transform", "scaleZ(0.5)");
export const scale_z_75 = createStyle("transform", "scaleZ(0.75)");
export const scale_z_90 = createStyle("transform", "scaleZ(0.9)");
export const scale_z_95 = createStyle("transform", "scaleZ(0.95)");
export const scale_z_100 = createStyle("transform", "scaleZ(1)");
export const scale_z_105 = createStyle("transform", "scaleZ(1.05)");
export const scale_z_110 = createStyle("transform", "scaleZ(1.1)");
export const scale_z_125 = createStyle("transform", "scaleZ(1.25)");
export const scale_z_150 = createStyle("transform", "scaleZ(1.5)");

// Create scale with custom value
export const createScale = (value: string) => {
  return createStyle("transform", `scale(${value})`);
};