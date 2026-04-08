# @tw-fns/react

React adapter of tw-fns.

## Install

```bash
npm install tw-fns @tw-fns/react
yarn add tw-fns @tw-fns/react
pnpm add tw-fns @tw-fns/react
bun install tw-fns @tw-fns/react
```

## Usage

```tsx
// base styles
import "tw-fns/base.css";
import { createStyles, useStyles } from "@tw-fns/react";
import { build } from "tw-fns/builder";
import { flex } from "tw-fns/flex";
import { flex_col } from "tw-fns/flex_col";
import { items_center } from "tw-fns/items_center";
import { justify_center } from "tw-fns/justify_center";

const styles = createStyles({
  main: build(flex, flex_col, items_center, justify_center),
  content: build(text_2xl),
});

export default function App() {
  const cns = useStyles(styles);

  return (
    <div className={cns.main}>
      <div className={cns.content}>Hello World</div>
    </div>
  );
}
```

## API

- createStyles: create styles
- useStyles: use styles in react component

## License

MIT
