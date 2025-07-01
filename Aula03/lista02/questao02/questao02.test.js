
/*2. filtraMaiores(lista, limite)
Retorna os números maiores que o limite informado.

Entrada: [10, 20, 30], limite 15
Saída esperada: [20, 30] (tipo: array<number>)
O array resultante deve conter o número 30*/

const filtrarMaior = require('./questao02');

describe('Teste pra a função filtrarMaior.', () => {
    
    test('Tstar se retotna o resultado corretamente', () =>{
        expect(filtrarMaior([10,30,80,70], 20)).toEqual([30,80,70]);
        expect(filtrarMaior([10,30,80,70], 20)).toContain(30)
    })

    test('Testar se retorna o número corretamente com o parametro numero real', () => {
        expect(filtrarMaior([10,30,80,70], 20.6)).toEqual([30,80,70]);
        expect(filtrarMaior([10,30,80,70], 20.6)).toContain(30);
    })

        test('Testar se a função retorna erro quando nenhum dado é passado como parametro', () => {
            expect(() => filtrarMaior()).toThrow('Não é possivel realiazr a operação.');
            expect(() => filtrarMaior([], 5)).toThrow('Não é possivel realiazr a operação.');
            expect(() => filtrarMaior([10,30,80,70], "teste")).toThrow('Não é possivel realiazr a operação.');
            expect(() => filtrarMaior([10,30,80,"70"], 30)).toThrow('Não é possivel realiazr a operação.');
        });
    
})