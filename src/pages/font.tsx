// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// Este documento extiende la clase Document de Next.js para definir la estructura HTML base
export default class MyDocument extends Document {
  // getInitialProps permite recoger propiedades iniciales del documento
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // Aquí definimos el render con el HTML raíz, head y body personalizados
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Link a Google Fonts para usar Roboto Regular 400 */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Main inyecta el contenido de la página */}
          <Main />
          {/* NextScript inyecta los scripts necesarios de Next.js */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
