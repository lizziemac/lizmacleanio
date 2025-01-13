"use strict";(self.webpackChunklizmacleanio=self.webpackChunklizmacleanio||[]).push([[390],{390:(e,i,t)=>{t.r(i),t.d(i,{default:()=>g});var r=t(848),n=t(969),a=t(642),o=t(385);const l=()=>(0,r.jsx)("div",{"aria-label":"Moon icon",children:(0,r.jsx)(o.P.svg,{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 50 50",style:{display:"block"},children:(0,r.jsx)(o.P.path,{d:"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",fill:"currentColor",initial:"initial",animate:"animate",whileTap:"whileTap",variants:{initial:{scale:.6,rotate:90},animate:{scale:1,rotate:0,transition:{type:"spring",stiffness:200,damping:10}},whileTap:{scale:.95,rotate:15}}})})}),s=()=>(0,r.jsx)("div",{"aria-label":"Sun icon",children:(0,r.jsxs)(o.P.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",whileTap:{scale:.95,rotate:15},style:{originX:"50%",originY:"50%",display:"block"},children:[(0,r.jsx)(o.P.circle,{cx:"11.9998",cy:"11.9998",r:"5.75375",fill:"currentColor",initial:"initial",animate:"animate",variants:{initial:{scale:1.5},animate:{scale:1,transition:{type:"spring",stiffness:200,damping:10}}}}),(0,r.jsxs)(o.P.g,{initial:"initial",animate:"animate",variants:{initial:{rotate:45},animate:{rotate:0,transition:{type:"spring",stiffness:200,damping:10}}},children:[(0,r.jsx)("circle",{cx:"3.08982",cy:"6.85502",r:"1.71143",transform:"rotate(-60 3.08982 6.85502)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"3.0903",cy:"17.1436",r:"1.71143",transform:"rotate(-120 3.0903 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"22.2881",r:"1.71143",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"17.1436",r:"1.71143",transform:"rotate(-60 20.9101 17.1436)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"20.9101",cy:"6.8555",r:"1.71143",transform:"rotate(-120 20.9101 6.8555)",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"1.71143",r:"1.71143",fill:"currentColor"})]})]})});var c=t(802);const h=c.Ay.button`
  background: transparent;
  display: block;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.h1FontSize};

  @media only screen and (max-width:1000px){
    font-size: ${({theme:e})=>e.h1MediaFontSize};
  }
`,m=({handleToggle:e})=>(0,r.jsx)(h,{"aria-label":(0,n.Tl)(n.Sq.COMPONENTS.THEME_TOGGLE.ALT_LABEL),"aria-details":(0,n.Tl)(n.Sq.COMPONENTS.THEME_TOGGLE.ALT_DETAILS),onClick:()=>e(),children:"dark"===(0,a.O)()?(0,r.jsx)(s,{}):(0,r.jsx)(l,{})});var d=t(651);const x=c.Ay.nav`
  align-items: center;
  background-color: ${({theme:e})=>e.primaryDarkColor};
  min-height: ${({theme:e})=>e.h1FontSize};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  transition: background-color 1s ease;
  z-index: 999;
  flex-wrap: wrap;

  @media only screen and (max-width:1000px){
    min-height: ${({theme:e})=>e.h1MediaFontSize};
  }

  div:first-child {
    margin-right: auto;
  }
`,p=(0,c.Ay)(d.k2)`
  text-decoration: none;
  font-weight: none;
  min-height: inherit;
  font-size: ${({theme:e})=>e.h1FontSize};
  color: ${({theme:e})=>e.textColor} !important;
  padding: 1rem 2rem;
  border-bottom: 0.10em solid transparent;

  &:hover {
    color: ${({theme:e})=>e.hover} !important;
  }
  &.active {
    border-bottom: 0.10em solid #0000ff;
    color: ${({theme:e})=>e.textColor} !important;
  }

  @media only screen and (max-width:1000px){
    font-size: ${({theme:e})=>e.h1MediaFontSize};
    &:hover {
      color: ${({theme:e})=>e.textColor} !important;
    }
  }
`,g=e=>(0,r.jsxs)(x,{children:[(0,r.jsx)(p,{as:"div",children:(0,r.jsx)(m,{handleToggle:()=>e.toggleTheme()})}),(0,r.jsx)(p,{to:"/",children:n.Ay.t(n.Nb.HOME.NAV_LINK)}),(0,r.jsx)(p,{to:"/about",children:n.Ay.t(n.Nb.ABOUT.NAV_LINK)})]})}}]);