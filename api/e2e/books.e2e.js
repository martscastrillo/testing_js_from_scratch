const request = require ('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

const spyGetAll = jest.fn();

const MongoLibStub = {
    getAll: spyGetAll,
    create: () => [],
};

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(()=> MongoLibStub));

describe('Test for books',() =>{
    beforeAll(()=>{
        app = createApp();
        server = app.listen(3001);
     });
     afterAll(() =>{
          server.close();
     });
     describe('test for [GET] /api/v1/books', () => {
        test('should return a list books', () =>  {
            // Arrange
            const fakeBooks = generateManyBook(3);
    spyGetAll.mockResolvedValue(fakeBooks);
            return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({body})=>{
            console.log(body);
            // Assert
            expect(body.length).toEqual(fakeBooks.length);
        })
        });
      });
});