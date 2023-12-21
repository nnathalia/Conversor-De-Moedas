 var valor = document.getElementById('#valor')

 var select = document.getElementById('#moeda')

 var moeda = select.value()

 var valorConvertido

document.getElementById('#bt-converter').addEventListener("click", function() {

    if(moeda = "dolar"){
        valorConvertido = valor * 0.20
        valorConvertido.toLocaleString('pt-BR', {style: 'currency', currency: 'US'})
    }
    
    if(moeda = "euro"){
        valorConvertido = valor * 0.19
        valorConvertido.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
    }

    document.getElementById('#input-valor')= valorConvertido
})
 


