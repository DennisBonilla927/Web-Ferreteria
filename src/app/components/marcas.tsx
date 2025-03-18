import React from "react";

const Marcas = () => {
  return (
    <div className="pt-20 relative bg-no-repeat bg-cover bg-end  bg-[url('/wave2.svg')] " >
      <h1 className="text-center text-2xl my-10 font-bold underline text-gray-300">
        Marcas
      </h1>
      <div className="grid grid-cols-2  p-10">
        <div className="p-24 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-100">
            Marcas que refuerzan nuestra garantía
          </h1>
          <p className="text-gray-300">
            Visita nuestro catálogo de productos para conocer nuestra gran
            variedad de productos, accesorios y acabados para baños tales como
            extractores de aire, líneas de grifería para lavamanos, duchas,
            sanitarios, duchas eléctricas, entre otros.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 p-16">
          <img src="logo-fw.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-aoSmith.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-bossini.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-brady.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-ptk.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-bossini.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-bossini.jpg" alt="" className="rounded-md w-40" />
          <img src="logo-bossini.jpg" alt="" className="rounded-md w-40" />
        </div>
      </div>
    </div>
  );
};

export default Marcas;
