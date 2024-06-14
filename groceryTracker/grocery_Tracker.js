let grocery1, grocery2, grocery3;

function groceryTracker() {
    grocery1 = parseInt(document.getElementById("grocery1").value);
    grocery2 = parseInt(document.getElementById("grocery2").value);
    grocery3 = parseInt(document.getElementById("grocery3").value);
    let total = grocery1 + grocery2 + grocery3;
    document.getElementById("result").innerText = `The total amount is: ${total}`;
}