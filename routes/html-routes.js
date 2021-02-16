var path = require("path");


module.exports = function (app) {

	// app.get("/index", function (req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/index.html"));
	// });

	app.get("/portfolio", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/portfolio.html"));
	});

	app.get("/about", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/about.html"));
	});

	app.get("/resume", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/resume.html"));
	});

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}