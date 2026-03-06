function calculateSpeed() {
    let distanceValue = Number(document.getElementById('distance').value);
    let speedValue = Number(document.getElementById('speed').value);
    let calculator = document.getElementById('div')

    if (distance <= 0 || speed <= 0) {
        return alert("Error please enter a value above 0");
    }

    let time = distanceValue * speedValue;
    let timeConverted = time * 60;
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let updatedTime = timeConverted * (60*1000);
    let eta = currentTime + updatedTime;
    let newDateObj = new Date(eta);
    let a = Math.round(newDateObj);
    let ab = new Date(a).toLocaleTimeString();
    let html = `
    <h2> Your eta is ${ab}</h2>
    `;
    calculator.innerHTML = html;
}