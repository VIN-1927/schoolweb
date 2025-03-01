import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 text-white ">
      <h1 className="text-4xl font-bold mb-4">DE SILVA</h1>
      <div className="bg-[#ffea6f] p-6 rounded-lg shadow-lg max-w-lg text-left text-black">
        <h3 className="text-lg leading-relaxed">
          Dinaal De Silva (called by his friends and subscribers as Babaji) is a content creator, 
          author, entertainer, and aspiring entrepreneur based in Australia. Dinaal was born and 
          raised in Melbourne to Sri Lankan parents. He is well known for his picture book, 
          <span className="font-semibold"> Springtime Andrews</span>, which was a huge hit in Sri Lanka 
          and sold out almost immediately after it was published in 2021. He also has two upcoming 
          books in progress. He can speak English, French, Hindi, and basic Sinhala.
        </h3>
      </div>
    </section>
  );
};

export default About;

