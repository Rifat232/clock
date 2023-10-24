let hrs = document.getElementById("hrs");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");

setInterval(()=>{
	let now = new Date();
	
	
	hrs.innerHTML = (now.getHours()<10 ? "0":"")+(now.getHours());
    min.innerHTML = (now.getMinutes()<10 ? "0":"")+(now.getMinutes());
	secs.innerHTML = (now.getSeconds()<10 ? "0":"")+(now.getSeconds());
}
,1000);