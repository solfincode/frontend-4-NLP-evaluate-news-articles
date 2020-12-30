//dom element
const button = document.getElementById("button");
const input = document.getElementById("input");

//eventlistener
button.addEventListener("click", handleSubmit);

//event
function handleSubmit(event) {
  event.preventDefault();
  const data = {
    url: input.value,
  };
  postData("http://localhost:3000/submitData", data);
  console.log("::: Form Submitted :::");
}

//post event
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
export { handleSubmit };
