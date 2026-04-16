// Counter logic using closure (from Project 3)
function createCounter() {
    let count = 0;
    return function () {
        count++;
        document.getElementById("count").innerText = count;
    };
}
const incrementCount = createCounter();

document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = document.getElementById("amount").value;
    const statusText = document.getElementById("status");

    if (amount === "") {
        statusText.innerText = "Please enter an amount to convert!";
        return;
    }

    // Set loading state
    statusText.innerText = "Loading exchange rates...";

    // Increment the counter every time the button is clicked
    incrementCount();

    // Fetch using Promises with .then/.catch/.finally (from Project 5 & 6)
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            // Calculate currency (from Project 2 & 6)
            const exchangeRate = data.rates.INR;
            const total = Number(amount) * exchangeRate;
            
            document.getElementById("result").innerText = "Total in INR: " + total.toFixed(2);
            statusText.innerText = "Data loaded successfully!";
        })
        .catch((error) => {
            // Error handling (from Project 5)
            console.log(error);
            statusText.innerText = "Error: Data not loaded!";
        })
        .finally(() => {
            // Finally logic (from Project 5)
            console.log("Conversion request completed.");
        });
});
