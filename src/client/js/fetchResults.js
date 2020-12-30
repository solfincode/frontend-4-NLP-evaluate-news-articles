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
  console.log(data);
  dataNode.innerHTML = `
        <div>${data.store.model}</div>
        <div>${data.store.subjectivity}</div>
        `;
  result.appendChild(dataNode);
};

export { getData, displayUI };
