let count = 0;

function increaseCount() {
    count += 1;
    document.getElementById("countDisplay").innerHTML = count;
    checkCountValue();
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount() {
    count = 0;
    document.getElementById("countDisplay").innerHTML = count;
    alert("Followers count has been reset.");
}