let password = "welcome";
class User
{

private userName:string;
get user(){
    return this.userName;
}
set user(name:string)
{
    if(password && password=="welcome"){
     this.userName = name;
     console.log(`Username ${this.userName} is valid`);
    }
    else{
        console.log(`User is not valid`);
    }
}
}
let users = new User();
users.user="Titiksha";
if(users.user)
    {
        console.log(users.user);
    }