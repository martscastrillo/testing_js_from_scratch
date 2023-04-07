const { faker } = require {'@faker-js/faker'};

const generateOneBook = () => ({
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });


  const generateManyBook = (size) => {
    const limit = size ?? 10; // Si no me envian el tamaño genero 10 libros.
    const fakeBooks = []; // Colocando los fakeBooks generados.
    for (let index = 0; index < limit; index++) {
      fakeBooks.push(generateOneBook());
    }
    return [...fakeBooks];
  };

  module.exports = { generateOneBook, generateManyBook };