document.getElementById("bt-converter").addEventListener("click", function () {
  var valor = document.getElementById("valor");
  var select = document.getElementById("moeda");
  var moeda = select.value;
  var valorEmNumero = parseFloat(valor.value);
  var valorConvertido;

  if (moeda === "dolar") {
    valorConvertido = valorEmNumero * 0.2;
    valorConvertido = valorConvertido.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  if (moeda === "euro") {
    valorConvertido = valorEmNumero * 0.19;
    valorConvertido = valorConvertido.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }

  document.getElementById("input-valor").value = valorConvertido;
});
