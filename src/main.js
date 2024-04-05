import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

let keyWord;

let page = 1;

let perPage = 15;

let maxPage;

const galleryImgs = document.querySelector(".gallery");

const form = document.querySelector("form");

const loader = document.querySelector(".loader");

const showMore = document.querySelector(".load-more-btn");


// описуємо лоадер 

function scrollPage() {
    const galleryItem = document.querySelector(".gallery-item");
    const cardHeight = galleryItem.getBoundingClientRect().height;
    const scrollDistance = cardHeight * 2;
    window.scrollTo({
        top: scrollDistance*2,
        behavior: "smooth"
    });
    console.log(scrollDistance)
}

function scrollSpeed() {
    const list = document.querySelector(".gallery")
    const firstChild = list.children[0]
    const cardHeight = firstChild.getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth"
    });

}
function showLoader(){
    loader.classList.remove("is-hidden");
}

function hideLoader(){
    loader.classList.add("is-hidden");
}

async function  submitHandler (event) {
    try {
        event.preventDefault();
    
    galleryImgs.innerHTML = "";

   keyWord = event.target.elements.search.value.trim();    

    if (keyWord === ""){
        iziToast.warning({
            color: "yellow",
            message: "Please fill in the field for search!",
            position: "topRight"
        })
        return
    }

    showLoader();   

        const data = await fetchImages(keyWord, page, perPage);
        page = 1;
        if (page >= 1){
            showMore.classList.remove("is-hidden");
        }
        if (data.hits.length === 0){
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: "red",
                messageColor: "white",
                position: "topRight"
            })
        }

        maxPage = Math.ceil(data.totalHits / perPage);
        renderImages(data.hits)
         
    } catch (error){

        console.log (error)
        iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please, try again!`,
            position: 'topRight'}
            )

    }finally {
        hideLoader();
    }
}

async function showMoreClicked () {
    page += 1;
    showLoader();

    try {
        const data = await fetchImages (keyWord, page);
        renderImages(data.hits);
        scrollPage();
        if (page >= maxPage) {
            showMore.classList.add("is-hidden");

            iziToast.show({
                color: 'green',
                message: `Sorry, you have reached the end of collection.`,
                position: 'topCenter',
                timeout: 3000,
              });
        }
    } catch (error) {
        console.log (error)
    } finally {
        hideLoader();
    }
}


form.addEventListener("submit", submitHandler);
showMore.addEventListener("click", showMoreClicked);
// document.addEventListener("DOMContentLoaded", () => {
//     scrollSpeed();
// })





