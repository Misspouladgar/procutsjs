password='1234';
username="abcd";
function getUName(){
    let uname= document.getElementById('firstName').value;
    let pword=document.getElementById('password').value;
    let result=login(uname, pword);
    document.getElementById("login").innerHTML=result;
}
function login(uname,pword){
    debugger
    if(uname==username){
        if(pword===password){
            return "Hello," +'<b>'+uname+'</b>' +'!' ;
        }else{
            return "username or password wrong!";
        }

    }else{
        return "username or password wrong!";
    }
}