import { generarFizzBuzz, generarSecuenciaFizzBuzz } from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("Genera el mismo número si no sigue regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("Si el número es 3 se retornará Fizz", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("Si el número es múltiplo de 3 se retornará Fizz", () => {
    expect(generarFizzBuzz(9)).toEqual("Fizz");
  });
  it("Si el número es 5 se retornará Buzz", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("Si el número es múltiplo de 5 se retornará Buzz", () => {
    expect(generarFizzBuzz(40)).toEqual("Buzz");
  });
  it("Si el número es múltiplo de 3 y 5 se retornará FizzBuzz", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("Devolverá una secuencia 1-n siguiendo las reglas implementadas antes", () => {
    expect(generarSecuenciaFizzBuzz(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
  });
});
