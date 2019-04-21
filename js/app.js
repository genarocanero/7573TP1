const express=require("express");
const app=express();
const PORT = 3000;
app.get("/",(request,res) => {
	res.status(200);
	res.send('ping');
});
app.get("/Sleep/",(request,res) => {
	setTimeout(function() {
		res.status(200);
		res.send('ping sleep');
	},5000);
});
app.get("/BusySleep/",(request,res) => {
	var start = new Date().getTime(); 
	var end = start; 
	while (end < start +5000){
		end = new Date().getTime();
	}
	res.status(200);
	res.send('ping busy wait');
});
app.listen(PORT,()=>{console.log("escuchando en el puerto PORT")});

