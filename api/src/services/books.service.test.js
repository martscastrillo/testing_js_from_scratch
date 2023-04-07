const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');


const spyGetAll = jest.fn();

const MongoLibStub = {
    getAll: spyGetAll,
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
 test('should return a list book', async () => {
    // Given
    const fakeBooks = generateManyBook(20);
    spyGetAll.mockResolvedValue(fakeBooks);
    // When
    const books = await service.getBooks({});
    console.log(books);
    // Then
    expect(books.lenth).toEqual(fakeBooks.length);
    expect(spyGetAll).toHaveBeenCalled();
    expect(spyGetAll).toHaveBeenCalledTimes(1);
    expect(spyGetAll).toHaveBeenCalledWith('books', {});
 });
 test('should return a lis book', async () => {
    // Given
    const fakeBooks = generateManyBook(4);
    spyGetAll.mockResolvedValue(fakeBooks);
    // When
    const books = await service.getBooks({});
    console.log(books);
    // Then
    expect(books[0].name).toEqual(fakeBooks[0].name);
 });
});



    
