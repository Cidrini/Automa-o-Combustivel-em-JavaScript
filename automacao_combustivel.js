// Sistema de automação do combustivel

const precoGasolina = 5.29; // Preço gasolina na sua região
const precoEtanol = 3.30; // Preço etanol da sua região
const kmPorLitros = 10; // KM por litros que seu veiculo faz
const distantanciaEmKM = 230; // Distancia que irá percorrer
const tipoCombustivel = 'Gasolina'; // Escolher o tipo de combustivel que irá usar

const litrosConsumidos = distantanciaEmKM / kmPorLitros; // Soma 

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {

    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2));

}



