
const sum = require('../modules/sum'); // importação do arquivo/modulo
const cub = require('../modules/cub')
describe('Teste básico de função soma', () => {

    test('verificar se a soma de números positicvos', () => {
        expect(sum(8,8)).toBe(16);
    });
    
    test('verificar se a soma de números negativos', () => {
        expect(sum(-8,8)).toBe(0);
    });

    test('verificar se a soma de números negativos', () => {
        expect(sum(-8,"8")).toBe("Erro, não é possivel fazer a soma com atring.");
    });

    test('número ao cubo', () => {
        expect(cub(2)).toBe(8);
    })
});

