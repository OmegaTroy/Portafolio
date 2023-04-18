import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-boton h-full scrollbar dark:scrollbar-thumb-white scrollbar-thumb-boton'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
