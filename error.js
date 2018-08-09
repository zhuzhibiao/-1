window.onload=function(){
	let span=document.getElementsByTagName("span")[0];
	let num=span.innerText;
	let t=setInterval(fn,1000);
	function fn(){
		num--;
		span.innerText=num;
		if (num==0) {
			clearInterval(t);
			close();
		}
	}
}