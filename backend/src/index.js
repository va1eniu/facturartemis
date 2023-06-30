import app from "./app.js";
const main = () => {
  app.listen(app.get("port"));
  console.log(
    `The great company's Server is running on port ${app.get("port")}`
  );
};
main();
