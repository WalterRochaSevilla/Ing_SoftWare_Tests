import generarFizzBuzz from "./FizzBuzz"

describe("FizzBuzz", () => {
  it("Genera el mismo número si no sigue regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("Si el número es 3 se retornará Fizz", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });

});
