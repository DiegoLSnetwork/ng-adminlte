require("./database");
const app = require("./serve");



app.listen(app.get("port"));
console.log("Server listening on port",app.get("port"));