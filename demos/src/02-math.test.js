const { sum, multiply, divide } = require('./02-math');

describe('Test for Math', () => {
  describe('Test for add', () => {
    test('add 1 + 3, should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Test for multiply', () => {
    test('should multiply ', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
      const rta2 = multiply(5, 2);
      expect(rta2).toBe(10);
    });
  });

  describe('Test for divide', () => {

    test('should divide', () => {
      const rta = divide(12, 4);
      expect(rta).toBe(3);
      const rta2 = divide(6, 3);
      expect(rta2).toBe(2);
    });

    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(4, 0);
      expect(rta2).toBeNull();
    });


  });

});



