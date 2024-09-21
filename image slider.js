//get slider items | Array.from [ES6 feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get number of slides
var slidesCount = sliderImages.length

//set current slide
var currentSlide = 1;

//slide number element
var slideNumberElement = document.getElementById("slide-number");

//previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the main ul elemnt
var paginationElement = document.createElement("ul");

//set id on created ul element
paginationElement.setAttribute("id", "pagination-ul");

// create li based on slides count
for (var i = 1; i <= slidesCount; i++) {

    //create the li
    var paginationItems = document.createElement("li");

    //set cuctom attribute
    paginationItems.setAttribute("data-slide", i);

    //set item content
    paginationItems.appendChild(document.createTextNode(i));

    //append items to the main ul list
    paginationElement.appendChild(paginationItems);

}

//add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

//get the new created ul
var paginationNewUl = document.getElementById("pagination-ul");

//get pagination items | Array.from [ES6 feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets items
for(var i = 0; i < paginationBullets.length; i++){

    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-slide")) 

        theChecker();
    }

}

// trigger the checker function
theChecker();

//next slide function
function nextSlide() {

if (nextButton.classList.contains('disabled')){

    return false;

} else{
    currentSlide++;
    theChecker();
}
}

//previous slide function
function prevSlide() {

    if (prevButton.classList.contains('disabled')){

        return false;

    } else{
        currentSlide--;
        theChecker();
    }
}

//create the checker function
function theChecker() {

    //set the slide number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + 'of' + (slidesCount);

    //remove all active classes
    removeAllActive()

    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active')

    //set active class on current pagination item
    paginationNewUl.children[currentSlide - 1].classList.add('active')

    //check if current slide is the first
    if(currentSlide == 1){

        //add disabled class on previous button
        prevButton.classList.add('disabled')

    } else{

        //remove disabled class from previous button
        prevButton.classList.remove('disabled')

    }

    //check if current slide is the last
    if(currentSlide == slidesCount){

        //add disabled class on previous button
        nextButton.classList.add('disabled')
    
    } else{
    
        //remove disabled class from previous button
        nextButton.classList.remove('disabled')
    
    }

}

//remove all active classes from images and pagination bullets
function removeAllActive(){

    //loop through images
    sliderImages.forEach(function (img) {

        img.classList.remove("active")

    });

    //loop through pagination bullets
    paginationBullets.forEach(function(bullet){

        bullet.classList.remove("active");

    });

}