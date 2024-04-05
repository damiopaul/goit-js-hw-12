import{S as f,i as n}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(o){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"43133442-47d9d1fd9c6a7a8602dec5dde",image_type:"photo",orientation:"horizontal",safesearch:!0,q:o})}`;return fetch(i).then(s=>{if(!s.ok)throw new Error(responce.status);return s.json()})}const m=document.querySelector(".gallery"),g=new f(".gallery a",{caprionsData:"alt"});function h(o){const r=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:t,views:a,comments:d,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-item-link" href="${i}">
        <img class="item" src="${s}" alt="${e}" />
        </a>
        <ul class="item-info-container">
        <li class="item-additional-info">
        <p><span class="accent">Likes</span></br>${t}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Views</span></br>${a}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Comments</span></br>${d}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Downloads</span></br>${u}</p>
        </li>
        </ul>
        </li>`);m.insertAdjacentHTML("beforeend",r),g.refresh()}let l;const y=document.querySelector(".gallery"),L=document.querySelector("form"),c=document.querySelector(".loader");function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}function S(o){if(o.preventDefault(),y.innerHTML="",l=o.target.elements.search.value.trim(),b(),l===""){n.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"});return}p(l).then(r=>{r.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),h(r.hits),o.target.reset()}).catch(r=>{console.log(r),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>w())}L.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
