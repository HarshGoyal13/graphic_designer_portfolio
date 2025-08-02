import React from "react";

import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import laptop3 from "../assets/laptop3.png";
import laptop4 from "../assets/laptop4.png";
import laptop5 from "../assets/laptop5.png";
import laptop6 from "../assets/laptop6.png";
import laptop7 from "../assets/laptop7.png";
import laptop8 from "../assets/laptop8.png";
import laptop9 from "../assets/laptop9.png";
import laptop10 from "../assets/laptop10.png";

const imagePaths = [
  laptop1,
  laptop2,
  laptop3,
  laptop4,
  laptop5,
  laptop6,
  laptop7,
  laptop8,
  laptop9,
  laptop10,
];

export default function LaptopPDFViewer() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-blue-500 text-3xl font-bold mb-6 text-center">LAPTOP UI</h1>

      {/* Responsive Laptop Frame */}
      <div className="relative w-full max-w-[800px] aspect-[16/10] bg-gray-900 border-[10px] border-gray-700 rounded-xl overflow-hidden shadow-xl">
        {/* Camera Dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full z-10" />

        {/* Scrollable Screen */}
        <div className="w-full h-full overflow-y-scroll bg-white p-2 space-y-4">
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Laptop Page ${index + 1}`}
              className="w-full rounded shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
