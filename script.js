class ServiceCalculator {
    constructor() {
        this.total = 0;
    }

    calculate() {
    const services = document.querySelectorAll(".service");
    this.total = 0;
    let summary = [];

    services.forEach(service => {
        if (service.checked) {
            this.total += Number(service.value);
            summary.push(service.parentElement.textContent);
        }
    });

    document.getElementById("result").innerHTML =
        "Cena: " + this.total + " zł<br><br>" +
        "Wybrane usługi:<br>" +
        summary.join("<br>");

    localStorage.setItem("lastPrice", this.total);
    }
}

const calculator = new ServiceCalculator();

document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
        calculator.calculate();
    });

window.addEventListener("load", function () {
    const savedPrice = localStorage.getItem("lastPrice");

    if (savedPrice) {
        document.getElementById("result").textContent =
            "Suma: " + savedPrice + "zł";
    }
});