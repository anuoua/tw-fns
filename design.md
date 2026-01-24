# jstw - 原生 CSS 运行时库设计文档

## 设计思路

### 核心概念

1. **链式 API**：类似 jQuery 的流畅接口
2. **运行时生成**：动态生成原生 CSS 样式
3. **类型安全**：完整的 TypeScript 支持
4. **轻量级**：只包含必要的工具函数
5. **API 兼容 Tailwind**：使用类似 Tailwind 的 API 设计，但输出原生 CSS

## API 设计

### 设计原则

- **标准属性使用属性访问**：预定义的样式使用 `_` 连接的属性访问
- **任意值使用函数调用**：动态值使用函数传入参数
- **变体前缀使用 getter**：响应式、伪类等变体使用 getter 属性访问，不是函数调用
- **完整类型提示**：所有预定义样式都有 TypeScript 类型定义
- **生成原生 CSS**：最终输出 `style` 对象或 CSS 字符串，而非 Tailwind 类名

```typescript
// === 标准预定义样式 ===
// 布局
jt().flex                    // { display: 'flex' }
jt().grid                    // { display: 'grid' }
jt().items_center            // { alignItems: 'center' }
jt().justify_between         // { justifyContent: 'space-between' }
jt().gap_4                   // { gap: '1rem' }

// 间距
jt().p_4                     // { padding: '1rem' }
jt().px_2                    // { paddingLeft: '0.5rem', paddingRight: '0.5rem' }
jt().m_auto                  // { margin: 'auto' }
jt().mt_8                    // { marginTop: '2rem' }

// 文本
jt().text_red_500            // { color: '#ef4444' }
jt().text_center             // { textAlign: 'center' }
jt().font_bold               // { fontWeight: '700' }
jt().text_xl                 // { fontSize: '1.25rem' }

// 颜色
jt().bg_blue_500             // { backgroundColor: '#3b82f6' }
jt().border_gray_300         // { borderColor: '#d1d5db' }

// 圆角和阴影
jt().rounded                 // { borderRadius: '0.25rem' }
jt().rounded_lg              // { borderRadius: '0.5rem' }
jt().shadow_md               // { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }

// === 任意值使用函数 ===
jt().p('14px')               // { padding: '14px' }
jt().w('300px')              // { width: '300px' }
jt().text('#ff0000')         // { color: '#ff0000' }
jt().bg('rgb(255,0,0)')      // { backgroundColor: 'rgb(255,0,0)' }

// === 响应式（生成媒体查询） ===
jt().sm.flex                 // "@media (min-width: 640px) { display: flex }"
jt().md_flex                 // "@media (min-width: 768px) { display: flex }"
jt().lg.w('50%')             // "@media (min-width: 1024px) { width: 50% }"
jt().xl.hidden               // "@media (min-width: 1280px) { display: none }"
jt().2xl.p_8                 // "@media (min-width: 1536px) { padding: 2rem }"

// === 伪类和变体（使用 getter 属性访问） ===
jt().hover.text_blue_500     // "&:hover { color: #3b82f6 }"
jt().hover.bg_gray_100       // "&:hover { backgroundColor: #f3f4f6 }"
jt().focus.ring_2            // "&:focus { ring: 2px }"
jt().active.scale_105        // "&:active { transform: scale(1.05) }"

// === 组合 ===
const base = jt().p_4.rounded
const button = base.and().bg_blue_500.hover.text_white
// { padding: '1rem', borderRadius: '0.25rem', backgroundColor: '#3b82f6', '&:hover': { color: '#fff' } }

// === 条件样式 ===
jt().when(isActive, jt().font_bold).text_gray_500
// isActive ? { fontWeight: '700', color: '#6b7280' } : { color: '#6b7280' }

// === 输出格式 ===
// 1. 转换为 style 对象（用于 React/Vue）
jt().p_4.bg_blue_500.toStyle()   // { padding: '1rem', backgroundColor: '#3b82f6' }

// 2. 转换为 CSS 字符串（用于 style 标签或 CSS-in-JS）
jt().p_4.bg_blue_500.toCSS()     // "css-style-string"

// 3. 生成带类名的 CSS
jt().p_4.bg_blue_500.toCSS('.btn')  // ".btn { padding: 1rem; background-color: #3b82f6; }"
```

## 架构设计

```
jstw/
├── src/
│   ├── core/
│   │   ├── JstwBuilder.ts      # 核心构建器类
│   │   ├── variantStack.ts     # 变体栈管理（响应式、伪类等）
│   │   └── styleGenerator.ts   # CSS 样式生成逻辑
│   ├── mappings/
│   │   ├── spacing.ts          # p, m, px, py 等的值映射
│   │   ├── colors.ts           # 颜色值映射（red-500 -> #ef4444）
│   │   ├── breakpoints.ts      # 断点配置
│   │   └── typography.ts       # 字体、文本大小映射
│   ├── converters/
│   │   ├── toStyle.ts          # 转换为 style 对象
│   │   ├── toCSS.ts            # 转换为 CSS 字符串
│   │   └── toInline.ts         # 转换为内联样式字符串
│   ├── utils/
│   │   ├── validators.ts       # 值验证
│   │   └── unitConverters.ts   # 单位转换（rem -> px 等）
│   └── index.ts
```

## 核心数据结构

### 样式规则存储

```typescript
// 内部使用的数据结构
type StyleRule = {
  property: string
  value: string
  variants?: string[]  // ['hover', 'sm'] 等
}

type MediaQueryRule = {
  breakpoint: string
  styles: StyleRule[]
}

type PseudoClassRule = {
  pseudo: string  // 'hover', 'focus', 'active' 等
  styles: StyleRule[]
}

type StyleSheet = {
  baseStyles: StyleRule[]
  mediaQueries: MediaQueryRule[]
  pseudoClasses: PseudoClassRule[]
}
```

### Builder 核心

```typescript
class JstwBuilder {
  private styleRules: StyleRule[] = []
  private variantStack: string[] = []  // 当前激活的变体

  // 添加样式规则
  addRule(property: string, value: string) {
    this.styleRules.push({
      property,
      value,
      variants: [...this.variantStack]
    })
    this.variantStack = []  // 重置变体栈
    return this
  }

  // 任意值方法
  p(value: string) { return this.addRule('padding', value) }
  px(value: string) {
    this.addRule('paddingLeft', value)
    this.addRule('paddingRight', value)
    return this
  }
  w(value: string) { return this.addRule('width', value) }
  text(value: string) { return this.addRule('color', value) }
  bg(value: string) { return this.addRule('backgroundColor', value) }

  // 响应式变体（getter）
  get sm() {
    this.variantStack.push('sm')
    return this
  }

  // 伪类变体（getter）
  get hover() {
    this.variantStack.push('hover')
    return this
  }

  // 组合
  and() { return new JstwBuilder().merge(this) }

  when(condition: boolean, builder: JstwBuilder) {
    return condition ? this.merge(builder) : this
  }

  merge(...builders: JstwBuilder[]) {
    const merged = new JstwBuilder()
    merged.styleRules = [
      ...this.styleRules,
      ...builders.flatMap(b => b.styleRules)
    ]
    return merged
  }

  // 输出方法
  toStyle(): React.CSSProperties {
    // 返回扁平的 style 对象（仅基础样式）
  }

  toCSS(): string {
    // 返回完整的 CSS 字符串（包含媒体查询和伪类）
  }

  toInline(): string {
    // 返回内联样式字符串 "property: value; ..."
  }
}
```

## 值映射系统

### 间距映射

```typescript
// spacing.ts
const spacingMap = {
  '0': '0',
  '1': '0.25rem',    // 4px
  '2': '0.5rem',     // 8px
  '3': '0.75rem',    // 12px
  '4': '1rem',       // 16px
  '5': '1.25rem',    // 20px
  '6': '1.5rem',     // 24px
  '8': '2rem',       // 32px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  'auto': 'auto',
}
```

### 颜色映射

```typescript
// colors.ts
const colorMap = {
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    900: '#7f1d1d',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  // ... 更多颜色
}
```

### 断点映射

```typescript
// breakpoints.ts
const breakpointMap = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## 输出格式

### 1. Style 对象（用于 React/Vue）

```typescript
jt().p_4.bg_blue_500.toStyle()
// 输出:
// {
//   padding: '1rem',
//   backgroundColor: '#3b82f6'
// }
```

### 2. CSS 字符串（用于 CSS-in-JS）

```typescript
jt().p_4.bg_blue_500.hover.bg_blue_600.toCSS('.button')
// 输出:
// ".button { padding: 1rem; background-color: #3b82f6; }" +
// ".button:hover { background-color: #2563eb; }"
```

### 3. 带媒体查询的 CSS

```typescript
jt().p_4.sm.p_8.lg.p_12.toCSS('.container')
// 输出:
// ".container { padding: 1rem; }" +
// "@media (min-width: 640px) { .container { padding: 2rem; } }" +
// "@media (min-width: 1024px) { .container { padding: 3rem; } }"
```

### 4. 内联样式字符串

```typescript
jt().p_4.bg_blue_500.toInline()
// 输出: "padding: 1rem; background-color: #3b82f6;"
```

## TypeScript 类型定义

```typescript
// 定义所有标准的样式属性
type StandardStyles = {
  // 布局
  flex: JstwBuilder
  grid: JstwBuilder
  hidden: JstwBuilder

  // Flex
  flex_row: JstwBuilder
  flex_col: JstwBuilder
  items_center: JstwBuilder
  justify_between: JstwBuilder

  // 间距
  p_0: JstwBuilder
  p_4: JstwBuilder
  px_2: JstwBuilder
  m_auto: JstwBuilder

  // 文本
  text_center: JstwBuilder
  font_bold: JstwBuilder
  text_red_500: JstwBuilder

  // ... 更多预定义样式
}

// 变体前缀类型
type VariantPrefixes = {
  sm: JstwBuilder
  md: JstwBuilder
  lg: JstwBuilder
  hover: JstwBuilder
  focus: JstwBuilder
  active: JstwBuilder
}

// 任意值方法类型
type ArbitraryValueMethods = {
  p(value: string): JstwBuilder
  w(value: string): JstwBuilder
  text(value: string): JstwBuilder
  bg(value: string): JstwBuilder
}

// 完整的 Builder 类型
type JstwBuilderType = StandardStyles & VariantPrefixes & ArbitraryValueMethods & {
  and(): JstwBuilder
  when(condition: boolean, builder: JstwBuilder): JstwBuilder
  merge(...builders: JstwBuilder[]): JstwBuilder
  toStyle(): React.CSSProperties
  toCSS(selector?: string): string
  toInline(): string
}
```

## 高级特性

### 1. 主题支持

```typescript
// 支持自定义主题配置
jt.setTheme({
  spacing: { '4': '20px' },  // 覆盖默认间距
  colors: { primary: '#ff0000' }  // 自定义颜色
})

jt().bg_primary.toStyle()  // { backgroundColor: '#ff0000' }
```

### 2. 响应式组合

```typescript
// 堆叠响应式样式
jt().p_4.sm.p_6.md.p_8.lg.p_12
// 正确处理多个断点，不会相互覆盖
```

### 3. 伪类嵌套

```typescript
// 支持多重伪类
jt().hover.focus.ring_2
// &:hover:focus { ring: 2px }
```

### 4. 条件样式

```typescript
// 根据条件动态添加样式
const isActive = true
jt().when(isActive, jt().bg_blue_500).bg_gray_500
// isActive 为 true 时: { backgroundColor: '#3b82f6' }
// isActive 为 false 时: { backgroundColor: '#6b7280' }
```

## 优势

- **开发体验**：链式语法自然流畅，类似 Tailwind 但生成原生 CSS
- **类型安全**：完整 TypeScript 支持，自动补全
- **运行时灵活**：可以动态生成样式，无需编译
- **零依赖**：纯工具函数，无需 Tailwind 编译
- **多格式输出**：支持 style 对象、CSS 字符串、内联样式
- **轻量级**：只包含必要的样式映射和转换逻辑

## 使用场景

- React/Vue 组件的 style 对象生成
- 动态样式系统
- 条件样式逻辑
- 组件库构建
- 需要运行时样式生成的场景
- 不想使用 Tailwind 但喜欢其 API 的项目

## 与 Tailwind CSS 的区别

| 特性 | Tailwind CSS | jstw |
|------|-------------|------|
| 输出 | CSS 类名 | 原生 CSS / style 对象 |
| 构建 | 需要编译 | 运行时生成 |
| 类名 | HTML 中使用类名 | JS 中生成样式 |
| 体积 | 需要打包所有类 | 只包含用到的映射 |
| 类型 | 通过工具生成 | 原生 TypeScript |
