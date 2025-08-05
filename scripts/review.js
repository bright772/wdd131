const count = localStorage.getItem("counter");

let newCount;
if (count) {
    newCount = parseInt(count) + 1;
} else {
    newCount = 1;
}

localStorage.setItem("counter", newCount);

document.getElementById("counter").textContent = newCount;
