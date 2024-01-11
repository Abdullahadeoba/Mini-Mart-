var cart = []

function addItem(){
    if(inp.value === ""){
        error.style.display = "block"
    }
    else{
        error.style.display = "none"
        cart.push(inp.value)
        document.getElementById("inp").value = ''
        show.innerHTML = ""
        // console.log(cart);
        displayCart()
        
    }
}

function addFront(){
    if(inp.value === ""){
        error.style.display = "block"
    }else{
    error.style.display = "none"
    cart.unshift(inp.value)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
    displayCart()
    }
}
function editAny(){
    var userIndex = prompt("Enter the index you want to change")
    var replacement = prompt("What do you want to replace it with?")
    if(userIndex ==""||replacement=="" ){
        alert("You think say you dey wise")
    }else{
        cart.splice(userIndex-1,1,replacement)
         show.innerHTML = cart
        document.getElementById("inp").value = ""
        displayCart()
    }
}


function deleteFront(){
    cart.shift(show.innerHTML)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
    show.innerHTML = ""
    displayCart()
    }

function deleteBack(){  
    cart.pop(show.innerHTML)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
    displayCart()
}

function deleteAny(){
    var deleteIndex = prompt("enter the index you want to delete")
    var userResponse = confirm("Are you sure you want to delete!!!")
    if (deleteIndex !== "" && userResponse == true){
      cart.splice(deleteIndex-1,1)
      displayCart()
    } else{
      alert("God save you ")
    }
  }

  function deleteAll() {
    if (cart.length == 0) {
      show.innerHTML =`<p style="text-align:center;font-weight:bold;">No Input to be deleted</p>`
    }else{
      var userResponse = confirm("Are you sure you want to delete!!!")
      if (userResponse = true) {
        cart.splice(0)
        show.innerHTML = `All Cart has been deleted successfully`
      }else {
        alert("Ori Yo E")
      }

    } 
  }

function displayCart() {
    show.innerHTML = ""
    for(i = 0; i < cart.length; i++){
        show.innerHTML += `
            <tr>
                <td>${i + 1}.<td>
                <td>${cart[i]}<td>
            <tr>
        `
    }
}