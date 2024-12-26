let form = document.getElementById("#login");
let login = document.getElementById("#submit");
let userName = document.getElementsByName("User-Email");
let password = document.getElementsByName("password");
login.addEventListener("click",(email,password)=>{
    const emailregex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    const passwordregex = /^(?=.*(a-z)(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]){8,}$/;
});
if(emailregex = email.test(userName)){
     console.log("Valid User");
     if(passwordregex = password.test(password)){
        console.log("Vaild password");
     }
}
else{
     console.log("Both email-id and passsword is incorrect");
}

