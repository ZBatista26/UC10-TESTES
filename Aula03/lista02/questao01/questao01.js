
/*Entrada: [7, 8, 9]
Saída esperada: 8 (tipo: number)
Entrada: []
Saída esperada: null (tipo: null)*/

function calcularMedia(lista){
    if(!Array.isArray(lista))
        throw new Error('Não é possivel realiazr o calculo')
    if(lista.length === 0)
        return null;
    const soma = lista.reduce((acc, value) => acc + value, 0)
    let media = soma/lista.length;
    return media;
}

module.exports = calcularMedia;