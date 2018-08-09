window.onload=function(){
	let uesr=document.getElementById("usename");
	let psw=document.getElementById("psw");
	let btn=document.getElementsByTagName("button")[0];
	console.log(uesr,psw,btn);
	btn.onclick=function(){
		if(uesr.value=="zs" && psw.value=="111111"){
			alert('登录成功');
			uesr.value="";
			psw.value="";
		}
		else{
			open("error.html");
			uesr.value="";
			psw.value="";
		}

	}
}