var cart = []

function addItem(){
    if(inp.value === ""){
        error.innerHTML = "Input field cannot be empty"
        error.style.display = "block"
    }
    else{
        error.style.display = "none"
        cart.push(inp.value)
        document.getElementById("inp").value = ''
        show.innerHTML = ""
        error.innerHTML = "Item added succesfully"
        error.style.display = "block"
        // console.log(cart);
        displayCart()
        
    }
}

function addFront(){
    if(inp.value === ""){
        error.innerHTML = "Input field cannot be empty"
        error.style.display = "block"
    }else{
    cart.unshift(inp.value)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
    error.innerHTML = "Item added successfully"
    error.style.display = "block"
    displayCart()
    }
}
function editAny(){
    if(show.innerHTML == ""){
        error.innerHTML = "No item to be deleted"
        error.style.display = "block"
        
    }else{
    var userIndex = prompt("Enter the index you want to change")
    var replacement = prompt("What do you want to replace it with?")
    if(userIndex ==""||replacement=="" ){
        alert("You think say you dey wise")
    }else{
        cart.splice(userIndex-1,1,replacement)
         show.innerHTML = cart
        document.getElementById("inp").value = ""
        error.innerHTML = "Item added succesfully"
        error.style.display = "block"
        displayCart()
    }
    }
}


function deleteFront(){
    if(show.innerHTML == ""){
        error.innerHTML = "No item to be deleted"
        error.style.display = "block"
    }
    else{
        cart.shift(show.innerHTML)
        document.getElementById("inp").value = ""
        show.innerHTML = cart
        show.innerHTML = ""
        error.innerHTML = "First item deleted errorfully"
        // error.style.display = "block"
        displayCart()
    }
  
    }

function deleteBack(){
    if(show.innerHTML == ""){
        error.innerHTML = "No item to be deleted"
    }else{  
    cart.pop(show.innerHTML)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
    error.innerHTML = "Last item deleted successfully"
    error.style.display = "block"
    displayCart()
}
}

function deleteAny(){
    if(show.innerHTML == ""){
        error.innerHTML = "No item to be deleted"
        error.style.display = "block"
    } else{
    var deleteIndex = prompt("enter the index you want to delete")
    var userResponse = confirm("Are you sure you want to delete!!!")
    if (deleteIndex !== "" && userResponse == true){
          cart.splice(deleteIndex-1,1)
        error.innerHTML = "item deleted successfully"
        error.style.display = "block"
         displayCart()
    } else{
      alert("God save you ")
    }
    }
  }

  function deleteAll() {
    if(show.innerHTML == ""){
        error.innerHTML = "No item to be deleted"
        error.style.display = "block"    
    }
    else {
          cart.splice(0)
          document.getElementById("show").value = ""
          error.innerHTML = `All Cart has been deleted successfully`
          error.style.display = "block"
      }
    }

// function displayCart() {
//     show.innerHTML = ""
//     for(i = 0; i < cart.length; i++){
//         show.innerHTML += `
//             <tr>
//                 <td>${i + 1}.<td>
//                 <td>${cart[i]}<td>
//             <tr>
//         `
//     }
// }

function displayCart(){
    if(cart.length==0){
    show.innerHTML = `<h1 style="text-align:center;color:white;font-weight:bolder;">There are currently No Items</h1>`
    error.innerHTML = "No Items to be deleted"
    error.style.display = "block"
    
    }else{
        show.innerHTML = ""
        show.innerHTML += `
        <tr>
           <th class="table-dark">S/N</th>
           <th class="table-dark">Items</th>
           <th class="table-dark">Action</th>
        </tr>
        `
        for (let i = 0; i < cart.length; i++) {
            show.innerHTML += `
            <tr class="table-info">
                <td>${i+1}</td>
                <td>${cart[i]}</td>
                <td>
                   <button  onclick="deleteUser(${i})" class="btn btn-danger"></i>Delete</button>
                   <button  onclick="editUser(${i})" class="btn btn-warning"></i>Edit</button>
                   </td>
                   </tr>
                   `   
        }
    } 
}

function deleteUser(){
    cart.splice(cart-1,1)
    error.innerHTML = "Item deleted successfully"
    displayCart()
 }
 
 
//  function editUser(){
//    var edit = document.getElementById("inp").value

//    if(edit = true){
//     updateDtails()
//    }

//  }

//  function updateDtails(){
//     var newDetails = {
//     cart : editProduct.value,
//    }
//     cart.splice(i,1,newDetails)
//     // console.log(allStudents)
//     displayCart()
//     editDiv.innerHTML = ""    
//  }