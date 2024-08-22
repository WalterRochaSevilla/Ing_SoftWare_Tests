function generarFizzBuzz(n){
    let resp;
    if (n % 3 == 0) resp = "Fizz";
    else if (n % 5 == 0) resp = "Buzz";
     else resp = n +"";
    return resp;
}
export default generarFizzBuzz;