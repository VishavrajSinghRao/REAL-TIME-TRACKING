const ejs = require("ejs");
const fs = require("fs");

// Read and render the EJS file
ejs.renderFile("views/index.ejs", {}, (err, html) => {
    if (err) {
        console.error("Error rendering EJS:", err);
        return;
    }
    // Write the output to index.html
    fs.writeFileSync("index.html", html);
    console.log("✅ index.html has been generated successfully!");
});
