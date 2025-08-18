(()=>{"use strict";var e,o,t,r={323:(e,o,t)=>{var r=t(848),i=t(540),n=t(338),a=t(802),l=t(651);const s=a.DU`
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
`;var d=t(965),c=t(642),m=t(352);const h=300;var u=t(505);const p=a.Ay.div`
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
`,b=p,y=()=>(0,r.jsxs)(b,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),u.Ay.t(u.Sq.COMPONENTS.LOADER.MESSAGE)]}),E=(e,o=300)=>i.lazy((()=>Promise.all([e(),new Promise((e=>setTimeout(e,o)))]).then((([e])=>e)))),T=a.Ay.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({theme:e})=>e.textColor} !important;
`,O=()=>{const e=(new Date).getFullYear();return(0,r.jsx)(T,{children:u.Ay.t(u.Nb.FOOTER,{replace:{year:e}})})},v=E((()=>Promise.all([t.e(385),t.e(390)]).then(t.bind(t,390))),h),L=E((()=>t.e(808).then(t.bind(t,808))),h),A=E((()=>t.e(550).then(t.bind(t,637))),h),x=E((()=>t.e(552).then(t.bind(t,552))),h),_=e=>(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(y,{}),children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"105vh"},children:[(0,r.jsx)(m.BV,{children:(0,r.jsxs)(m.qh,{path:"/",element:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{toggleTheme:e.toggleTheme}),(0,r.jsx)(m.sv,{})]}),children:[(0,r.jsx)(m.qh,{index:!0,element:(0,r.jsx)(L,{})}),(0,r.jsx)(m.qh,{path:"about",element:(0,r.jsx)(A,{})}),(0,r.jsx)(m.qh,{path:"*",element:(0,r.jsx)(x,{})})]})}),(0,r.jsx)("div",{style:{paddingTop:"1em"},children:(0,r.jsx)(O,{})})]})});n.H(document.getElementById("app")||document.createElement("div")).render((0,r.jsx)(i.StrictMode,{children:(0,r.jsx)((({callback:e})=>{const{theme:o,toggleTheme:t,isMounted:i}=(0,c.D)();return i?(document.documentElement.setAttribute("lang",u.Ay.language),(0,r.jsx)(l.Kd,{children:(0,r.jsxs)(a.NP,{theme:(0,d.O4)(o),children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{ref:e,children:(0,r.jsx)(_,{toggleTheme:t})})]})})):(0,r.jsx)("div",{})}),{callback:()=>document.body.classList.remove("preload")})}))},642:(e,o,t)=>{t.d(o,{D:()=>a,O:()=>n});var r=t(540),i=t(965);const n=()=>window.localStorage.getItem("theme"),a=()=>{const[e,o]=(0,r.useState)("light"),[t,n]=(0,r.useState)(!1),a=e=>{window.localStorage.setItem("theme",e),window.localStorage.setItem("bg-color",(0,i.O4)(e).primaryColor),o(e)};return(0,r.useLayoutEffect)((()=>{const e=window.localStorage.getItem("theme");e&&o(e),n(!0)}),[]),{theme:e,toggleTheme:()=>{a("light"===e?"dark":"light")},isMounted:t}}},505:(e,o,t)=>{t.d(o,{Sq:()=>a,Nb:()=>l,Ay:()=>g});var r=t(434),i=t(699),n=t(508);const a={COMPONENTS:{LAYOUT:{LOGO:"logo_alt"},THEME_TOGGLE:{ALT_LABEL:"theme_toggle_alt_label",ALT_DETAILS:"theme_toggle_alt_details"},LOADER:{MESSAGE:"loader_message"}}},l={FOOTER:"footer",HOME:{NAV_LINK:"home_nav_link",TITLE:"home_title",SUBTITLE:"home_subtitle"},ABOUT:{NAV_LINK:"about_nav_link",TITLE:"about_title",HEADER_IMAGE_ALT:"about_header_image_alt",BLURB_ENGLISH_DISCLAIMER:"about_blurb_english_disclaimer",BLURB_P1:"about_blurb_p1",BLURB_P2:"about_blurb_p2",BLURB_P3:"about_blurb_p3"},NOT_FOUND:{TITLE:"not_found_title"}},s={[a.COMPONENTS.LAYOUT.LOGO]:"Liz's Logo",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Toggle theme",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Toggles the theme between dark and light mode",[a.COMPONENTS.LOADER.MESSAGE]:"please wait, rendering server side components..."},d={[l.FOOTER]:"© {{year}} Liz MacLean",[l.HOME.NAV_LINK]:"Home",[l.HOME.TITLE]:"Welcome!",[l.HOME.SUBTITLE]:"Making this personal site has been more stop-motion than Cones of Dunshire - lots of effort under the hood for a small result. Enjoy this throwback:",[l.NOT_FOUND.TITLE]:"Oops! Page not found!",[l.ABOUT.TITLE]:"About Me",[l.ABOUT.NAV_LINK]:"About",[l.ABOUT.HEADER_IMAGE_ALT]:"A drawing of a fluffy cat meowing",[l.ABOUT.BLURB_ENGLISH_DISCLAIMER]:"",[l.ABOUT.BLURB_P1]:"Oh hey, you found me! Thanks for being curious (cool) enough to find this page. Here's a cup of a hot beverage for you to enjoy while you read all about me <0>☕</0>. Hopefully you already know my name based on the domain name, but if you don't, I usually go by Liz MacLean ( <1>lIHz muh-KLAIN</1> ), and my pronouns are she/her/hers.",[l.ABOUT.BLURB_P2]:"I grew up in Pittsburgh, PA and came to Philadelphia to study Electrical Engineering at Drexel University. (Don't ask me anything about EE, all I retained was <0>V = IR</0>). After graduating in 2018, I worked as an embedded engineer for a couple of years, and then moved into full stack development in July, 2021. Throughout my career so far, I've learned a lot, including React, Redux, Typescript, Python, gRPC, protocol buffers, C, a sprinkle of Webpack, and more! As I continue to grow as a developer, I hope to show off some of those skills here!",[l.ABOUT.BLURB_P3]:"If you're curious about the fluffy cat in the drawing on this page, his name is Poe! I adopted him in 2018, and he's my favorite fluffy friend. His favorite things to do are nap, meow, snuggle, and play with homemade foil balls. He doesn't really understand what the internet is, but I think if he knew that's where all his treats came from, he'd think it's as cool as I think it is."},c=Object.assign({},s,d),m={[a.COMPONENTS.LAYOUT.LOGO]:"El logotipo del Liz",[a.COMPONENTS.THEME_TOGGLE.ALT_LABEL]:"Alternar tema",[a.COMPONENTS.THEME_TOGGLE.ALT_DETAILS]:"Alterna el tema entre el modo oscuro y claro",[a.COMPONENTS.LOADER.MESSAGE]:"por favor espere, renderizando los componentes del lado del servidor..."},h={[l.FOOTER]:"© {{year}} Liz MacLean",[l.HOME.NAV_LINK]:"Inicio",[l.HOME.TITLE]:"¡Bienvenido!",[l.HOME.SUBTITLE]:"Echa un vistazo a este formato de código",[l.ABOUT.TITLE]:"Acerca de Liz",[l.ABOUT.NAV_LINK]:"Acerca",[l.NOT_FOUND.TITLE]:"¡Ups! Página no encontrada!",[l.ABOUT.HEADER_IMAGE_ALT]:"Un dibujo de un gato esponjoso maullando",[l.ABOUT.BLURB_ENGLISH_DISCLAIMER]:"¡Hola! No hablo español y no confío en el traductor de Google para párrafos grandes, así que mi 'acerca de mí' está en inglés."},u=Object.assign({},m,h),p={order:["querystring","navigator","localStorage","sessionStorage","cookie","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",htmlTag:document.documentElement};r.Ay.use(i.r9).use(n.A).init({fallbackLng:["en"],debug:!1,detection:p,resources:{en:{translation:c},es:{translation:u}}});const g=r.Ay},965:(e,o,t)=>{t.d(o,{O4:()=>d});const r="calc(10px + 2vmin)",i="calc(1.5vmin)",n="calc(20px + 2vmin)",a="calc(40px + 2vmin)",l={primaryColor:"#fcfcfc",primaryLightColor:"#FFF",primaryDarkColor:"#cccccc",textColor:"#363537",primaryBorderColor:"#6B8096",hover:"grey",fontSize:r,mediaFontSize:n,h1FontSize:i,h1MediaFontSize:a,linkColor:void 0,linkVisitedColor:void 0},s={primaryColor:"#363537",primaryLightColor:"#605f61",primaryDarkColor:"#100f11",textColor:"#FFF",primaryBorderColor:"#6B8096",hover:"grey",fontSize:r,mediaFontSize:n,h1FontSize:i,h1MediaFontSize:a,linkColor:"#8EBCFF",linkVisitedColor:"#EB9EFF"},d=e=>({light:l,dark:s}[e])}},i={};function n(e){var o=i[e];if(void 0!==o)return o.exports;var t=i[e]={exports:{}};return r[e](t,t.exports,n),t.exports}n.m=r,e=[],n.O=(o,t,r,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,r,i]=e[c],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,r,i]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((o,t)=>(n.f[t](e,o),o)),[])),n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),o={},t="lizmacleanio:",n.l=(e,r,i,a)=>{if(o[e])o[e].push(r);else{var l,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==t+i){l=m;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=e),o[e]=[r];var h=(t,r)=>{l.onerror=l.onload=null,clearTimeout(u);var i=o[e];if(delete o[e],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(r))),t)return t(r)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var o=n.g.document;if(!e&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={57:0};n.f.j=(o,t)=>{var r=n.o(e,o)?e[o]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(((t,i)=>r=e[o]=[t,i]));t.push(r[2]=i);var a=n.p+n.u(o),l=new Error;n.l(a,(t=>{if(n.o(e,o)&&(0!==(r=e[o])&&(e[o]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+o+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}}),"chunk-"+o,o)}},n.O.j=o=>0===e[o];var o=(o,t)=>{var r,i,[a,l,s]=t,d=0;if(a.some((o=>0!==e[o]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(o&&o(t);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},t=self.webpackChunklizmacleanio=self.webpackChunklizmacleanio||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=n.O(void 0,[60],(()=>n(323)));a=n.O(a)})();