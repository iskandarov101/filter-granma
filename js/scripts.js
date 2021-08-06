var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


let all = [
  {
    title: `Cupcake Item`,
    img: `img/cupcake-1.jpeg`,
    cost: `$5`
  },
  {
    title: `Cake Items`,
    img: `img/cake-2.jpeg`,
    cost: `$10`
  },
  {
    title: `Cupcake Item`,
    img: `img/cupcake-3.jpeg`,
    cost: `$10`
  },
  {
    title: `Dougnut Item`,
    img: `img/doughnut-2.jpeg`,
    cost: `$10`
  },
  {
    title: `Sweets Item`,
    img: `img/sweets-1.jpeg`,
    cost: `$5`
  },
  {
    title: `Cake Items`,
    img: `img/cake-3.jpeg`,
    cost: `$15`
  },
    {
    title: `Sweets Item`,
    img: `img/sweets-2.jpeg`,
    cost: `$10`
  },
    {
    title: `Sweets Item`,
    img: `img/sweets-3.jpeg`,
    cost: `$15`
  },
  {
    title: `Cupcake Item`,
    img: `img/cupcake-2.jpeg`,
    cost: `$10`
  },
  {
    title: `Dougnut Item`,
    img: `img/doughnut-1.jpeg`,
    cost: `$5`
  },
  {
    title: `Cake Items`,
    img: `img/cake-1.jpeg`,
    cost: `$5`
  },
  {
    title: `Dougnut Item`,
    img: `img/doughnut-3.jpeg`,
    cost: `$15`
  }
];

let cake = all.slice().filter(function (cake) {
  return cake.title.match('Cake Items');
});
let cupcake = all.slice().filter(function (cupcake) {
  return cupcake.title.match('Cupcake Item');
});
let sweets = all.slice().filter(function (sweet) {
  return sweet.title.match('Sweets Item');
});
let doughnut = all.slice().filter(function (doughnut) {
  return doughnut.title.match('Dougnut Item');
});



let elNavOpenBtn = $_('.nav-open-btn');
let elNav = $_('.nav');
let elForm = $_('.cake-sort-form');
let elCakesOutput = $_('.cakes-output');
let elSearchInput = $_('.serch-input');
let elCakeItemTemplate = $_('.output-item-template').content;


function openNav () {
  elNav.classList.toggle('nav--open');
}

function displayCakeItems (array) {

  elCakesOutput.innerHTML = '';
  let cakeItemFragment = document.createDocumentFragment();
  for(let i = 0; i < array.length; i++) {
    let cakeItem = elCakeItemTemplate.cloneNode(true);
    $_('.cake-title', cakeItem).textContent = array[i].title;
    $_('.cake-cost', cakeItem).textContent = array[i].cost;
    $_('.cake-item-img', cakeItem).src = array[i].img;
    cakeItemFragment.appendChild(cakeItem);
  }
  elCakesOutput.appendChild(cakeItemFragment);
}

function stopSubmit(e) {
  e.preventDefault();

  let regInput = new RegExp(elSearchInput.value, 'gi');

  let searchArray = all.slice().filter(function(item) {
    return item.title.match(regInput);
  });
  displayCakeItems(searchArray);
  elSearchInput.value = '';
}


elNavOpenBtn.addEventListener('click', openNav);


let elSortBtns = document.querySelectorAll('.sort-btn');

elSortBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    if(e.target.classList.contains('all-btn')) {
      displayCakeItems(all);
    } else if (e.target.classList.contains('cake-btn')) {
      displayCakeItems(cake);
    } else if (e.target.classList.contains('cupcakes-btn')) {
      displayCakeItems(cupcake);
    } else if (e.target.classList.contains('sweets-btn')) {
      displayCakeItems(sweets);
    } else if (e.target.classList.contains('doughnuts-btn')) {
      displayCakeItems(doughnut);
    }
  }); 
});

elForm.addEventListener('submit', stopSubmit);