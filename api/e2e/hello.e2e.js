const request = require ('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint',() =>{
    beforeAll(()=>{
        app = createApp();
        server = app.listen(3001);
     });
     afterAll(() =>{
         server.close();
     });
     describe('test for [GET]/', () => {
        test('should return "Hello World!"', () => request(app)
        .get('/')
        .expect(200)
        .then((response)=>{
            expect(response.text).toEqual('Hello World!');
        }));
      });
});