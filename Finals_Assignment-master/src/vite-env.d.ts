/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

namespace JSX {
  interface IntrinsicElements {
    [key: string]: any
  }
}

module 'react/jsx-runtime' {
  const jsx: any
  const jsxs: any
  const Fragment: any
}

module 'react-router-dom' {
  export const Link: any
  export const NavLink: any
  export const BrowserRouter: any
  export const Routes: any
  export const Route: any
}
