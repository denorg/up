# 🔌 Up

Check if a website is up right now in Deno.

[![Test CI](https://github.com/denorg/up/workflows/Test%20CI/badge.svg)](https://github.com/denorg/up/actions)

```ts
import { isUp } from "https://deno.land/x/up/mod.ts";

const result = await isUp("https://google.com"); // true
```

Alternatively, you can use it directly from the CLI:

```bash
deno run --allow-net https://deno.land/x/up/mod.ts https://google.com
```

You can also install it globally using the following:

```bash
deno install --allow-net -n up https://deno.land/x/up/mod.ts
```

Then, the package is available to run:

```bash
up https://google.com # Result: https://google.com is up
```

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## ⭐ Related

- [sindresorhus/is-up](https://github.com/sindresorhus/is-up) is the Node.js project serving as inspiration for this one
- [sindresorhus/is-up-cli](https://github.com/sindresorhus/is-up-cli) is the CLI for `is-up`

## 📄 License

MIT © [Denorg](https://den.org.in)
