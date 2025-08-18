(()=>{"use strict";var e,o,t,r={155:(e,o,t)=>{var r=t(848),n=t(540),i=t(338),a=t(802),l=t(651);const s=a.DU`
  .smooth {
    background-color: ${({theme:e})=>e.primaryColor};
  }

  .preload {
    transition: background-color 0s !important;
    -webkit-transition: background-color 0s !important;
    -moz-transition: background-color 0s !important;
    -ms-transition: background-color 0s !important;
    -o-transition: background-color 0s !important;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    margin: 0;
    min-height: 100%;
    background-color: ${({theme:e})=>e.primaryColor};
    color: ${({theme:e})=>e.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color 1.5s ease;

    @media only screen and (max-width:1000px){
      font-size: ${({theme:e})=>e.mediaFontSize};
    }
  }

  a {
    color: ${({theme:e})=>e.linkColor};
    @media only screen and (max-width:1000px){
      font-size: ${({theme:e})=>e.mediaFontSize};
    }
  }
  a:visited {
    color: ${({theme:e})=>e.linkVisitedColor};
  }


  h1 {
    text-align: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: ${({theme:e})=>e.primaryDarkColor};
    transition: background-color 1.5s ease;
    border-radius: 6px;
  }

  * {
    margin: 0;
  }
`;var d=t(965),c=t(642),h=t(352);const m=300;var u=t(505);const p=a.Ay.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;

  background: ${({theme:e})=>e.primaryColor};

  @media only screen and (max-width:1000px){
  }
`,g=a.i7`
  0% {
    visibility: hidden;
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    visibility: block;
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`,f=a.Ay.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid ${({theme:e})=>e.textColor};
    opacity: 1;
    border-radius: 50%;
    animation: ${g} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -1s
  }
`,b=p,y=()=>(0,r.jsxs)(b,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),u.Ay.t(u.Sq.COMPONENTS.LOADER.MESSAGE)]}),E=(e,o=300)=>n.lazy((()=>Promise.all([e(),new Promise((e=>setTimeout(e,o)))]).then((([e])=>e)))),v=a.Ay.svg`
  fill: ${({theme:e})=>e.textColor};
  height: ${({theme:e})=>e.fontSize};
  width: ${({theme:e})=>e.fontSize};
  color: ${({theme:e})=>e.textColor};

  @media only screen and (max-width:1000px){
    height: ${({theme:e})=>e.mediaFontSize};
    width: ${({theme:e})=>e.mediaFontSize};
  }
`,T=({url:e,children:o})=>(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{lineHeight:0},children:o}),x=a.Ay.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({theme:e})=>e.textColor} !important;
`,O=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v,{viewBox:"0 0 96 98",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"currentColor",d:"\n            M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69\n            2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59\n            2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448\n            -3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367\n            7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839\n            -1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485\n            -1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97\n            0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052\n            13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822\n            5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481\n            3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364\n            19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\n          "})})}),L=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v,{viewBox:"0 0 382 382",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"currentColor",d:"\n            M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z\n            M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403\n            c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z\n            M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666\n            S109.208,123.432,86.748,123.432z\n            M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168\n            c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,\n            9.246-9.246,9.246h-44.426\n            c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,\n            9.246,4.14,9.246,9.246v15.655\n            c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,\n            330.654L341.91,330.654z\n          "})})}),A=()=>{const e=(new Date).getFullYear();return(0,r.jsxs)(x,{children:[u.Ay.t(u.Nb.FOOTER,{replace:{year:e}}),(0,r.jsx)(T,{url:"https://github.com/lizziemac",children:(0,r.jsx)(O,{})}),(0,r.jsx)(T,{url:"https://www.linkedin.com/in/lizzie-mac/",children:(0,r.jsx)(L,{})})]})},k=E((()=>Promise.all([t.e(385),t.e(390)]).then(t.bind(t,390))),m),w=E((()=>t.e(808).then(t.bind(t,808))),m),S=E((()=>t.e(550).then(t.bind(t,637))),m),_=E((()=>t.e(552).then(t.bind(t,552))),m),C=e=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(y,{}),children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"105vh"},children:[(0,r.jsx)(h.BV,{children:(0,r.jsxs)(h.qh,{path:"/",element:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{toggleTheme:e.toggleTheme}),(0,r.jsx)(h.sv,{})]}),children:[(0,r.jsx)(h.qh,{index:!0,element:(0,r.jsx)(w,{})}),(0,r.jsx)(h.qh,{path:"about",element:(0,r.jsx)(S,{})}),(0,r.jsx)(h.qh,{path:"*",element:(0,r.jsx)(_,{})})]})}),(0,r.jsx)("div",{style:{paddingTop:"1em"},children:(0,r.jsx)(A,{})})]})});i.H(document.getElementById("app")||document.createElement("div")).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)((({callback:e})=>{const{theme:o,toggleTheme:t,isMounted:n}=(0,c.D)();return n?(document.documentElement.setAttribute("lang",u.Ay.language),(0,r.jsx)(l.Kd,{children:(0,r.jsxs)(a.NP,{theme:(0,d.O4)(o),children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{ref:e,children:(0,r.jsx)(C,{toggleTheme:t})})]})})):(0,r.jsx)("div",{})}),{callback:()=>document.body.classList.remove("preload")})}))},642:(e,o,t)=>{t.d(o,{D:()=>a,O:()=>i});var r=t(540),n=t(965);const i=()=>{const e=window.localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return e||o},a=()=>{const[e,o]=(0,r.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),[t,i]=(0,r.useState)(!1),a=e=>{window.localStorage.setItem("theme",e),window.localStorage.setItem("bg-color",(0,n.O4)(e).primaryColor),o(e)};return(0,r.useLayoutEffect)((()=>{const o=window.localStorage.getItem("theme");o!==e&&null!==o&&a(o),i(!0)}),[window]),{theme:e,toggleTheme:()=>{a("light"===e?"dark":"light")},isMounted:t}}},505:(e,o,t)=>{t.d(o,{Sq:()=>a,Nb:()=>l,Ay:()=>g});var r=t(434),n=t(699),i=t(508);const a={COMPONENTS:{LAYOUT:{LOGO:"logo_alt"},THEME_TOGGLE:{ALT_LABEL:"theme_toggle_alt_label",ALT_DETAILS:"theme_toggle_alt_details"},LOADER:{MESSAGE:"loader_message"}}},l={FOOTER:"footer",HOME:{NAV_LINK:"home_nav_link",TITLE:"home_title",SUBTITLE:"home_subtitle"},ABOUT:{NAV_LINK:"about_nav_link",TITLE:"about_title",HEADER_IMAGE_ALT:"about_header_image_alt",BLURB_ENGLISH_DISCLAIMER:"about_blurb_english_disclaimer",BLURB_P1:"about_blurb_p1",BLURB_P2:"about_blurb_p2",BLURB_P3:"about_blurb_p3"},NOT_FOUND:{TITLE:"not_found_title"}},s={[a.COMPONENTS.LAYOUT.LOGO]:"Liz's Logo",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Toggle theme",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Toggles the theme between dark and light mode",[a.COMPONENTS.LOADER.MESSAGE]:"please wait, rendering server side components..."},d={[l.FOOTER]:"© {{year}} Liz MacLean",[l.HOME.NAV_LINK]:"Home",[l.HOME.TITLE]:"Welcome!",[l.HOME.SUBTITLE]:"Making this personal site has been more stop-motion than Cones of Dunshire - lots of effort under the hood for a small result. Enjoy this throwback:",[l.NOT_FOUND.TITLE]:"Oops! Page not found!",[l.ABOUT.TITLE]:"About Me",[l.ABOUT.NAV_LINK]:"About",[l.ABOUT.HEADER_IMAGE_ALT]:"A drawing of a fluffy cat meowing",[l.ABOUT.BLURB_ENGLISH_DISCLAIMER]:"",[l.ABOUT.BLURB_P1]:"Oh hey, you found me! Thanks for being curious (cool) enough to find this page. Here's a cup of a hot beverage for you to enjoy while you read all about me <0>☕</0>. Hopefully you already know my name based on the domain name, but if you don't, I usually go by Liz MacLean ( <1>lIHz muh-KLAIN</1> ), and my pronouns are she/her/hers.",[l.ABOUT.BLURB_P2]:"I grew up in Pittsburgh, PA and came to Philadelphia to study Electrical Engineering at Drexel University. (Don't ask me anything about EE, all I retained was <0>V = IR</0>). After graduating in 2018, I worked as an embedded engineer for a couple of years, and then moved into full stack development in July, 2021. Throughout my career so far, I've learned a lot, including React, Redux, Typescript, Python, gRPC, protocol buffers, C, a sprinkle of Webpack, and more! As I continue to grow as a developer, I hope to show off some of those skills here!",[l.ABOUT.BLURB_P3]:"If you're curious about the fluffy cat in the drawing on this page, his name is Poe! I adopted him in 2018, and he's my favorite fluffy friend. His favorite things to do are nap, meow, snuggle, and play with homemade foil balls. He doesn't really understand what the internet is, but I think if he knew that's where all his treats came from, he'd think it's as cool as I think it is."},c=Object.assign({},s,d),h={[a.COMPONENTS.LAYOUT.LOGO]:"El logotipo del Liz",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Alternar tema",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Alterna el tema entre el modo oscuro y claro",[a.COMPONENTS.LOADER.MESSAGE]:"por favor espere, renderizando los componentes del lado del servidor..."},m={[l.FOOTER]:"© {{year}} Liz MacLean",[l.HOME.NAV_LINK]:"Inicio",[l.HOME.TITLE]:"¡Bienvenido!",[l.HOME.SUBTITLE]:"Echa un vistazo a este formato de código",[l.ABOUT.TITLE]:"Acerca de Liz",[l.ABOUT.NAV_LINK]:"Acerca",[l.NOT_FOUND.TITLE]:"¡Ups! Página no encontrada!",[l.ABOUT.HEADER_IMAGE_ALT]:"Un dibujo de un gato esponjoso maullando",[l.ABOUT.BLURB_ENGLISH_DISCLAIMER]:"¡Hola! No hablo español y no confío en el traductor de Google para párrafos grandes, así que mi 'acerca de mí' está en inglés."},u=Object.assign({},h,m),p={order:["querystring","navigator","localStorage","sessionStorage","cookie","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",htmlTag:document.documentElement};r.Ay.use(n.r9).use(i.A).init({fallbackLng:["en"],debug:!1,detection:p,resources:{en:{translation:c},es:{translation:u}}});const g=r.Ay},965:(e,o,t)=>{t.d(o,{O4:()=>d});const r="16px",n="calc(1.5vmin)",i="calc(20px + 2vmin)",a="calc(40px + 2vmin)",l={primaryColor:"#fcfcfc",primaryLightColor:"#FFF",primaryDarkColor:"#cccccc",textColor:"#363537",primaryBorderColor:"#6B8096",hover:"grey",fontSize:r,mediaFontSize:i,h1FontSize:n,h1MediaFontSize:a,linkColor:void 0,linkVisitedColor:void 0},s={primaryColor:"#363537",primaryLightColor:"#605f61",primaryDarkColor:"#100f11",textColor:"#FFF",primaryBorderColor:"#6B8096",hover:"grey",fontSize:r,mediaFontSize:i,h1FontSize:n,h1MediaFontSize:a,linkColor:"#8EBCFF",linkVisitedColor:"#EB9EFF"},d=e=>({light:l,dark:s}[e])}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var t=n[e]={exports:{}};return r[e](t,t.exports,i),t.exports}i.m=r,e=[],i.O=(o,t,r,n)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,r,n]=e[c],l=!0,s=0;s<t.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,r,n]},i.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return i.d(o,{a:o}),o},i.d=(e,o)=>{for(var t in o)i.o(o,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((o,t)=>(i.f[t](e,o),o)),[])),i.u=e=>e+".bundle.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),o={},t="lizmacleanio:",i.l=(e,r,n,a)=>{if(o[e])o[e].push(r);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var h=d[c];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==t+n){l=h;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+n),l.src=e),o[e]=[r];var m=(t,r)=>{l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(delete o[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var o=i.g.document;if(!e&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={57:0};i.f.j=(o,t)=>{var r=i.o(e,o)?e[o]:void 0;if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(((t,n)=>r=e[o]=[t,n]));t.push(r[2]=n);var a=i.p+i.u(o),l=new Error;i.l(a,(t=>{if(i.o(e,o)&&(0!==(r=e[o])&&(e[o]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+o+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}}),"chunk-"+o,o)}},i.O.j=o=>0===e[o];var o=(o,t)=>{var r,n,[a,l,s]=t,d=0;if(a.some((o=>0!==e[o]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var c=s(i)}for(o&&o(t);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},t=self.webpackChunklizmacleanio=self.webpackChunklizmacleanio||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=i.O(void 0,[60],(()=>i(155)));a=i.O(a)})();