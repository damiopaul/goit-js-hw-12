import{a as b,S,i as l}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function u(r,t,s){const i={params:{key:"43133442-47d9d1fd9c6a7a8602dec5dde",image_type:"photo",orientation:"horizontal",safesearch:!0,q:r,per_page:s,page:t}},e="https://pixabay.com/api/";try{return(await b.get(e,i)).data}catch(o){throw new Error(o.message)}}const $=document.querySelector(".gallery"),q=new S(".gallery a",{caprionsData:"alt"});function g(r){const t=r.map(({largeImageURL:s,webformatURL:i,tags:e,likes:o,views:n,comments:w,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-item-link" href="${s}">
        <img class="item" src="${i}" alt="${e}" />
        </a>
        <ul class="item-info-container">
        <li class="item-additional-info">
        <p><span class="accent">Likes</span></br>${o}</p>
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
        </li>`);$.insertAdjacentHTML("beforeend",t),q.refresh()}let c,a=1,m=15,p;const v=document.querySelector(".gallery"),P=document.querySelector("form"),h=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");function C(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollTo({top:window.scrollY+s,behavior:"smooth"}),console.log(s)}function f(){h.classList.remove("is-hidden")}function y(){h.classList.add("is-hidden")}async function I(r){try{if(r.preventDefault(),a=1,v.innerHTML="",c=r.target.elements.search.value.trim(),c===""){l.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"});return}f();const t=await u(c,a,m);a>=1&&t.hits.length!==0&&d.classList.remove("is-hidden"),t.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),p=Math.ceil(t.totalHits/m),g(t.hits)}catch(t){d.classList.add("is-hidden"),console.log(t),l.error({title:"Error",message:`${t}`,position:"topRight"})}finally{y()}}async function M(){a+=1,f();try{const r=await u(c,a);g(r.hits),C(),a>=p&&(d.classList.add("is-hidden"),l.show({color:"green",message:"Sorry, you have reached the end of collection.",position:"topCenter",timeout:3e3}))}catch(r){console.log(r),l.show({color:"green",message:`${r}`,position:"topCenter",timeout:3e3})}finally{y()}}P.addEventListener("submit",I);d.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
