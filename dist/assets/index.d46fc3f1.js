const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&y(c)}).observe(document,{childList:!0,subtree:!0});function m(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function y(t){if(t.ep)return;t.ep=!0;const r=m(t);fetch(t.href,r)}};b();var h="./assets/m.21577d5a.mp3",v="./assets/click.248312c2.wav",w="./assets/false.66be19b4.wav",g="./assets/true.9f44cd89.wav",L="./assets/success.490ec437.wav",k="./assets/fireworks1.f814ada5.wav",$="./assets/mixkit-cat-walk-371.68643547.mp3";const f=document.querySelector("#birthday");f.innerHTML=`
  <h1></h1>
  <h1>\u203A_~</h1>
  <audio src=${v} preload=auto></audio>
  <audio src=${g} preload=auto></audio>
  <audio src=${w} preload=auto></audio>
  <audio src=${L} preload=auto></audio>
  <audio src=${k}c preload=auto></audio>
  <audio src=${h} preload=auto loop></audio>
  <audio src=${$} preload=auto loop></audio>
`;const n=document.querySelectorAll("h1"),o=document.querySelectorAll("audio"),T=document.querySelectorAll("#stars,#stars2,#stars3"),u=document.querySelector("dialog"),i=document.querySelector("select"),l=document.querySelector("input[type=date]"),a=document.querySelectorAll("output"),d=document.querySelector("button");function p(){n[0].style.animation="hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)",n[1].style.animation="hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)",f.addEventListener("click",e=>{e.stopPropagation(),o[6].pause(),o[6].currentTime=0,o[5].play(),party.confetti(n[1],{count:party.variation.range(9,20)}),n[0].innerText="Happy Birthday",n[0].setAttribute("data-content","\u{1F38A}"),n[1].innerText="Mechid",n[1].setAttribute("data-contentBefore","\u{1F389}"),n[1].setAttribute("data-contentAfter","\u{1F973}");for(let s=0;s<3;s++)T[s].style.animation=`stars${s+1} 60s 1s ease-in-out infinite alternate`},{once:!0}),document.addEventListener("click",e=>{o[4].play(),party.sparkles(e,{count:party.variation.range(3,7),size:party.variation.range(.8,1.2)})})}if(typeof u.showModal=="function")document.addEventListener("DOMContentLoaded",()=>{u.showModal(),u.addEventListener("click",()=>o[0].play()),u.addEventListener("click",()=>o[6].play(),{once:!0}),i.addEventListener("change",()=>{l.value=="2000-01-15"&&i.value==2014?(o[3].play(),i.disabled=!0,d.disabled=!1,d.innerText="Unlocked",d.setAttribute("data-lock","\u{1F511}"),a[0].style.color="greenyellow",a[0].innerHTML=`Yes\u{1F601} <b>2014 \u2713</b>
it's was awesome 8 years of <b>friendship</b>!!`):i.value==2014?(o[1].play(),i.disabled=!0,a[0].style.color="greenyellow",a[0].innerHTML=`Yes\u{1F601} <b>2014 \u2713</b>
it's was awesome 8 years of <b>friendship</b>!!`):(o[2].play(),a[0].style.color="darkorange",a[0].innerHTML=`Nooo\u{1F605} we meet on <span>2014 \u2713</span> not <span>${i.value}\u2717</span> !!`)}),l.addEventListener("change",()=>{l.value=="2000-01-15"&&i.value==2014?(o[3].play(),l.disabled=!0,d.disabled=!1,d.innerText="Unlocked",d.setAttribute("data-lock","\u{1F511}"),a[1].style.color="greenyellow",a[1].innerHTML="Yes\u{1F601} <b>15<sup><small>th</small></sup> january \u2713</b> !!<br>you're younger than me by <b>135</b> day!!"):l.value=="2000-01-15"?(o[1].play(),l.disabled=!0,a[1].style.color="greenyellow",a[1].innerHTML="Yes\u{1F601} <b>15<sup><small>th</small></sup> january \u2713</b> !!<br>you're younger than me by <b>135</b> day!!"):(o[2].play(),a[1].style.color="darkorange",a[1].innerHTML=`Nooo\u{1F605} my birthday on <span>15<sup><small>th</small></sup> january \u2713</span> not <span>${l.value}\u2717</span> !!`)}),u.addEventListener("close",()=>p(),{once:!0})});else{u.hidden=!0;let e=prompt(`\u{1F60E}Hi mechid\u2728, We've create for u a Gift\u{1F381}
but first, u need to answer the question:
wich year our first meeting?`,"");if(e=="2014")alert(`Yes\u{1F601} 2014!!
it's was awesome 8 years of friendship!!`);else if(e.startsWith("201"))alert(`Nooo\u{1F605} we meet on 2014 not "${e}"!!
it's was awesome 8 years of friendship!!`);else if(!e.startsWith("201")){for(;!e.startsWith("201");)e=prompt(`\u26A0\uFE0Fwarning "${e}" not a number!!
\u{1F4A1} our first meeting year was:    201#`,"");e=="2014"?alert(`Yes\u{1F601} 2014!!
it's was awesome 8 years of friendship!!`):e.startsWith("201")&&alert(`Nooo\u{1F605} we meet on 2014 not "${e}"!!
it's was awesome 8 years of friendship!!`)}p()}
