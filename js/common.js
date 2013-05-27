

function checkLogin(){
	var username= localStorage.getItem("username");
	if(username==null || username=='')
		return false;
	return true;
}

function writeHeader()
{


}
