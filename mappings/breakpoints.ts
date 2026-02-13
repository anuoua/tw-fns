/**
 * 断点映射
 * 响应式设计使用的断点
 */

export const breakpointMap: Record<string, string> = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  'xl2': '1536px',
  'xl3': '1920px',
  'xl4': '2560px',
} as const

/**
 * 所有断点列表
 */
export const breakpoints = Object.keys(breakpointMap) as const
export type Breakpoint = typeof breakpoints[number]
