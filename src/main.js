import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

let keyWord;

const galleryImgs = document.querySelector(".gallery");

const form = document.querySelector("form");

const loader = document.querySelector(".loader");


// описуємо лоадер 

function showLoader(){
    loader.classList.remove("is-hidden");
}

function hideLoader(){
    loader.classList.add("is-hidden");
}

function validInput(event) {

    event.preventDefault();
    
    galleryImgs.innerHTML = "";

   keyWord = event.target.elements.search.value.trim();

    showLoader();

    if (keyWord === ""){
        iziToast.warning({
            color: "yellow",
            message: "Please fill in the field for search!",
            position: "topRight"
        })
        return
    }

    fetchImages(keyWord).then(data =>{
        if (data.hits.length === 0){
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: "red",
                messageColor: "white",
                position: "topRight"
            })
        }

        renderImages(data.hits)

        event.target.reset();

        return
    })
    .catch(error => {console.log(error);
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please, try again!`,
          position: 'topRight'}
          )
        }).finally(() => hideLoader())
      }

form.addEventListener("submit", validInput);

