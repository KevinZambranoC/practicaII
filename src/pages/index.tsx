import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

//aqui declaro mi contenedor home principal en donde realizo la logica de la primera ventana
export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      
      {/* aqui traigo mi componente del navbar */}
      <Navbar />

      {/* aqui traigo mi background con un colorcito azul y ondas animadas */}
      <main className="flex-1 bg-[#3399ff] relative overflow-hidden">

        {/* Es un fondo animado con ondas blancas que se expanden */}
        <div className="absolute inset-0 z-0">

          {/* lo que hago aqui es que cada div es una onda con distinto tamaño y opacidad */}
          <div className="absolute rounded-full bg-white opacity-20 w-[1000px] h-[1000px] left-[-500px] bottom-[-500px] animate-ripple"/>
          <div className="absolute rounded-full bg-white opacity-50 w-[800px] h-[800px] left-[-400px] bottom-[-400px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-70 w-[600px] h-[600px] left-[-300px] bottom-[-300px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-80 w-[400px] h-[400px] left-[-200px] bottom-[-200px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-90 w-[200px] h-[200px] left-[-100px] bottom-[-100px] animate-ripple" />

        </div>

        {/* aqui tengo el contenedor que se ve arriba del fondo y es donde estan los 3 contenedores de los paso a paso */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-white px-4 py-10 space-y-6">
          
          {/* este es mi contenedor Paso 1 */}
          <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-xl shadow-lg flex overflow-hidden text-black flex-col sm:flex-row min-h-[360px] sm:min-h-48 md:min-h-56">
             {/*  se compone de una imagen que es igual para los otros 3 pero cambia la imagen en cada contenedor*/}
            <img src="/imagen1.jpg" alt="paso 1" className="w-full sm:w-1/3 h-56 sm:h-full object-cover"/>
            
            {/* y del espacio donde va un titulo y un parrafo de forma centrada */}
            <div className="p-4 flex flex-col items-center justify-center flex-1">
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-center">
                PASO 1
              </h2>

              <p className="text-base lg:text-lg text-center">
                Ingresa archivos .txt o .in o escribe los números que quieres convertir,
                recuerda que tienes el botón de limpiar por si ingresaste un archivo que no era
              </p>

            </div>

          </div>

          {/* este es mi contenedor Paso 2 */}
          <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-xl shadow-lg flex overflow-hidden text-black flex-col sm:flex-row min-h-[360px] sm:min-h-48 md:min-h-56">
            
            <img src="/imagen2.jpg" alt="paso 2" className="w-full sm:w-1/3 h-56 sm:h-full object-cover"/>
            
            <div className="p-4 flex flex-col items-center justify-center flex-1">
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-center">
                PASO 2
              </h2>

              <p className="text-base lg:text-lg text-center">
                Ingresa números que estén comprendidos entre 1 y 3999, y que no se te olvide que
                son solamente números y no son otros símbolos
              </p>

            </div>

          </div>

          {/* este es mi contenedor Paso 3 */}
          <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-xl shadow-lg flex overflow-hidden text-black flex-col sm:flex-row min-h-[360px] sm:min-h-48 md:min-h-56">
            
            <img src="/imagen3.jpg" alt="paso 3" className="w-full sm:w-1/3 h-56 sm:h-full object-cover"/>
            
            <div className="p-4 flex flex-col items-center justify-center flex-1">
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-center">
                PASO 3
              </h2>

              <p className="text-base lg:text-lg text-center">
                Después de haber seguido los dos pasos previos, presiona el botón de ejecutar y obtendrás los resultados
              </p>

            </div>

          </div>

          {/* este boton de aqui me lleva a la venta de cargar los archivos y de ejecutar el programa */}
          <button type="button" className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black font-bold py-2 px-6 rounded-xl shadow-lg" onClick={() => router.push('/VentanaCargar')}>
            Continuar
          </button>
          
        </div>
      </main>
    </div>
  );
}



