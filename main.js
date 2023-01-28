// document.querySelector("#btn").addEventListener("click", ()=>{
//     let firstname =document.querySelector("#firstname").value;
//     let surname =document.querySelector("#surname").value;
//     let mail =document.querySelector("#mail").value;
//     let password =document.querySelector("#password").value;
//     let confirm =document.querySelector("#confirm").value;
//     let errorMessage =document.querySelector("#error-message");
//     if(password !== confirm){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML= "tesdiq sifresi ile uygun gelmir";
//     }else{
//         errorMessage.style.color = "green";
//         errorMessage.innerHTML= "tesdiq sifresi uygundur";
//         let data={
//             firstname,
//             surname,
//             mail,
//             password,
//             confirm,
//         };
//         console.log(data);
//         document.querySelector("#firstname").value = "";
//         document.querySelector("#surname").value = "";
//         document.querySelector("#mail").value = "";
//         document.querySelector("#password").value = "";
//         document.querySelector("#confirm").value = "";
//     }
// })

// !============= 8 sinvoldan az olmasin===============
// document.querySelector("#btn").addEventListener("click", ()=>{
//     let firstname =document.querySelector("#firstname").value;
//     let surname =document.querySelector("#surname").value;
//     let mail =document.querySelector("#mail").value;
//     let password =document.querySelector("#password").value;
//     let confirm =document.querySelector("#confirm").value;
//     let errorMessage =document.querySelector("#error-message");
    
//     if(password.length<8){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML= "minimum 8 simvol";
//     }else 
//     if(password !== confirm){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML= "tesdiq sifresi ile uygun gelmir";
//     }else{
//         errorMessage.style.color = "green";
//         errorMessage.innerHTML= "tesdiq sifresi uygundur";
//         let data={
//             firstname,
//             surname,
//             mail,
//             password,
//             confirm,
//         };
//         console.log(data);
//         document.querySelector("#firstname").value = "";
//         document.querySelector("#surname").value = "";
//         document.querySelector("#mail").value = "";
//         document.querySelector("#password").value = "";
//         document.querySelector("#confirm").value = "";
//     }
// })



// document.querySelector("#btn").addEventListener("click", ()=>{
//     let firstname =document.querySelector("#firstname").value;
//     let surname =document.querySelector("#surname").value;
//     let mail =document.querySelector("#mail").value;
//     let password =document.querySelector("#password").value;
//     let confirm =document.querySelector("#confirm").value;
//     let errorMessage =document.querySelector("#error-message");
    
//     if(password.length<8){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML= "minimum 8 simvol";
//     }else 
//     if(password !== confirm){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML= "tesdiq sifresi ile uygun gelmir";
//     }else{
//         errorMessage.style.color = "green";
//         errorMessage.innerHTML= "tesdiq sifresi uygundur";
//         let data={
//             firstname,
//             surname,
//             mail,
//             password,
//             confirm,
//         };
//         console.log(data);
//         document.querySelector("#firstname").value = "";
//         document.querySelector("#surname").value = "";
//         document.querySelector("#mail").value = "";
//         document.querySelector("#password").value = "";
//         document.querySelector("#confirm").value = "";
//     }
   

// });



password.addEventListener("keyup", ()=> {
    let password = document.querySelector("#password");
    checkError(password.value.length, password);
});
// firstname.addEventListener("keyup", ()=> {
//     let firstname = document.querySelector("#firstname");
//     checkError(firstname.value.length, firstname);
// });

function checkError(error, checkInput){
    console.log(error);
    if(error>=8){
    checkInput.style.border="2px solid green";
    }else{
    checkInput.style.border="2px solid red";
    }    
    if(error==0){
        checkInput.style.border="none";
    }
}