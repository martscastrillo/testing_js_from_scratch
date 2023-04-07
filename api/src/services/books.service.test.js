const BooksService = require('./books.service');

const fakeBooks = [
    {
      _id: 1,
      name: 'Harry Potter',
    },
  ];

const MongoLibStub = {
    getAll: () => [...fakeBooks],
    create: () => [],
}; 
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(()=> MongoLibStub));

describe('Test for Bookservice', () => {
    let service;
    beforeEach (() => {
        service = new BooksService();
        jest.ClearAllMocks();
    });
});

describe('test for getBooks', () => {
 test('shoukd return a lis book', async () => {
       // Given
    // When
    const books = await service.getBooks({});
    console.log(books);
    // Then
    expect(books.lenth).toEqual(1);
 });
});