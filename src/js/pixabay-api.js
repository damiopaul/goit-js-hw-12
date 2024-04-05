
import axios from "axios";
// export function fetchImages(keyWord) {
//     const apiOptions = new URLSearchParams ( {    
//        key: "43133442-47d9d1fd9c6a7a8602dec5dde",
//        image_type: "photo",
//        orientation: "horizontal",
//        safesearch: true,
//        q: keyWord
//    });

//    const searchUrl = `https://pixabay.com/api/?${apiOptions}`;

//    return fetch(searchUrl).then(response => {
//     if (!response.ok){
//         throw new Error (responce.status)
//     }
//     return response.json();
//    });
// }




export async function fetchImages (keyWord, page, perPage) {
   
    const options = {
        params: {
            key: "43133442-47d9d1fd9c6a7a8602dec5dde",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            q: keyWord,
            per_page: perPage,
            page: page
        }
    }
    const searchUrl = "https://pixabay.com/api/";

    try {
        const responce = await axios.get(searchUrl, options);
        return responce.data;
                
    } catch (error){
        throw new Error(error.message);
    }
}


