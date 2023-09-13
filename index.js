//CRIA A FUNÇÃO QUE CALCULAR O IMC
function calcularIMC(){
    Idade_JS = window.document.getElementById('Idade_id').value;
    Peso_JS = window.document.getElementById('Peso_id').value;
    Altura_JS = window.document.getElementById('Altura_id').value;

    ResultadoIMC_JS = parseFloat(Peso_JS) / (parseFloat(Altura_JS) * parseFloat(Altura_JS))

    window.document.getElementById('ResultadoIMC_id').innerHTML = ResultadoIMC_JS;
    
    //CONDICIONAIS QUE ENTREGA O RELATORIO SOBRE O IMC
    if(ResultadoIMC_JS < 18.5){
        var Magreza = 'Magro';
        window.document.getElementById('RelatorioIMC_id').innerHTML = Magreza;
    }
    if(ResultadoIMC_JS >= 18.5 && ResultadoIMC_JS < 25){
        var PesoNormal = 'Peso Normal';
        window.document.getElementById('RelatorioIMC_id').innerHTML = PesoNormal;
    }
    if(ResultadoIMC_JS >= 25 && ResultadoIMC_JS < 30){
        var SobrePeso = 'Excesso De Peso';
        window.document.getElementById('RelatorioIMC_id').innerHTML = SobrePeso;
    }
    if(ResultadoIMC_JS >= 30 && ResultadoIMC_JS < 35){
        var Obesidade_Grau1 = 'Obesidade Grau 1';
        window.document.getElementById('RelatorioIMC_id').innerHTML = Obesidade_Grau1;
    }
    if(ResultadoIMC_JS >= 35 && ResultadoIMC_JS < 40){
        var Obesidade_Grau2 = 'Obesidade Grau 2';
        window.document.getElementById('RelatorioIMC_id').innerHTML = Obesidade_Grau2;
    }

if(ResultadoIMC_JS >= 40){
    var Obesidade_Grau3 = 'Obesidade Grau 3';
    window.document.getElementById('RelatorioIMC_id').innerHTML = Obesidade_Grau3;

}
}
