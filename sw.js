if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const o=e=>a(e,n),t={module:{uri:n},exports:d,require:o};s[n]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/About_text.png",revision:"07381f7d92689a61a25dcd3172079efa"},{url:"assets/images/About.png",revision:"4cc5a49331185207fa16748a56beaeb8"},{url:"assets/images/Amarelo.png",revision:"2376d88cad2f2a6b96c525b9d87b9161"},{url:"assets/images/Azul Claro.png",revision:"1d9ac7275576df7385a0288b6489985f"},{url:"assets/images/Azul Escuro.png",revision:"1e053263eff1fe4e020950c067b870f6"},{url:"assets/images/background.jpg",revision:"52e8f9fbc3ee59499f190532e21107b1"},{url:"assets/images/brush1.png",revision:"6469307e2e869085975b256d9447407d"},{url:"assets/images/brush2.png",revision:"d7b2eee3f0925051f564f4128a3e5707"},{url:"assets/images/Done.png",revision:"9363a8e87d90e6fd5eb22576e490a870"},{url:"assets/images/Home.png",revision:"7eec24a0a793151f339120786e12e90f"},{url:"assets/images/Laranja.png",revision:"02338fa7cd0e00204a2ce5b4fc3df6bd"},{url:"assets/images/Restart.png",revision:"fe9054a8b757f4d763a034a506c94029"},{url:"assets/images/Rosa.png",revision:"5552b4423b9230f4bc83ceb841ca409d"},{url:"assets/images/Roxo.png",revision:"396870751ab762db93abc53a945d1eb4"},{url:"assets/images/Save.png",revision:"6b3921926b3887282e2e9e4b7bd7e220"},{url:"assets/images/softBrush.png",revision:"9d9bd6b24a1b8a63cc0c7f9d151848a9"},{url:"assets/images/Start.png",revision:"13014b49d29d22915c9fe53d690e0e45"},{url:"assets/images/Title.png",revision:"ebdc24293f97116fe374c6517c071e9a"},{url:"assets/images/Verde.png",revision:"523f837f8798adae8b21a36881e422a2"},{url:"assets/images/Vermelho.png",revision:"7a08927bdcdbed7c474d7d9c0778f67f"},{url:"assets/sounds/amarelo_mixagem.mp3",revision:"1d707f597254006c12f1ee6606116027"},{url:"assets/sounds/azul_claro_mixagem.mp3",revision:"5cffb0459898777e7fc2e1503cf8b256"},{url:"assets/sounds/laranja_mixagem.mp3",revision:"916cdbf343656bb60773c7135cc0019a"},{url:"assets/sounds/rosa_mixagem.mp3",revision:"106478378773348e6ddb1535d6c453d9"},{url:"assets/sounds/roxo_mixagem.mp3",revision:"3f7c6506a8698eae81dcf3985a54d7dd"},{url:"assets/sounds/verde_mixagem.mp3",revision:"ee097ae529e5f447d2d5d493e87f1e85"},{url:"assets/sounds/vermelho_mixagem.mp3",revision:"d5adc7d6d9f10c4a9d3ce822bcfe8eda"},{url:"index.html",revision:"e9e42ea5a8a1830b421010863ac92c2b"},{url:"sketch.js",revision:"1e0ee095d0ca66df71fe4b8f2de93e31"},{url:"style.css",revision:"4ca2e2c229b6e15d72da8bda022e72b4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
