"use client";
import { useState } from "react";


const AboutUs = () => {



    const [images, setImages] = useState([]);

const handleFetchImages = async () => {
  try {
    const url = "https://magicloops.dev/api/loop/a9d25d74-717e-4104-9c1e-86e91f9e0f74/run";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ consulta: "Obtener imágenes de marcas de ferretería" }),
    });

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    setImages(data); // Guardamos las imágenes en el estado
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
  }
};


  return (
    <div className="p-4">
    <button
      onClick={handleFetchImages}
      className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4"
    >
      Cargar Imágenes
    </button>

    <div className="grid grid-cols-3 gap-4">
      {images.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={item.url_imagen} alt={item.nombre} className="w-32 h-32 object-contain" />
          <p className="text-center text-sm mt-2">{item.nombre}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AboutUs
