let numberDoubler = {
    results: [],

    double: function(number) {
        let doubled = number * 2;
        this.results.push(doubled);
        return doubled;
    },

    showResult: function(doubledNumber) {
        let resultDisplay = document.getElementById("resultDisplay");
        resultDisplay.textContent = `Doubled Number: ${doubledNumber}`;
    }
};

document.getElementById("doubleButton").addEventListener("click", function() {
    let input = document.getElementById("numberInput").value;
    let number = parseFloat(input);

    if (!isNaN(number)) {
        let doubled = numberDoubler.double(number);
        numberDoubler.showResult(doubled);
    } else {
        alert("Please enter a valid number.");
    }

    document.getElementById("numberInput").value = "";
});