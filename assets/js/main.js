// Countries api-dən random 1 ölkə seçirsiniz. View hissəsində Bayraq, input və düymə olacaq. İstifadəçi inputa göstərilən bayrağın adını yazır. Əgər düzdürsə və ya səhvdirsə toastr (plugin) istifadə edərək  düzdür yazdırın.
// Bacaran bunu oyun kimi etsin. Vaxt qoysun və həmin vaxt bitənə qədər hər təxmindən sonra random yeni ölkə bayrağı seçilsin.

const container = document.querySelector(".container")
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `<div class="flag">
        <input type="text" id="input" placeholder="Bayragin adini daxil edin...">
        <button>Save</button> 
        <img src="${data[i].flags.png}" id="foto" class="img-thumbnail" alt="">
    <p id="flagName">${data[i].flags.name}</p>     
  </div>`
    } 
})

document.getElementById("demo").addEventListener("click", myFunction);
var inp = document.getElementById('input').value;
var p = document.getElementById('flagName').textContent;
function myFunction() {
    if(inp.value ==p.value && inp.length > 0){
        alert("Good job!");
    } else if (Yazilan.length > 0) {
      alert("Try again");
    }
    }

