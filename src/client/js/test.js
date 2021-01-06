//jest test for formHandler
const validateUrl = require("./formHandler");

test("result is", () => {
  function validateUrl(url) {
    const expression =
      "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})";
    const regex = new RegExp(expression);
    if (String(url).match(regex)) {
      return "Validate URL!";
    } else {
      return "invalid URL";
    }
  }
});

//jest test for fetchResult
const getData = require("./fetchResults");
test("result of getData is", async () => {
  expect(getData.getData).toEqual(getData.getData);
});
