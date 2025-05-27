// profe aqui importo componentes especiales que next.js usa para armar el HTML básico
import { Html, Head, Main, NextScript } from 'next/document'

// aqui declaro mi componente Document el cual  es la base HTML de la app next.js, para personalizar el html, head y body
export default function Document() {
  return (
    // aqui coloco la etiqueta html raiz y le ponemos el idioma español para que google y navegadores lo entiendan
    <Html lang="es">
      <Head>
        {/* y aqui meto el link de gogle fonts para usar la fuente Roboto con peso 400 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* aqui el next mete el contenido principal de la pagina que estemos viendo */}
        <Main />
        {/*  y aqui el next mete los scripts que necesita para que todo funcione  */}
        <NextScript />
      </body>
    </Html>
  )
}
