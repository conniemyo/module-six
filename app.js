let numberDoubler = {
    results: [],

    double: function(number) {
        let doubled = number * 2;
        this.results.push(doubled);
        return doubled;
    },

    getResults: function() {
        return this.results.join(", ");
    }
};

document.getElementById("doubleButton").addEventListener("click", function() {
    let input = document.getElementById("numberInput").value;
    let number = parseFloat(input);

    if (!isNaN(number)) {
        let doubled = numberDoubler.double(number);
        document.getElementById("resultDisplay").textContent = "Doubled: " + doubled + " | History: " + numberDoubler.getResults();
    } else {
        document.getElementById("resultDisplay").textContent = "Enter a valid number.";
    }
});