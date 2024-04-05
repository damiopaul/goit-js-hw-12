export function fetchImages(keyWord) {
    const apiOptions = new URLSearchParams ( {    
       key: "43133442-47d9d1fd9c6a7a8602dec5dde",
       image_type: "photo",
       orientation: "horizontal",
       safesearch: true,
       q: keyWord
   });

   const searchUrl = `https://pixabay.com/api/?${apiOptions}`;

   return fetch(searchUrl).then(response => {
    if (!response.ok){
        throw new Error (responce.status)
    }
    return response.json();
   });
}