"use client";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 bg-gray-100">
      <div className="p-24 flex justify-center flex-col ">
      <h4 className="font-thin text-gray-500 my-4">Sobre Nosotros</h4>
      <p className="font-bold text-2xl text-gray-600 mb-4 ">
        ECUAIMCO S.A. somos una empresa con más de 20 años de experiencia en el mercado ecuatoriano.     
      </p>
      <p className="text-gray-500">
        Dedicada a la importación, distribución y comercialización de productos
        ferreteros especializados en soluciones de agua y equipos para
        profesionales de la construcción. Representamos a importantes marcas
        nacionales y extranjeras líderes en sus categorías.
      </p>

      </div>
      <div className="p-24 bg-[url('/fondoforma1.png')] bg-cover bg-center bg-opacity-50 ">
        <div className="relative ">
        <img src="/QuienesSomosEcuaimco-2021.jpg" alt="" className="rounded-2xl transition-all duration-300 filter grayscale-0 hover:grayscale"/>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
