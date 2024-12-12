
inputName = document.getElementById("Name");
inputUrl = document.getElementById("Url");




var database = [];
var info = localStorage.getItem("info");

if (info != null) {
    database = JSON.parse(info);
    if (!Array.isArray(database)) {
        database = []; 
    }
    display();
    
} 


function getInputValue() {
    var information = {
        name: inputName.value,
        url: inputUrl.value,
    }
    if(nameValidation() && urlValidation()){
    database.unshift(information); 
    localStorage.setItem("info", JSON.stringify(database));
    display();
    clearInputs();
    clearValidation();
    }
   
}


function display() {
    var cartona = "";
    for (var i = 0; i < database.length; i++) {
        cartona += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${database[i].name}</td>
            <td>
                <a href="${database[i].url}" target="_blank" class="btn btn-success">
                    <i class="fa-solid fa-eye"></i> Visit
                </a>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteItem(${i})">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>
            </td>
        </tr>`;
    }
    document.getElementById("t-body").innerHTML = cartona;
}

function deleteItem(index) {
    database.splice(index, 1); 
    localStorage.setItem("info", JSON.stringify(database)); 
    display(); 
}

function nameValidation(){
    var regex=/^[A-Za-z0-9]{3,50}$/;
    var text=inputName.value;
    var msgName =document.getElementById("nameMessage");//alert

    if (regex.test(text) == true) {
    
        inputName.classList.add('is-valid') 
        inputName.classList.remove('is-invalid')
        msgName.classList.add('d-none')
        return true
    }
    else{
        inputName.classList.remove('is-valid') 
        inputName.classList.add('is-invalid')
        msgName.classList.remove('d-none')
        return false
    }
}
function urlValidation(){
    var regex=/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/a-zA-Z0-9#?=&._-]*)?$/;
    var text=inputUrl.value
    var msgUrl =document.getElementById("urlMessage");//alert
    if(regex.test(text)== true){
        inputUrl.classList.add('is-valid')
        inputUrl.classList.remove('is-invalid')
        msgUrl.classList.add('d-none')
        return true 

    }
    else{
        inputUrl.classList.add('is-invalid')
        inputUrl.classList.remove('is-valid')
        msgUrl.classList.remove('d-none')
        return false

    }
}

function clearInputs(){
    inputName.value="";
    inputUrl.value="";
}
function clearValidation(){
    inputName.classList.remove("is-valid", "is-invalid");
    inputUrl.classList.remove("is-valid", "is-invalid");
}





