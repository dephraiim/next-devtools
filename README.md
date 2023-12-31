# Next Devtools

## Getting Started

Using Next DevTools in your Next project.

### Installation

Inside your Next project directory, run the following:

```bash
npm i @next-devtools/client @next-devtools/core

// or

pnpm add @next-devtools/client @next-devtools/core
```

### `next.config`

You need to add the following configuration in the `next.config` file.

```js
const { withNextDevtools } = require('@next-devtools/core/plugin')

module.exports = withNextDevtools({
  // Other Next.js configuration ...
})
```

### `NextDevtoolsProvider`

#### `app router`

You need to add the `NextDevtoolsProvider` component in the `app/layout` file.

```tsx
import { NextDevtoolsProvider } from '@next-devtools/core'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NextDevtoolsProvider>
          {children}
        </NextDevtoolsProvider>
      </body>
    </html>
  )
}
```

#### `pages router`

You need to add the `NextDevtoolsProvider` component in the `pages/_app` file.

```tsx
import { NextDevtoolsProvider } from '@next-devtools/core'

export default function App({ Component, pageProps }) {
  return <NextDevtoolsProvider><Component {...pageProps} /></NextDevtoolsProvider>
}
```

## License

[MIT](./LICENSE)
