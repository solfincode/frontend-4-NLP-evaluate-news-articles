const result = document.getElementById("result");
const button = document.getElementById("button");
const dataNode = document.createElement("div");

//getData
const getData = async () => {
  await fetch("http://localhost:3000/analysis")
    .then((res) => res.json())
    .then((data) => displayUI(data))
    .catch((err) => console.log(err));
};

button.addEventListener("click", getData);

//display UI
const displayUI = (data) => {
  dataNode.innerHTML = `
        <div><b>model:</b> ${data.store.model}</div>
        <div><b>subjectivity:</b> ${data.store.subjectivity}</div>
        <div><b>confidence:</b> ${data.store.confidence}</div>
        <div><b>irony:</b> ${data.store.irony}</div>
        `;
  result.appendChild(dataNode);
};

export { getData, displayUI };
