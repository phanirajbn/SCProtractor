var http = require('http');
http.createServer(function(req, res){
switch(req.url){
	case "/":
	res.write("<h1>Home Page</h1>");
	res.end("Apple123");
	break;
	case "/SC":
	res.write("<h1>Society Generale Page</h1>");
	res.end("SC Page");
	break;case "/Siemens":
	res.write("<h1>Siemens Page</h1>");
	res.end();
	break;
}
}).listen(1235);