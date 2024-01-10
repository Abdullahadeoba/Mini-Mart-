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
function addBack(){
    if(inp.value === ""){
        error.style.display = "block"
    }else{
    error.style.display = "none"
    cart.push(inp.value)
    document.getElementById("inp").value = ""
    show.innerHTML = cart
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

function displayCart() {
    show.innerHTML = ""
    for(i = 0; i < cart.length; i++){
        show.innerHTML += `
            <p>${i + 1}.${cart[i]}</p>
        `
    }
}