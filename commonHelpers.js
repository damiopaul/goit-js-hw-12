import{a as b,S,i as l}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(o,r,s){const a={params:{key:"43133442-47d9d1fd9c6a7a8602dec5dde",image_type:"photo",orientation:"horizontal",safesearch:!0,q:o,per_page:s,page:r}},e="https://pixabay.com/api/";try{return(await b.get(e,a)).data}catch(t){throw new Error(t.message)}}const q=document.querySelector(".gallery"),P=new S(".gallery a",{caprionsData:"alt"});function g(o){const r=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:t,views:n,comments:w,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-item-link" href="${s}">
        <img class="item" src="${a}" alt="${e}" />
        </a>
        <ul class="item-info-container">
        <li class="item-additional-info">
        <p><span class="accent">Likes</span></br>${t}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Views</span></br>${n}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Comments</span></br>${w}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Downloads</span></br>${L}</p>
        </li>
        </ul>
        </li>`);q.insertAdjacentHTML("beforeend",r),P.refresh()}let c,i=1,m=15,p;const v=document.querySelector(".gallery"),$=document.querySelector("form"),f=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");function I(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollTo({top:s*2,behavior:"smooth"}),console.log(s)}function h(){f.classList.remove("is-hidden")}function y(){f.classList.add("is-hidden")}async function M(o){try{if(o.preventDefault(),v.innerHTML="",c=o.target.elements.search.value.trim(),c===""){l.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"});return}h();const r=await u(c,i,m);i=1,i>=1&&d.classList.remove("is-hidden"),r.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),p=Math.ceil(r.totalHits/m),g(r.hits)}catch(r){console.log(r),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}finally{y()}}async function C(){i+=1,h();try{const o=await u(c,i);g(o.hits),I(),i>=p&&(d.classList.add("is-hidden"),l.show({color:"green",message:"Sorry, you have reached the end of collection.",position:"topCenter",timeout:3e3}))}catch(o){console.log(o)}finally{y()}}$.addEventListener("submit",M);d.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
