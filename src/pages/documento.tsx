// profe aqui importo componentes especiales que next.js usa para armar el HTML básico
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// aqui extienedo extiendo la clase Document de next.js para definir la estructura html base
export default class MyDocument extends Document {
  // en esta parte profe con getInitialProps permito recoger propiedades iniciales del documento
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // con esto aqui definino el render con el html raiz, head y body personalizados
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* aqui ya manejo el link a google fonts para usar Roboto Regular 400 */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          {/* aqui declaro el main que inyecta el contenido de la pagina */}
          <Main />
          {/*  y con NextScript inyecto los scripts necesarios de next.js */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
