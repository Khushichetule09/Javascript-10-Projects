
const passwordBox = document.getElementById("password")
const button = document.getElementById("btn")
const copyButton = document.getElementById("copy")

const generatepassword = ()=>{

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^()<>{}[]=-+%";

let password = "";
const lenthofpassword = 8;

for(let i = 0; i < lenthofpassword; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length)) //5
   // console.log(password);
}


passwordBox.value = password;


};




button.addEventListener("click",generatepassword);

copyButton.addEventListener("click",()=>{

    const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy){
        alert("No password tp copy! please generate a password first.");
        return;
    }


    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");

    });
    

})