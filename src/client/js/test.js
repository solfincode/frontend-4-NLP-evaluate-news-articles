//import js
const validateUrl = require("./formHandler");
//jest test
test("result is validate", async () => {
  const url = "https://www.google.com";
  expect(validateUrl.validateUrl(url)).toBe("Validate URL!");
});
