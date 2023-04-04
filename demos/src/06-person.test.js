const Person = require('./06-person');

describe('Test for Person', () => {
    let person;
    beforeEach(() => {
        person = new Person('Nicolas', 45, 1.7);
    });

    test('should return down', () => {
        // AAA
        // Arrange | Given
        person.weight = 45;
        // Act | When
        const imc = person.calcIMC();
        // Assert | Then
        expect(imc).toBe('down');
    });

    test('should return down', () => {
        person.weight = 59;
        const imc = person.calcIMC();
        expect(imc).toBe('normal');
    });
});
