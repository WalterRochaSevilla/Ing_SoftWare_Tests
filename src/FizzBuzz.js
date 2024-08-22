function generarFizzBuzz(n){
    let resp;
    if (n % 3 == 0) resp = "Fizz";
    else resp = n +"";
    return resp;
}
export default generarFizzBuzz;