// importo los estilos globales
import '../styles/globals.css';

// importo el tipo que define que props recibe el componente App con esto tengo tipos claros con ts
import type { AppProps } from 'next/app'

// este el componente principal que next.js usa para renderizar las paginas que recibe aunque este caso las llame paginas
export default function App({ Component, pageProps }: AppProps) 
{
  // en este return simplemente devvuelvo el componente que toca, con sus props
  // Esto permite que next.js controle qué página se ve y pasarle su info
  return <Component {...pageProps} />
}
