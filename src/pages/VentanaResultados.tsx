import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
// profe aqui importo la lógica de mi codigo
import { processLines } from '../logica/glifos';

export default function VentanaResultados() {
  const router = useRouter();

  // aqui recibo el contenido codificado que viene por la URL 
  const raw = Array.isArray(router.query.content)
    ? router.query.content[0]  
    : (router.query.content as string);  

  
  // aqui lo decodifico para que sea texto legible
  const content = decodeURIComponent(raw || '');

  // aqui proceso cada linea y lo divido en numero decimal y glifo ya en resultado
  const lines = processLines(content).map((line) => {
    const [num, ...rest] = line.split(' ');
    return { decimal: num, glifo: rest.join(' ') };
  });

  // esta es la funcion que hice para descargar el resultado en un archivo glifico.txt
  function download() 
  {
    // creo un blob con todo el contenido procesado
    const blob = new Blob([lines.map(l => `${l.decimal} ${l.glifo}`).join('\n')], { type: 'text/plain' });
    
    // creo un enlace temporal para descargar
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'glifico.txt'; 
    a.click(); 
    URL.revokeObjectURL(url); 
  }

  // esta funcion que realice es para resetear todo y regresar a la pantalla principal
  function reset() {
    router.push('/'); 
  }

  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      
      {/* coloco mi componente del navbar*/}
      <Navbar /> 

      <main className="flex-1 bg-[#3399ff] relative overflow-hidden p-8">
        {/* aqui coloco el background animado este es el reto profe de la practicaI lo hice con fondo azul y las ondas animadas */}
        <div className="absolute inset-0 z-0">
          {/* aqui son las clases de tailwind con las ondas animadas blancas para el fondo */}
          <div className="absolute rounded-full bg-white opacity-20 w-[1000px] h-[1000px] left-[-500px] bottom-[-500px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-50 w-[800px] h-[800px] left-[-400px] bottom-[-400px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-70 w-[600px] h-[600px] left-[-300px] bottom-[-300px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-80 w-[400px] h-[400px] left-[-200px] bottom-[-200px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-90 w-[200px] h-[200px] left-[-100px] bottom-[-100px] animate-ripple" />
        </div>

        {/* aqui defino el contenedor principal donde van a estar los resultados */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-4 text-center text-black">Resultados</h2>

          {/* aqui realice una tabla responsiva con scroll horizontal */}
          <div className="overflow-x-auto">
            
            <table className="w-full table-auto text-left">
              
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300">Decimal</th>
                  <th className="px-4 py-2 border-b border-gray-300">Glifo / Mensaje</th>
                </tr>
              </thead>

              <tbody>
                {/* aqui itero cada linea para mostrar las dos columnas */}
                {lines.map((line, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200 text-black">{line.decimal}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-black">{line.glifo}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

        {/* y aqui defino los botoenes para volver o descargar */}
        <div className="relative z-10 flex justify-center mt-6 space-x-4">
          
          <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-4 py-2 rounded" onClick={reset}>
            Volver al inicio
          </button>

          <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-4 py-2 rounded" onClick={download}>
            Descargar glifico.txt
          </button>
          
        </div>
      </main>
    </div>
  );
}

