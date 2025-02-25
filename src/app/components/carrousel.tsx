"use client"

const Carousel = () => {


  return (

<div className="relative w-full h-[800px]">
  {/* Imagen de fondo */}
  <img src="/constructor3.jpg" alt="" className="w-full h-full object-cover" />

  {/* Contenedor del texto */}
  <div className="absolute inset-0 flex flex-col items-start justify-center text-left bg-black/50 px-12">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl w-3/5">
      Somos distribuidores ferreteros especializados
    </h1>
    <p className="mb-6 text-lg font-normal text-gray-200 lg:text-xl  ">
      Con más de 20 años en el mercado.
    </p>
  </div>
</div>
  );
};

export default Carousel;
