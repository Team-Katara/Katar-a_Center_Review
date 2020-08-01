const app = require('./index.js');

let port = process.env.PORT || 3004;

app.listen(port, console.log(`Listening on http://localhost:${port}`));
