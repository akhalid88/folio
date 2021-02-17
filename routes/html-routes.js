var path = require("path");


module.exports = function (app) {
	
	// GET route to Portfolio
	app.get("/portfolio", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/portfolio.html"));
	});

	// GET route to About me
	app.get("/about", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/about.html"));
	});

	// GET route to Main/Index
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}