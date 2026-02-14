/**
 * 字体大小映射
 * 基于 Tailwind CSS 的字体大小 scale
 */

export const fontSizeMap: Record<string, { size: string; lineHeight: string }> = {
  'xs': { size: '0.75rem', lineHeight: '1rem' },
  'sm': { size: '0.875rem', lineHeight: '1.25rem' },
  'base': { size: '1rem', lineHeight: '1.5rem' },
  'lg': { size: '1.125rem', lineHeight: '1.75rem' },
  'xl': { size: '1.25rem', lineHeight: '1.75rem' },
  'xl2': { size: '1.5rem', lineHeight: '2rem' },
  'xl3': { size: '1.875rem', lineHeight: '2.25rem' },
  'xl4': { size: '2.25rem', lineHeight: '2.5rem' },
  'xl5': { size: '3rem', lineHeight: '1' },
  'xl6': { size: '3.75rem', lineHeight: '1' },
  'xl7': { size: '4.5rem', lineHeight: '1' },
  'xl8': { size: '6rem', lineHeight: '1' },
  'xl9': { size: '8rem', lineHeight: '1' },
} as const

/**
 * 字体粗细映射
 */
export const fontWeightMap: Record<string, string> = {
  'thin': '100',
  'extralight': '200',
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
  'extrabold': '800',
  'black': '900',
} as const

/**
 * 字间距映射
 */
export const letterSpacingMap: Record<string, string> = {
  'tighter': '-0.05em',
  'tight': '-0.025em',
  'normal': '0em',
  'wide': '0.025em',
  'wider': '0.05em',
  'widest': '0.1em',
} as const

/**
 * 行高映射
 */
export const lineHeightMap: Record<string, string> = {
  'none': '1',
  'tight': '1.25',
  'snug': '1.375',
  'normal': '1.5',
  'relaxed': '1.625',
  'loose': '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
} as const
