function second(a,b) {
	var opr1 = 10;
	var opr2 = 90;
	result = b[a-1](opr1,opr2)
	console.log(result)
	
}

var arr = [add,sub,mul];
second(1,arr);  // 100
second(2,arr);  // -80
second(3,arr);  // 900
function add(a,d)
{
  return a+d
}
function sub(a,d)
{
	return a-d
}
function mul(a,d)
{
	return a*d
}