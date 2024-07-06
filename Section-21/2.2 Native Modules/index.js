const fs = require("fs")

fs.writeFile("Section-21/2.2 Native Modules/message1.txt", "Hello there !!", (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});

fs.readFile("Section-21/2.2 Native Modules/message.txt", "UTF-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
