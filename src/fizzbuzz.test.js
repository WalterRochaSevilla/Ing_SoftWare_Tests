import generarFizzBuzz from "./FizzBuzz"

describe("FizzBuzz", () => {
  it("Genera el mismo número si no sigue regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
});
