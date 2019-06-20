// describe A quien voy a testiar
describe('operators', () => {
  // it Que voy a testear
  it('deberia se un objeto', () => {
    // assert Mi comparación
    assert.equal(typeof operators, 'object');
  });
  describe('operators.add', () => {
    it('deberia ser una funcion', () => {
      assert.equal(typeof window.operators.add, 'function');
    });
    it('debería retornar suma de dos numeros', () => {
      assert.equal(window.operators.add(2, 2), 4);
    });
    it('debería retornar Error si falta un parametro', () => {
      assert.equal(window.operators.add(2), "Error");
    })
  });
  describe('operators.multiply', () => {
    it('deberia ser una funcion', () => {
      assert.equal(typeof window.operators.multiply, 'function');
    });
    it('deberia retornar multiplicacion de dos numeros', () => {
      assert.equal(window.operators.multiply(2, 4), 8);
    })
  });
});
