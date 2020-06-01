# 🔌 Up

Check if a website is up right now in Deno.

[![Deno CI](https://github.com/denorg/up/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/up/actions)
[![GitHub](https://img.shields.io/github/license/denorg/up)](https://github.com/denorg/up/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/up)](https://github.com/denorg/up/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/up)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ⭐ Getting started

Import the `isUp` function and use it:

```ts
import { isUp } from "https://deno.land/x/up/mod.ts";

const result = await isUp("https://google.com"); // true
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx up https://google.com
```

### CLI

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

### Configuration

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

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
