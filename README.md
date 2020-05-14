# 🔌 Up

Check if a website is up right now.

```ts
import { isUp } from "https://raw.githubusercontent.com/denorg/up/master/mod.ts";

const result = await isUp("https://google.com"); // true
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
