function sum(a, b) {
    if(typeof a!== "number" || typeof b !== "number") {
        return res = 'Erro, não é possivel fazer a soma com atring.'
    }else{
        return a + b;
    }
}


module.exports = sum

