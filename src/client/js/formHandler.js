//dom element
const button = document.getElementById("button");
const input = document.getElementById("input");
const notification = document.getElementById("notification");
const textNode = document.createElement("p");

//validate url
function validateUrl(url) {
  const expression =
    "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})";
  const regex = new RegExp(expression);
  if (url.match(regex)) {
    textNode.innerHTML = "Validate URL!";
    notification.appendChild(textNode);
  } else {
    textNode.innerHTML = "invalid URL";
    notification.appendChild(textNode);
  }
}

//eventlistener
button.addEventListener("click", handleSubmit);

//event
function handleSubmit(event) {
  event.preventDefault();
  validateUrl(input.value);
  const data = {
    url: input.value,
  };
  postData("/submitData", data);
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
