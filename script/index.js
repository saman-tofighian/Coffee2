let num = 3;
const _header = document.getElementsByTagName('header')[0];
const _allDifferentArticle = document.querySelectorAll('#different>.row>article');
const about = document.getElementById('about');
const MenuRow = document.querySelector('#menu>.row');
const Banner = document.querySelector('#banner');
const MenuBtn = document.querySelectorAll('#menu>.row>article>section>button');
const AllH2 = document.querySelectorAll('h2');
const AllMenuArticle = document.querySelectorAll('#menu>.row>article');

if (_header) {
  document.querySelector('#mobile>span').addEventListener('click', () => {
    if (num % 2) {
      document.getElementById('nav-mobile').style.top = '80px';
      document.querySelector('#mobile>span>i').className = 'bi bi-x-lg';
      document.querySelector('#mobile>span>i').style.color = 'crimson';
    } else {
      document.getElementById('nav-mobile').style.top = '-170px';
      document.querySelector('#mobile>span>i').className = 'bi bi-list';
      document.querySelector('#mobile>span>i').style.color = '#1E1E1E';
    }
    num++;
  });
}

if (_header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > _header.offsetTop) {
      document.querySelector('header').style.top = '0';
      document.querySelector('header>nav').style.boxShadow = '0px 20px 50px 0 rgba(0, 0, 0, 0.05)';
    } else {
      document.querySelector('header').style.top = '-100px';
      document.getElementById('nav-mobile').style.top = '-170px';
      document.querySelector('#mobile>span>i').className = 'bi bi-list';
      document.querySelector('#mobile>span>i').style.color = '#1E1E1E';
    }
  });
}

if (about) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > about.offsetTop - 350) {
      document.querySelector('#about>.row>article').style.transform = 'translate(0)';
      document.querySelector('#about>.row>figure').style.transform = 'translate(0)';
    }
  });
}

if (MenuRow) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > MenuRow.offsetTop - 350) {
      document.querySelector('#menu>.row>article:nth-of-type(1)').style.transform = 'translateX(0)';
      document.querySelector('#menu>.row>article:nth-of-type(2)').style.transform = 'scale(1)';
      document.querySelector('#menu>.row>article:nth-of-type(3)').style.transform = 'scale(1)';
      document.querySelector('#menu>.row>article:nth-of-type(4)').style.transform = 'translateX(0)';
    }
  });
}

if (Banner) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > Banner.offsetTop - 200) {
      document.querySelector('#banner>.row>article').style.transform = 'translateX(0)';
      document.querySelector('#banner>.row>figure').style.transform = 'translateX(0)';
    }
  });
}

_allDifferentArticle.forEach((item) => {
  if (item) {
    item.addEventListener('mousemove', (e) => {
      let x = (e.pageX - item.offsetLeft);
      let y = (e.pageY - item.offsetTop);
      let _wi = (60 / item.clientWidth);
      let _hi = (60 / item.clientHeight);
      let sumX = (x * _wi) - 30;
      let sumY = (y * _hi) - 30;
      item.style.transform = 'perspective(780px)rotateX(' + sumY + 'deg)rotateY(' + sumX + 'deg)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'rotate(0)';
    });
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    if (document.querySelector('#motto>.row>article')) {
      document.querySelector('#motto>.row>article').style.transform = 'translateX(0)';
    }
  }, 200);
});

// CounterOfCardNumber
let cardNumber = localStorage.getItem('cardNumber') || 0;
if (document.getElementsByClassName('card-number')[0]) {
  document.getElementsByClassName('card-number')[0].innerHTML = cardNumber;
}
MenuBtn.forEach((item) => {
  item.addEventListener('click', () => {
    cardNumber++;
    if (document.getElementsByClassName('card-number')[0]) {
      document.getElementsByClassName('card-number')[0].innerHTML = cardNumber;
    }
    localStorage.setItem('cardNumber' , cardNumber)
  });
});
// CounterOfCardNumber

// Close Tab
const _title = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come Back ;(';
});

window.addEventListener('focus', () => {
  document.title = _title;
});
// Close Tab

// Slider *******************
let turn = 0;
let _window = document.getElementsByClassName('window')[0]?.clientWidth;
let _bus = document.getElementsByClassName('bus')[0];
let _BusArticle = document.querySelectorAll('.bus>article');

window.addEventListener('resize', () => {
  _window = document.getElementsByClassName('window')[0]?.clientWidth;
  if (_bus) {
    _bus.style.width = _window * _BusArticle.length + 'px';
    _BusArticle.forEach((item) => {
      item.style.width = _window + 'px';
    });
  }
});

if (_bus) {
  _bus.style.width = _window * _BusArticle.length + 'px';
  _BusArticle.forEach((item) => {
    item.style.width = _window + 'px';
  });
}

if (document.getElementById('right-click')) {
  document.getElementById('right-click').addEventListener('click', () => {
    if (turn < _BusArticle.length - 1) {
      turn++;
    } else {
      turn = 0;
    }
    _moveBus();
  });
}

if (document.getElementById('left-click')) {
  document.getElementById('left-click').addEventListener('click', () => {
    if (turn > 0) {
      turn--;
    } else {
      turn = _BusArticle.length - 1;
    }
    _moveBus();
  });
}
function _moveBus() {
  if (_bus) {
    _bus.style.transform = 'translateX(-' + turn * _window + 'px)';
  }
}
let SetIntervalSlider;
if (_bus) {
  SetIntervalSlider = setInterval(() => {
    if (turn < _BusArticle.length - 1) {
      turn++;
    } else {
      turn = 0;
    }
    _moveBus();
  }, 5000);

  _bus.addEventListener('mouseenter', () => {
    clearInterval(SetIntervalSlider);
  });

  _bus.addEventListener('mouseleave', () => {
    SetIntervalSlider = setInterval(() => {
      if (turn < _BusArticle.length - 1) {
        turn++;
      } else {
        turn = 0;
      }
      _moveBus();
    }, 4000);
  });
}
// Slider *******************

// Open Modal Login ************
if (document.querySelector('header>nav>div>button')) {
  document.querySelector('header>nav>div>button').addEventListener('click', () => {
    if (document.getElementById('login')) {
      document.getElementById('login').style.opacity = '1';
      document.getElementById('login').style.visibility = 'visible';
      setTimeout(() => {
        if (document.getElementById('form')) {
          document.getElementById('form').style.transform = 'scale(1)';
        }
      }, 300);
    }
  });
}
// Open Modal Login ************

// Close Modal Login When Clicking on Remove Icon ******
if (document.querySelector('.del>span')) {
  document.querySelector('.del>span').addEventListener('click', () => {
    if (document.getElementById('form')) {
      document.getElementById('form').style.transform = 'scale(0)';
      setTimeout(() => {
        if (document.getElementById('login')) {
          document.getElementById('login').style.opacity = '0';
          document.getElementById('login').style.visibility = 'hidden';
        }
      }, 300);
    }
  });
}
// Close Modal Login When Clicking on Remove Icon ******

// Close Modal Login When Clicking on Window *******
window.addEventListener('click', function (event) {
  if (document.getElementById('login') && event.target == document.getElementById('login')) {
    if (document.getElementById('form')) {
      document.getElementById('form').style.transform = 'scale(0)';
      setTimeout(() => {
        document.getElementById('login').style.opacity = '0';
        document.getElementById('login').style.visibility = 'hidden';
      }, 300);
    }
  }
});
// Close Modal Login When Clicking on Window *******

// ShoppingCart Page ************
const shoppingRow = document.querySelector('#shopping>.row');
if (shoppingRow) {
  if (cardNumber === 0) {
    class EmptyShopping {
      Show() {
        const article = document.createElement('article');
        article.innerHTML = `
          <h2>
            <i class="bi bi-basket-fill"></i>
          </h2>
          <h4>Your shopping cart is empty!</h4>
          <div>
            <a href="index.html#menu">Go back</a>
          </div>
        `;
        return article;
      }
    }
    const ShowEmpty = new EmptyShopping();
    shoppingRow.appendChild(ShowEmpty.Show());
  } else {
    class ShowCart{
      ShowItem(){
        const section = document.createElement('section')
        section.setAttribute('id' , 'parent-item')
        section.classList.add('gap-5' , 'gap-xl-0')
        section.innerHTML = `
        <section class="col-11 col-xl-7">
                        <div class="item-title col-11 col-xl-7">
                            <h2>Cart-Items</h2>
                        </div>
                        <article>
                            <div class="items gap-5 justify-content-center justify-content-xl-between gap-xl-0">
                                <figure class="col-5 col-xl-3">
                                    <img src="img/Menu1.webp" alt="">
                                </figure>
                                <div class="col-5 content col-xl-3">
                                    <h4>Cappuccino</h4>
                                    <h5>10kg</h5>
                                    <h6>small</h6>
                                    <div class="d-flex">
                                        <button><i class="bi bi-trash-fill"></i></button>
                                        <button><i class="bi bi-heart-fill"></i></button>
                                    </div>
                                </div>
                                <div class="quanty col-11 col-xl-5">
                                    <button><i class="bi bi-dash"></i></button>
                                    <input type="number" min="0" value="1">
                                    <button><i class="bi bi-plus"></i></button>
                                    <div class="price w-100">
                                        <h5>18.99 $</h5>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div class="items gap-5 justify-content-center justify-content-xl-between gap-xl-0">
                                <figure class="col-5 col-xl-3">
                                    <img src="img/Menu2.webp" alt="">
                                </figure>
                                <div class="col-5 content col-xl-3">
                                    <h4>Cappuccino</h4>
                                    <h5>10kg</h5>
                                    <h6>small</h6>
                                    <div class="d-flex">
                                        <button><i class="bi bi-trash-fill"></i></button>
                                        <button><i class="bi bi-heart-fill"></i></button>
                                    </div>
                                </div>
                                <div class="quanty col-11 col-xl-5">
                                    <button><i class="bi bi-dash"></i></button>
                                    <input type="number" min="0" value="1">
                                    <button><i class="bi bi-plus"></i></button>
                                    <div class="price w-100">
                                        <h5>18.99 $</h5>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>

                    <div class="checkOut col-11 col-xl-3 order-4 order-xl-0">
                        <div class="title-summary">
                            <h2>summary</h2>
                        </div>
                        <div class="title-products">
                            <h5 class="col-6">products</h5>
                            <span>53.45$</span>
                            <h5 class="col-6">shipping</h5>
                            <span>gratis</span>
                        </div>
                        <div class="total">
                            <h6 class="col-6">total amount</h6>
                            <span>53.45$</span>
                        </div>
                        <div class="btn-summary">
                            <button id='checkOutBtn'>Go To Check Out</button>
                        </div>
                    </div>

                    <div class="col-11 col-xl-9 date-shopping">
                        <div class="col-xl-7">
                            <h6>expected shipping delivery</h6>
                            <span>9.10.2023- 14.08.2023</span>
                        </div>
                    </div>
                    <div class="col-11 col-xl-9 accept-shopping">
                        <div class="col-xl-7">
                            <h6>we accept</h6>
                            <div>
                                <figure class="col-2">
                                    <img src="img/visa.svg" alt="">
                                </figure>
                                <figure class="col-2">
                                    <img src="img/amex.svg" alt="">
                                </figure>
                                <figure class="col-2">
                                    <img src="img/mastercard.svg" alt="">
                                </figure>
                                <figure class="col-2">
                                    <img src="img/paypal.png" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `
        return section
      }
    }
    const ShowItems = new ShowCart()
    shoppingRow.appendChild(ShowItems.ShowItem())
  }
// Shipping Address
  document.getElementById('checkOutBtn').addEventListener('click' , ()=>{
    shoppingRow.innerHTML = ''
    document.querySelector('#breadcrumb>.breadcrumb>li:nth-of-type(2)').innerHTML = '' 
    document.querySelector('#breadcrumb>.breadcrumb>li:nth-of-type(2)').innerHTML = '<a href="shoppingCart.html">ShoppingCart</a>' 
    const _liBreadCrumb = document.createElement('li')
    _liBreadCrumb.classList.add('breadcrumb-item' , 'active')
    _liBreadCrumb.textContent = 'ShippingAddress'
    document.querySelector('#breadcrumb>.breadcrumb').appendChild(_liBreadCrumb)

    class ShippingAddress{
      show(){
        let section = document.createElement('section')
        section.setAttribute('id' , 'shippingAddress')
        section.innerHTML = `
        <div>
                  <div class="title-address">
                    <h2 class="text-center">Billing address</h2>
                  </div>
                  <section class="inputs gap-4">
                    <div class="col-11 col-xl-3">
                      <label for="">First name :</label>
                      <input type="text" required autocomplete="off">
                    </div>
                    <div class="col-11 col-xl-3">
                      <label for="">Last name :</label>
                      <input type="text" required autocomplete="off">
                    </div>
                    <div class="col-11 col-xl-6">
                      <label for="">UserName :</label>
                      <input type="text" required autocomplete="off">
                    </div>
                    <div class="col-11 col-xl-6">
                      <label for="">Email (Optional) :</label>
                      <input type="text" autocomplete="off">
                    </div>
                    <div class="col-11 col-xl-6">
                      <label for="">Address :</label>
                      <input type="text" required autocomplete="off">
                    </div>
                    <div class="col-11 col-xl-6">
                      <label for="">Address 2 (Optional) :</label>
                      <input type="text" autocomplete="off">
                    </div>
                    <section class="gap-4" id="address">
                      <div class="col-11 col-xl-3">
                        <label for="">Country :</label>
                        <select name="" id="">
                          <option value="">Choose...</option>
                          <option>united states</option>
                        </select>
                      </div>
                      <div class="col-11 col-xl-3">
                        <label for="">State :</label>
                        <select name="" id="">
                          <option value="">Choose...</option>
                          <option>california</option>
                        </select>
                      </div>
                      <div class="col-11 col-xl-2">
                        <label for="">Zip :</label>
                        <input type="text" required autocomplete="off">
                      </div>
                    </section>
                  </section>
                  <section id="btn-go-to" class="gap-5 gap-xl-0">
                    <div class="col-11 col-xl-2 text-center text-xl-start">
                    <a href="shoppingCart.html">go back</a>
                    </div>
                    <div class="col-11 col-xl-3 text-center text-xl-start">
                      <a href="">go to check out</a>
                    </div>
                  </section>
                </div>
        `
        return section
      }
    }
    let address = new ShippingAddress()
    shoppingRow.appendChild(address.show());
  })
// Shipping Address
}
// ShoppingCart Page ************


// DateCopyrights
function _dateCopy(){
    let _dateCopyRights = new Date().getFullYear()
    document.getElementById('DateCopy').innerText = _dateCopyRights
}
_dateCopy()
// DateCopyrights

// SignUp Change into Login ****************
if (document.querySelector('#SignUp .row form .login span')) {
  let numLogin = 5;
  const loginButton = document.querySelector('#SignUp .row form .login span');

  loginButton.addEventListener('click', () => {
      if (numLogin % 2) {
          document.querySelector('#SignUp .row form section:nth-of-type(1)').style.display = 'none';
          loginButton.innerHTML = 'I don`t have an account';
          document.querySelector('#SignUp .row form .create button').innerHTML = 'Login';
      } else {
          document.querySelector('#SignUp .row form section:nth-of-type(1)').style.display = 'flex';
          loginButton.innerHTML = 'I`ve an account';
          document.querySelector('#SignUp .row form .create button').innerHTML = 'Create Account';
      }
      numLogin++;
  });
}
// SignUp Change into Login ****************