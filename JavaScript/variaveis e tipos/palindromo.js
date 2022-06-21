// solução 1
function verificaPalindromo(string) {
    if (!string) return;
    consola.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('gato');

// solução 2

function varificaPalindromo2(string) {
    if (!string) return;
    if (!string.length) return;
    _ _

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            console de retorno.log(falso);
        }
    }
    console de retorno.log(verdadeiro);
}

varificaPalindromo2('asa');