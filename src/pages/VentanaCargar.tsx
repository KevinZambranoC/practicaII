// profe aqui importo react, el hook useState para manejar estado,
// useRef para referencias y useRouter para moverse entre páginas
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

// aqui defino mi componente de la ventana para cargar archivos

export default function VentanaCargar() 
{

  // aqui es el estado donde guardo el texto que se va a mostrar y editar
  const [fileContent, setFileContent] = useState('');

  // esta es la referencia al input de tipo file oculto para abrir el selector de archivos
  const fileInputRef = useRef<HTMLInputElement>(null);

  // aqui es donde uso el router para navegar entre las paginas, aunqeu aqui las identifico como ventana
  const router = useRouter();

  // realize esta funcion para que lea el archivo que el usuario selecciona
  // esta es la parte que pense para la optimizacion del proceso que pense en la primera practica que fue lo que me falto
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) 
  {
    const file = e.target.files?.[0];

    if (!file) return; 

    const reader = new FileReader();
   
    reader.onload = () => setFileContent(reader.result as string);
  
    reader.readAsText(file);

  }

  // aqui realizo una funcion arrow que ejecuta el boton ejecutar, hecho importante que 
  // me va a llevar a la ventana de resultados y pasa el contenido del archivo codificado en URL
  const goToResults = () => {
    router.push(`/VentanaResultados?content=${encodeURIComponent(fileContent)}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      {/* aqui coloco mi componente */}
      <Navbar />

      {/* aqui coloco el background animado este es el reto profe de la practicaI lo hice con fondo azul y las ondas animadas */}
      <main className="flex-1 bg-[#3399ff] relative overflow-hidden p-8">
        {/* aqui son las clases de tailwind con las ondas animadas blancas para el fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute rounded-full bg-white opacity-20 w-[1000px] h-[1000px] left-[-500px] bottom-[-500px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-50 w-[800px] h-[800px] left-[-400px] bottom-[-400px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-70 w-[600px] h-[600px] left-[-300px] bottom-[-300px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-80 w-[400px] h-[400px] left-[-200px] bottom-[-200px] animate-ripple" />
          <div className="absolute rounded-full bg-white opacity-90 w-[200px] h-[200px] left-[-100px] bottom-[-100px] animate-ripple" />
        </div>

        {/* aqui cree el ontenedor principal para cargar archivo y mostrar contenido */}
        <section className="relative z-10 max-w-3xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col">
          
          {/* aqui dejo el titulo de cargar el archivo*/}
          <h2 className="text-lg font-bold mb-4 text-center">
            Carga tu archivo .in o .txt
          </h2>

          {/* aqui creo un input oculto para abrir el explorador de archivos */}
          <input ref={fileInputRef} type="file" accept=".in,.txt" className="hidden" onChange={handleFile} />

          {/* esto es lo que me encanta y mas me gusto de lo que hice aparte de la animacion el mini contenedor editable para mostrar o modificar el texto */}
          <textarea value={fileContent} onChange={(e) => setFileContent(e.target.value)} placeholder="Aquí se mostrará o editará el contenido del archivo" className="w-full h-40 p-2 bg-gray-100 border border-gray-300 rounded-lg resize-y mb-4"/>

          {/* en esta area creo que los botones que hara la tarea de cargar los archivos y limpiar el contendor editable de texto */}
          <div className="flex justify-center space-x-2 mb-4">

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => fileInputRef.current?.click()}>
              Cargar archivos
            </button>

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => setFileContent('')} >
              Limpiar
            </button>

          </div>

        </section>

        {/* y aqui un boton mas que importante que es el que hace que la logica de glifos se ejecute y vaya a la venta de ir a resultados */}
        <div className="relative z-10 flex justify-center mt-6">

          <button type="button" className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black font-bold py-2 px-6 rounded-xl shadow-lg" onClick={goToResults}>
            Ejecutar
          </button>
          
        </div>
      </main>
    </div>
  );
}

