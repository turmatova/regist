let form = document.querySelector(".form"); 
let email = document.querySelector(".email"); 
let pass = document.querySelector("#password"); 
let info = document.querySelector(".message"); 
let btn = document.querySelector(".add"); 
let eye = document.querySelector(".eye"); 
let eyeOff = document.querySelector(".outline"); 
 
let count = 4; 
eye.style.display = "none"; 
eyeOff.addEventListener("click", () => { 
 pass.type = "text"; 
 eyeOff.style.display = "none"; 
 eye.style.display = "inline-block"; 
}); 
 
eye.addEventListener("click", () => { 
 pass.type = "password"; 
 eye.style.display = "none"; 
 eyeOff.style.display = "inline-block"; 
}); 
form.addEventListener("submit", (event) => { 
 event.preventDefault(); 
 
 if (email.value === "Motionweb@gmail.com" && pass.value === "12345") { 
  info.innerHTML = "Доступ открыт!"; 
  info.style.color = "green"; 
  email.style.boxShadow = "1px 1px 10px green"; 
  pass.style.boxShadow = "1px 1px 10px green"; 
 } 
 else { 
  count--; 
  if (email.value.trim() === "" && pass.value.trim() === "") { 
   info.innerHTML = "заполнить!" 
   email.style.boxShadow = "1px 1px 10px red"; 
   pass.style.boxShadow = "1px 1px 10px red"; 
   info.style.color = "red"; 
  } 
  else if (count > 0) { 
   email.style.boxShadow = "1px 1px 10px red"; 
   pass.style.boxShadow = "1px 1px 10px red"; 
   info.style.color = "red" 
   info.innerHTML = ` Неверные данные! Осталось ${count} попыт${count === 1 ? "ка" : "ки"}`; 
  } else { 
   info.innerHTML = "Доступ заблокирован!"; 
   email.style.boxShadow = "1px 1px 10px red"; 
   pass.style.boxShadow = "1px 1px 10px red"; 
   btn.setAttribute("disabled", "disabled"); 
   email.setAttribute("disabled", "disabled"); 
   pass.setAttribute("disabled", "disabled"); 
  } 
 } 
});