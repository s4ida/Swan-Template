const wishlistdiv =document.getElementById('wishlistdiv')

function getwishlist () {
    wishlistdiv.innerHTML = ''

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) => {
        let product = document.createElement('div')
        product.className = 'wishlistproducts col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
        product.innerHTML = `
        <img src="${item.image}" alt="">
        <p>"${item.name}"</p>
        <p>"${item.price}"</p>
        <button class="addtobasketbtn" onclick="addtoBasket(${item.id})">Add to <i class="fa-solid fa-cart-shopping"></i></button>
        <button class="removefromwishlist" onclick="removefromwishlist(${index})">Remove from wishlist</button>
        `
        wishlistdiv.appendChild(product)
    })
}
getwishlist();


function removefromwishlist(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getwishlist() 
}