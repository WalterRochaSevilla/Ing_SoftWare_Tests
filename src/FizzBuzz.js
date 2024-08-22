function generarFizzBuzz(n){
    let resp ="";
    if (n % 3 == 0) resp += "Fizz";
    if (n % 5 == 0) resp += "Buzz";
    if (n % 3 != 0 && n % 5 != 0)resp +=n;
    return resp;
}
export default generarFizzBuzz;