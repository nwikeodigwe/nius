import React from "react";

const Index = () => {
  const images = [];
  for (let i = 1; i < 16; i++) {
    images.push(
      <img
        key={i}
        src={`/images/gallery/${i}.jpg`}
        alt={`Gallery image ${i}`}
      />
    );
  }
  return (
    <section className="gallery">
      <div className="flex flex-col items-center justify-center h-[400px] w-full bg-[url('/images/gallery/2.jpg')] bg-top bg-cover bg-no-repeat relative before:absolute before:inset-0 before:bg-black/50 before:z-10">
        <h1 className="text-3xl font-bold text-center translate-y-8 text-white z-11">
          Gallery
        </h1>
      </div>
      <div className="container mx-auto px-10">
        <h2 className="title text-2xl mx-auto font-bold my-4">
          NIUS 2024 Gallery Update
        </h2>
        <div className="gallery-images">{images}</div>
      </div>
    </section>
  );
};

export default Index;
