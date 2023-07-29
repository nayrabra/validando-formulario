export default function ehUmRG (campo) {
    const rg = campo.value.replace(/\W/g, "");
    if (validaNumerosRepetidosRg(rg)) {
        campo.setCustomValidity('Esse RG não é válido');
    }
}

function validaNumerosRepetidosRg (rg) {
    return /^(\d)\1{5,}$/.test(rg); //verifica se a partir das 5 ocorrências do primeiro dígito capturado sao iguais
}