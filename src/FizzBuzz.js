function generarFizzBuzz(n) {
    let resp = "";
    if (n % 3 === 0) resp += "Fizz";
    if (n % 5 === 0) resp += "Buzz";
    if (n % 3 !== 0 && n % 5 !== 0) resp += n;
    return resp;
}

function generarSecuenciaFizzBuzz(n) {
    let resp = "";
    for (var i = 1; i <= n; i += 1) {
        resp += generarFizzBuzz(i);
        if (i < n) resp += ", ";
    }
    return resp;
}

export { generarFizzBuzz, generarSecuenciaFizzBuzz };