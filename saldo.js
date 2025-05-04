
document.addEventListener("DOMContentLoaded", function () {
  const saldoElement = document.getElementById("saldo");
  const finalSaldo = 18027000;
  let current = 0;
  const step = Math.ceil(finalSaldo / 100);

  const interval = setInterval(() => {
    current += step;
    if (current >= finalSaldo) {
      current = finalSaldo;
      clearInterval(interval);
    }
    saldoElement.textContent = current.toLocaleString("id-ID");
  }, 20);
});
