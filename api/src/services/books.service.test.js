const BooksService = require('./books.service')

describe('Test for Bookservice', ()=>{
    let service;
    beforeEach(() => {
        service = new BooksService();
    });
});

describe('test for getBooks', () =>{
 test('shoukd return a lis book', async ()=>{
       // Given
    // When
    const books = await service.getBooks({});
    console.log(books);
    // Then
    expect(books.lenth).toEqual(2);
 });
});