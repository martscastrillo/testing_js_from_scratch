describe('group 1', () => {
    // beforeAll es una sentencia [setup] que corre antes de todas las pruebas xej up db
    beforeAll(() => {
        console.log('beforeAll');
       
      });
       // afterAll es lo mismo pero después XD.
      afterAll(() => {
        console.log('afterAll');
    
      });
      // beforeEach corre antes de cada caso de prueba hasta el último.
      beforeEach(() => {
        console.log(beforeEach);
      });

      // afterEach es lo mismo pero después
      afterEach(() => {
        console.log(afterEach);
      });
    test('case 1', () => {
        console.log('case 1');
        expect(1 + 1).toBe(2);
    });
    test('case 2', () => {
        console.log('case 2');
        expect(1 + 3).toBe(4);
    });

});

describe('group 2', () => {
    beforeAll(() => {
        console.log('beforeAll');
        // up db
      });
    test('case 3', () => {
        console.log('case 3');
        expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
        console.log('case 4');
        expect(1 + 3).toBe(4);
    });
    afterAll(() => {
        console.log('afterAll');
        // down db
      });
});