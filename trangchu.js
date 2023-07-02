

  // khai báo biến index và gán giá trị nó bằng 1/ /
  var index = 1
  showslider(index);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider(n) {
      showslider(index += n)
  }
  function showslider(n) {
      var i;
      var sliders = document.getElementsByClassName("myslider");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders.length) { index = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index = sliders.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders.length; i++) {
          sliders[i].style.display = "none"
      }
      sliders[index - 1].style.display = "block"
  }
  var index2 = 1
  showslider2(index2);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider2(n) {
      showslider2(index2 += n)
  }
  function showslider2(n) {
      var i;
      var sliders2 = document.getElementsByClassName("myslider2");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders2.length) { index2 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index2 = sliders2.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders2.length; i++) {
          sliders2[i].style.display = "none"
      }
      sliders2[index2 - 1].style.display = "block"
  }
  var index3 = 1
  showslider3(index3);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider3(n) {
      showslider3(index3 += n)
  }
  function showslider3(n) {
      var i;
      var sliders3 = document.getElementsByClassName("myslider3");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders3.length) { index3 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index3 = sliders3.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders3.length; i++) {
          sliders3[i].style.display = "none"
      }
      sliders3[index3 - 1].style.display = "block"
  }
  var index4 = 1
  showslider4(index4);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider4(n) {
      showslider4(index4 += n)
  }
  function showslider4(n) {
      var i;
      var sliders4 = document.getElementsByClassName("myslider4");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders4.length) { index4 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index4 = sliders4.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders4.length; i++) {
          sliders4[i].style.display = "none"
      }
      sliders4[index4 - 1].style.display = "block"
  }



const btnMenu = document.querySelector('.btn-bars');
const btnNavMobile = document.querySelector('.nav-mobile');
const btnOverlay = document.querySelector('.nav__overlay')
const isOpen = false;
const cartList = document.querySelector('.sub-nav-wrap')
const cartList1 = document.querySelector('.nav__cart-wrap')
const cartList2 = document.querySelector('.icon-cart')

const iconClose = document.querySelector('.icon-close')
const iconClose2 = document.querySelector('.icon-close2')


const iconShop = document.querySelector('.nav-cart')

function showCart(){
    iconShop.addEventListener("click",function(){
        document.querySelector('.nav__cart-wrap').style.display = "block"
    })
    iconClose.addEventListener("click",function(){
        document.querySelector('.nav__cart-wrap').style.display = "none"
    })
} 


btnMenu.onclick = function(){
    btnNavMobile.classList.toggle('active')
    btnOverlay.style.display = "block"
}
btnOverlay.onclick = function(){
    btnNavMobile.classList.remove('active')
    btnOverlay.style.display = "none"
}
showCart()




// function cart
const btnCart = document.querySelectorAll('.addCart')
btnCart.forEach(function(button,index){
    button.addEventListener("click",function(event){
        const btnItem = event.target
        const productItem = btnItem.parentElement
        const productImg = productItem.querySelector('img').src 
        const productName = productItem.querySelector('.text .product-name').innerText 
        const productPrice = productItem.querySelector('.text .product-Price').innerText 
        addCart(productImg,productName,productPrice)
    })
})
function addCart(productImg,productName,productPrice){
    const addLi = document.createElement('li')
    const addUl = document.querySelector('.cart-list')
    const checkList = addUl.querySelectorAll('.cart-item')
    for(var i = 0 ; i <checkList.length;i++ ){
        var productTitle = document.querySelectorAll('.cart-item-name')
        if(productTitle[i].innerText == productName)
        {    alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    const contenLi = ` <li class="cart-item">
    <img src="${productImg}" width="90px" height="90px" alt="">
    <div class="cart-item-product">
        <div class="cart-item-infor">
            <div class="cart-item-name">${productName}</div>
            <div class="cart-item-wrap">
                <span class="cart-item-price">${productPrice}</span><span>đ</span>
                <input type="number" name="item-quantity" value="1" min="1" class="cart-item-quantity" id="cart-item-quantity">
            </div>
            <span class="cart-item-body">
               Xoá
            </span>
        </div>

    </div>
    
</li>`

addLi.innerHTML = contenLi
addUl.append(addLi)
deleteProduct()

totalMoney(addUl)


}

function deleteProduct(){
    const getElementDelete = document.querySelectorAll('.cart-item .cart-item-body')
    for(var i = 0 ; i < getElementDelete.length ; i++){
    getElementDelete[i].onclick = function(event){
        const btnDelete1 = event.target
        const btnDelete2 = btnDelete1.parentElement.parentElement.parentElement
        btnDelete2.remove()

    }
}
}


function totalMoney(addUl){

    var totalMoney = 0
    var cartTotal = document.querySelector('.cart-total .total-money')
    const listShow = addUl.querySelectorAll('.cart-item')
    for(var i = 0 ; i < listShow.length ; i++){
    const btnShow = listShow[i].querySelector('.cart-item .cart-item-product .cart-item-infor .cart-item-wrap .cart-item-price').innerHTML
    let number = parseInt(listShow[i].querySelector("input").value)
    totalMoney =totalMoney + (btnShow  * number)*1000
    
    }
    cartTotal.innerHTML = totalMoney.toLocaleString()

    
}

// Cart Mobile
const mobileCart = document.querySelector(".carts")
cartList2.addEventListener("click",function(){
    document.querySelector('.nav__cart-wrap2').style.display = "block"
})

const btnCart1 = document.querySelectorAll('.addCart')
btnCart1.forEach(function(button,index){
    button.addEventListener("click",function(event){
        const btnItem2 = event.target
        const productItem2 = btnItem2.parentElement
        const productImg2 = productItem2.querySelector('img').src 
        const productName2 = productItem2.querySelector('.text .product-name').innerText 
        const productPrice2 = productItem2.querySelector('.text .product-Price').innerText 
        addCart2(productImg2,productName2,productPrice2)
    })
})
function addCart2(productImg2,productName2,productPrice2){
    const addLi2 = document.createElement('li')
    const addUl2 = document.querySelector('.cart-list2')
    const checkList2 = addUl2.querySelectorAll('.cart-item')
    for(var i = 0 ; i <checkList2.length;i++ ){
        var productTitle2 = document.querySelectorAll('.cart-item-name')
        if(productTitle2[i].innerText == productName2)
        {    alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    const contenLi2 = ` <li class="cart-item">
    <img src="${productImg2}" width="90px" height="90px" alt="">
    <div class="cart-item-product">
        <div class="cart-item-infor">
            <div class="cart-item-name">${productName2}</div>
            <div class="cart-item-wrap">
                <span class="cart-item-price">${productPrice2}</span><span>đ</span>
                <input type="number" name="item-quantity" value="1" min="1" class="cart-item-quantity" id="cart-item-quantity">
            </div>
            <span class="cart-item-body">
               Xoá
            </span>
        </div>

    </div>
    
</li>`
console.log(addUl2)

addLi2.innerHTML = contenLi2
addUl2.append(addLi2)
deleteProduct()

totalMoney2(addUl2)


}

function deleteProduct(){
    const getElementDelete = document.querySelectorAll('.cart-item .cart-item-body')
    for(var i = 0 ; i < getElementDelete.length ; i++){
    getElementDelete[i].onclick = function(event){
        const btnDelete1 = event.target
        const btnDelete2 = btnDelete1.parentElement.parentElement.parentElement
        btnDelete2.remove()

    }
}
}



function totalMoney2(addUl2){

    var cartTotal2 = document.querySelector('.cart-total2 .total-money2')
    
    var totalMoney2 = 0
    const listShow2 = addUl2.querySelectorAll('.cart-item')
    console.log(listShow2)
    for(var i = 0 ; i < listShow2.length ; i++){
        const btnShow2= listShow2[i].querySelector('.cart-item .cart-item-product .cart-item-infor .cart-item-wrap .cart-item-price').innerHTML
        let number2 = parseInt(listShow2[i].querySelector("input").value)
    totalMoney2 =totalMoney2 + (btnShow2  * number2)*1000
    
    }
    cartTotal2.innerHTML = totalMoney2.toLocaleString("de-DE")
    
}

iconClose2.addEventListener("click",function(){
        document.querySelector('.nav__cart-wrap2').style.display = "none"
    })
    


















  