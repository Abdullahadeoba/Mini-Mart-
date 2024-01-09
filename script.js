// var allStudent = ['Christiana', 'Tola', 'Obaraka', 'Olobasalo', 'teeDollar']
// console.log(allStudent);

// var ages = [34, 87, 90, 45, 46, 47, 48, 49, 50]
// console.log(ages);

// var student = ['Opadeji Mary', 54, 'Dark', 'single', 100000, false]
// console.log(student);

// var student2 = ['Uthman Oluwaseyi', 97, 'Overdark', 'single and taken', true]
// console.log(student2);

// var girlfriends = ['Precious', 'Pelumi', 'Christiana', 'Mary', 'Janet', 'Gloria', 'Blessing', 'Adeola']

// girlfriends.pop()
// girlfriends.shift()
// girlfriends.push('Adunni')
// girlfriends.unshift('Precious')
// console.log(girlfriends);

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
        console.log(cart);
        show.innerHTML = ""
        for(i = 0; i < cart.length; i++){
            show.innerHTML += `<p>${i + 1}. ${cart[i]}</p>`
        }
        
    }
}

