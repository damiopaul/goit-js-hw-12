
import axios from "axios";

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


