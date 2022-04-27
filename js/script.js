onload = () => {
    document.querySelector('#seven').onclick = () => digito(7);
    document.querySelector('#eight').onclick = () => digito(8);
    document.querySelector('#nine').onclick = () => digito(9);
    document.querySelector('#four').onclick = () => digito(4);
    document.querySelector('#five').onclick = () => digito(5);
    document.querySelector('#six').onclick = () => digito(6);
    document.querySelector('#one').onclick = () => digito(1);
    document.querySelector('#two').onclick = () => digito(2);
    document.querySelector('#three').onclick = () => digito(3);
    document.querySelector('#zero').onclick = () => digito(0);
    document.querySelector('#devide').onclick = () => operador('/');
    document.querySelector('#multiply').onclick = () => operador('*');
    document.querySelector('#minus').onclick = () => operador('-');
    document.querySelector('#plus').onclick = () => operador('+');
    document.querySelector('#reset').onclick = () => resetar();
    document.querySelector('#percent').onclick = () => porcento();
    document.querySelector('#comma').onclick = virgula;
    document.querySelector('#clean').onclick = limpa;
    document.querySelector('#equal').onclick = calcula;
}

let sValor = '0';
let ehNovoNumero = true;
let valorAnterior = 0;
let operacaoPendente = null;

const atualizaVisor = () => {
    let [parteInteira, parteDecimal] = sValor.split(',');
    let valor = '';
    let count = 0;
    for (let i = parteInteira.length - 1; i >= 0; i--) {
        if (++count > 3) {
            valor = '.' + valor;
            count = 1;
        }
        valor = parteInteira[i] + valor;
    }
    valor = valor + (parteDecimal ? ',' + parteDecimal : '');
    valor = valor.replace('..', '.');
    document.querySelector('#show-result').innerText = valor;
};

const digito = (number) => {
    if (ehNovoNumero) {
        sValor = '' + number;
        ehNovoNumero = false;
    } else {
        sValor += number;
    }
    atualizaVisor();
};

const virgula = () => {
    if (ehNovoNumero) {
        sValor = '0,';
        ehNovoNumero = false;
    } else if (sValor.indexOf(',') == -1) {
        sValor += ',';
    }
    atualizaVisor();
};

const limpa = () => {
    ehNovoNumero = true;
    valorAnterior = 0;
    sValor = '0';
    operacaoPendente = null;
    atualizaVisor();
};

const resetar = () => {
    let valorAtual = document.querySelector('#show-result').innerText;
    let retorno;
    retorno = valorAtual.substring(0, valorAtual.length - 1);
    sValor = retorno;
    document.querySelector('#show-result').innerText = sValor;
}

const porcento = () => {
    let resultado = sValor * 0.01;
    resultado = resultado.toString();
    resultado = resultado.replace('.', ',');
    sValor = resultado;
    atualizaVisor();
}

const valorAtual = () => parseFloat(sValor.replace(',', '.'));

const operador = (op) => {
    calcula();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
};

const calcula = () => {
    if (operacaoPendente !== null) {
        let resultado;
        switch(operacaoPendente) {
            case '+': resultado = valorAnterior + valorAtual(); break;
            case '-': resultado = valorAnterior - valorAtual(); break;
            case '*': resultado = valorAnterior * valorAtual(); break;
            case '/': resultado = valorAnterior / valorAtual(); break;
        }
        sValor = resultado.toString().replace('.', ',');
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
};