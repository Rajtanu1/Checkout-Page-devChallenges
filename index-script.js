let productOneQuantityContainer = document.querySelector(".product-one__quantity-container");
let productTwoQuantityContainer = document.querySelector(".product-two__quantity-container");
let buyerForm = document.querySelector(".buyer-form");
let dropdownBox = document.querySelector(".drop-down-box");
let checkbox = document.querySelector(".checkbox");
let dropdownIcon = document.querySelector(".drop-down-icon");
let checkIcon = document.querySelector(".fa-check");
let inputWithIdCountry = document.querySelector("#country");
let validationPopup = document.querySelector(".validation-popup");

//custom functions
function checkElementVisibility(element) {
  if (element.classList.contains("visible")) {
    return true;
  } else {
    return false;
  }
};

function toggleElementVisibilityClassName(element) {
  if (element.classList.contains("visible")) {
    element.classList.remove("visible");
    element.classList.add("invisible");
  } else {
    element.classList.add("visible");
    element.classList.remove("invisible");
  }
};

function addSlideInOutAnimationToValidationPopup() {
  validationPopup.style.animationName = "slide-in-out";
};

function removeSlideInOutAnimationFromValidationPopup() {
  validationPopup.style.animationName = "";
};

function emptyFormInputFields() {
  let counter = buyerForm.length - 1; 

  while (counter > -1) {
    buyerForm[counter].value = "";
    counter--;
  }
};

productOneQuantityContainer.addEventListener("click", function(event) {
  let clickedElement = event.target;
  let productQuantityElement = productOneQuantityContainer.children[1];
  let productQuantityElementTextContent = Number(productQuantityElement.textContent);

  if (clickedElement.classList.contains("add") === true) {
    productQuantityElement.textContent = productQuantityElementTextContent + 1;
  } else if (clickedElement.classList.contains("remove") === true && productQuantityElementTextContent > 0) {
    productQuantityElement.textContent = productQuantityElementTextContent - 1;
  }
});

productTwoQuantityContainer.addEventListener("click", function(event) {
  let clickedElement = event.target;
  let productQuantityElement = productTwoQuantityContainer.children[1];
  let productQuantityElementTextContent = Number(productQuantityElement.textContent);

  if (clickedElement.classList.contains("add") === true) {
    productQuantityElement.textContent = productQuantityElementTextContent + 1;
  } else if (clickedElement.classList.contains("remove") === true  && productQuantityElementTextContent > 0) {
    productQuantityElement.textContent = productQuantityElementTextContent - 1;
  }
});

dropdownBox.addEventListener("click", function(event) {
  let clickedElement = event.target;

  if (clickedElement.className === "drop-down-option") {
    inputWithIdCountry.value = clickedElement.textContent;
  }
});

dropdownIcon.addEventListener("click", function(event) {
  let dropdownBoxIsVisible = checkElementVisibility(dropdownBox);
  
  if (dropdownBoxIsVisible === true) {
    toggleElementVisibilityClassName(dropdownBox);
    dropdownBox.style.transform = "scale(0)";
  } else {
    toggleElementVisibilityClassName(dropdownBox);
    dropdownBox.style.transform = "scale(1)";
  }
});

checkIcon.addEventListener("click", function(event) {
  let isCheckIconVisible = checkElementVisibility(checkIcon);

  if (isCheckIconVisible === true) {
    toggleElementVisibilityClassName(checkIcon);
    checkIcon.style.opacity = "0";
    checkbox.style.borderColor = "black";
  } else {
    toggleElementVisibilityClassName(checkIcon);
    checkIcon.style.opacity = "1";
    checkbox.style.borderColor = "white";
  }
})

buyerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addSlideInOutAnimationToValidationPopup();
  emptyFormInputFields();
  setTimeout(removeSlideInOutAnimationFromValidationPopup, 3000);
});
