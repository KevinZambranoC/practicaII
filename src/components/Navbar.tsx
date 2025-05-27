import React from 'react';

export default function Navbar() 
{

  // aqui yo realizo el contenedor del navbar el cual utilizare como componente y se lo voy a pasar a las demas ventanas tanto la principal
  // como la de carga y resultados
  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-black/20 shadow-lg shadow-black/50">
        
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
          
          {/* aqui yo realice el lado izquierdo del contenedor donde va el logo */}

          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-2 md:mb-0">
            <img src="/logo.jpg" alt="aqui va el logo no sea ciego sapo" className="h-8"/>
          </div>

          {/* aqui yo realice el lado derecho del contenedor donde va el titulo */}

          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-right">
              Conversor Glífico Antíguo
            </div>
          </div>

        </div>

    </nav>
  );
}