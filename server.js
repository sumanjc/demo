const http = require('http');
var mysql = require('mysql');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.end();
});

server.listen(8080, ()=>{
    console.log("Server listening at port 8080");
});

var db_con = mysql.createConnection({
  host: "ec2-15-207-254-186.ap-south-1.compute.amazonaws.com",
  port      :  3389,
  user: "root",
  password: "IdentifyYou@123",
  database: "mysql"
});

db_con.connect(function(err) {
	if (err){ 
    console.log("error occured while connecting with mysqldb", err);
    throw err
  }else{
    console.log("server connected with mysql db");
    var data_from_db = db_con.query('SELECT * FROM component', (err, result) => {
      if (err) {
        console.log("data_from_db error: ", err);
      } else {
    
        console.log("data_from_db", result, data_from_db);    
        
    
      }
    })
  }
  
	
});


