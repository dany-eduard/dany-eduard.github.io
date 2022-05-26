import{j as k,s as r,r as z,W as j,R as L,a as T}from"./vendor.ea0d32cb.js";const M=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(a){if(a.ep)return;a.ep=!0;const n=l(a);fetch(a.href,n)}};M();var C="assets/logo.e7ef0941.svg",S="assets/menu.31757ce1.svg",E="assets/close.69d19444.svg";const I=`
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`,A=`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`,F=`
margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--primary-fonts);

  & > img {
    width: 100%;
    height: 70px;
  }
`,D=`
height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`,W=`
display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: var(--primary-color);
  font-family: var(--primary-fonts);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    transition: 1s all ease;
  }

  &.btn_resume {
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid;
    padding: 0.75rem 1rem;
    margin: 0.5rem;

    &:hover {
      background-color: var(--secondary-color-transparent);
    }
  }

  @media (max-width: 960px) {
    // width: 16%;
  }
`,e=k.exports.jsx,o=k.exports.jsxs,B=r.div`
  ${I}
`,N=r.div`
  ${A}
`,q=r.div`
  ${F}
`,P=r.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 960px) {
    background: var(--transparent-background);
    backdrop-filter: blur(23px);
    position: absolute;
    top: 70px;
    left: ${({open:t})=>t?"0":"-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
`,p=r.li`
  ${D}
`,m=r.a`
  ${W}
`,R=r.div`
  display: none;
  @media (max-width: 960px) {
    background-image: url(${({open:t})=>t?E:S});
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
  }
`,$=()=>{const[t,i]=z.exports.useState(!1);return e(B,{children:o(N,{children:[e(q,{children:e("img",{src:C,alt:"danyeduard-logo"})}),e(R,{open:t,onClick:()=>i(!t),children:t?e("img",{src:E,alt:"close-icon"}):e("img",{src:S,alt:"menu-icon"})}),o(P,{open:t,onClick:()=>i(!t),children:[e(p,{children:e(m,{href:"#about",children:"Sobre m\xED"})}),e(p,{children:e(m,{href:"#experience",children:"Experiencia"})}),e(p,{children:e(m,{href:"#projects",children:"Proyectos"})}),e(p,{children:e(m,{href:"#contact",children:"Hablame"})}),e(p,{children:e(m,{href:"https://drive.google.com/file/d/12BVXeru5dv3Gjlf08ffL1NiLWN0yVz2h/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn_resume",children:"Resume"})})]})]})})},h=r.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 85vh;
  padding: 0;
  transition: all 0.5s ease;
`,H=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,O=r.div`
  > h2 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
    margin-left: -0.3rem;
  }

  .descriptor {
    color: var(--primary-color-claro);
  }
`,_=r.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: 560px;
`,G=()=>o(h,{children:[e(H,{children:"Hola, soy"}),o(O,{children:[e("h2",{children:"Daniel Eduardo."}),e("h2",{className:"descriptor",children:"Back-End Developer"})]}),e(_,{children:"Soy desarrollador web con experiencia en desarrollo Front-End y Back-End, con conocimientos en Node.js, React, Angular, Express, y muchas otras tecnolog\xEDas."})]}),s=r.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: ${({maxWidth:t})=>t||"max-content"};
`,U=r.div`
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 3px 12px #999;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 2px 3px 12px #999;
    transform: translateY(-7px);
  }
`,Q=r.div`
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
`,V=r.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,J=r.div`
  padding: 1rem;

  > a {
    text-decoration: none;
    color: inherit;
  }
`,X=r.h3`
  margin-bottom: 20px;
  color: var(--secondary-color);
`,K=r.div`
  display: flex;
  align-self: end;
  align-items: center;
  margin-top: 1.5rem;
`,Y=r.small`
  color: var(--grey);
`,Z=r.a`
  margin-left: 8px;
  padding: 5px 20px;
  background-color: var(--primary-color-claro);
  border-radius: 20px;
  text-decoration: none;
  color: var(--lightest-slate-color);
  font-weight: bold;
  font-size: clamp(var(--fz-xxs), 4vw, var(--fz-sm));

  &:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 960px) {
    grid-column-end: span 12;
  }

  @media (max-width: 500px) {
    grid-column-end: span 6;
  }
`,ee=({name:t,description:i,technologies:l,repository:c,deployLink:a,image:n})=>o(U,{children:[n&&e(Q,{children:e(V,{src:n==null?void 0:n.src,alt:n==null?void 0:n.alt})}),e(J,{children:o("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:[o(X,{children:[" ",t," "]}),e(s,{maxWidth:"632px",children:i}),o(K,{children:[e(Y,{children:l&&l.map((d,w)=>o("span",{children:[d,w!==l.length-1&&", "]},w))}),e(Z,{href:c,children:"Ver"})]})]})})]}),re=r.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 38px));
  grid-gap: 30px;

  @media (max-width: 960px) {
    grid-column: 2 / span 6;
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 20px;
  }

  @media (max-width: 620px) {
    grid-column: 1 / span 6;
    grid-template-columns: 10px repeat(1, 1fr) 10px;
  }
`,oe=({children:t})=>e(re,{children:t}),u=r.h2`
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  font-family: var(--primary-fonts);
  color: var(--primary-color);
  margin-bottom: 0.8rem;
`,te=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`,g=r.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5rem;
  margin-right: 5rem;
  list-style: square;

  @media (max-width: 600px) {
    margin-right: 1.4rem;
    margin-left: 0.2rem;
  }

  @media (max-width: 360px) {
    margin-right: 1rem;
    margin-left: 3.4rem;
  }

  > li {
    font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
    font-weight: 400;
    font-family: var(--code-fonts);
    color: var(--secondary-color);
    line-height: 0.2;
    margin-top: 1rem;
    max-width: 645px;

    ::marker {
      color: var(--primary-color);
      font-size: 1.2rem;
    }
  }
`,ne=()=>o(h,{id:"about",children:[e(u,{children:"Sobre m\xED"}),o(s,{maxWidth:"645px",children:["Mi nombre es Daniel Eduardo Almagro y disfruto de crear cosas para la Web. Mi inter\xE9s por el desarrollo comenz\xF3 en el ",e("time",{dateTime:"2018",children:"2018"})," cuando empec\xE9 a estudiar Mant. de Sistemas Inform\xE1ticos. Actualmente conozco sobre muchos temas, pero considero que a\xFAn tengo un largo camino por recorrer y as\xED mismo much\xEDsimas cosas que aprender y otras por mejorar."]}),e(s,{maxWidth:"645px",children:"Me considero una persona responsable y con habilidad para el trabajo en equipo. Me gusta aprender cosas nuevas y una buena forma de hacerlo es escuchando a otras personas. Tambien me considero una persona resiliente y me gusta aceptar nuevos retos y probar mejores formas de hacer las cosas."}),e(s,{maxWidth:"645px",children:"Mi primera experiencia laboral fue como desarrollador Front-End, utilizando React y Typescript y fue bastante agradable el equipo con el que compart\xED buenos momentos. Actualmente me enfoco principalmente en el desarrollo Back-End con Node.js."}),e(s,{children:"Aqu\xED algunas tecnolog\xEDas con las que he trabajado:"}),o(te,{children:[o(g,{children:[e("li",{children:"HTML"}),e("li",{children:"CSS"}),e("li",{children:"SASS"}),e("li",{children:"Bootstrap"}),e("li",{children:"Materialize"}),e("li",{children:"JavaScript"})]}),o(g,{children:[e("li",{children:"Typescript"}),e("li",{children:"React"}),e("li",{children:"MUI"}),e("li",{children:"Redux"}),e("li",{children:"Angular"}),e("li",{children:"Node.js"})]}),o(g,{children:[e("li",{children:"Express"}),e("li",{children:"NestJs"}),e("li",{children:"PostgreSQL"}),e("li",{children:"MySQL"}),e("li",{children:"Git"})]})]})]}),ae=r.div`
  max-width: 1160px;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
`,ie=r.div`
  float: left;
  width: 25%;
  height: 300px;

  @media (max-width: 960px) {
    float: none;
    display: flex;
    height: auto;
  }
`,b=r.button`
  display: block;
  background-color: ${({active:t})=>t?"#ccc":"inherit"};
  color: var(--grey);
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  font-weight: bold;

  :hover {
    background-color: #ddd;
  }

  @media (max-width: 960px) {
    padding: 12px;
    width: auto;
  }
`,y=r.div`
  float: left;
  padding: 20px;
  border-left: 1px ridge #ccc;
  width: 75%;
  height: 360px;
  overflow: auto;

  > h3 {
    color: var(--secondary-color);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`,le=()=>{const[t,i]=z.exports.useState(2),l=(c=2)=>{i(c)};return o(h,{id:"experience",children:[e(u,{children:"Donde he trabajado"}),o(ae,{children:[o(ie,{children:[e(b,{onClick:()=>l(2),active:t===2,children:"3DVES"}),e(b,{onClick:()=>l(1),active:t===1,children:"Devitech"}),e(b,{onClick:()=>l(0),active:t===0,children:"Sempertex"})]}),t===2&&o(y,{id:"3dves",children:[e("h3",{children:"Back-End Developer"}),o("small",{children:[e("time",{dateTime:"Dec. 2021 - actualidad.",children:"Dec. 2021 - actualidad."})," "]}),e(s,{maxWidth:"632px",children:'Empresa tecnol\xF3gica internacional con sucursal en Bogot\xE1, que trabaja en diferentes mercados verticales en el desarrollo de soluciones "IOT" y \u201CB2B\u201D para sectores como el de la construcci\xF3n entre otros donde se usan est\xE1ndares BIM.'})]}),t===1&&o(y,{id:"devitech",children:[e("h3",{children:"Front-End Web Developer | React Developer"}),o("small",{children:[e("time",{dateTime:"Mar. 2021 - Oct. 2021",children:"Mar. 2021 - Oct. 2021"})," "]}),o(s,{maxWidth:"632px",children:["\u2022 Programaci\xF3n del lado del cliente con JavaScript, TypeScript, HTML y CSS. ",e("br",{}),"\u2022 Refactorizar y modularizar componentes React. ",e("br",{}),"\u2022 Crear nuevas interfaces siguiendo un dise\xF1o. ",e("br",{}),"\u2022 Conectar FrontEnd con Web Services realizando peticiones HTTP para obtener diversos tipos de datos. ",e("br",{}),"\u2022 Uso de Bootstrap y Material-UI para interface grafica. ",e("br",{}),"\u2022 Uso de Axios y XMLHttpRequest para hacer peticiones HTTP. ",e("br",{}),"\u2022 Uso de dayjs para manejar fechas, jspdf para crear PDFs, xlsx para archivos Excel, entre otras librerias. ",e("br",{}),"\u2022 Soporte y capacitaci\xF3n a cliente externo de la compa\xF1\xEDa. ",e("br",{})]})]}),t===0&&o(y,{id:"sempertex",children:[e("h3",{children:"Axiliar de Soporte TI"}),o("small",{children:[e("time",{dateTime:"Oct. 2019 - Ago. 2020",children:"Oct. 2019 - Ago. 2020"})," "]}),o(s,{maxWidth:"632px",children:["\u2022 Auxiliar en el montaje y mantenimiento de redes de computadores. ",e("br",{}),"\u2022 T\xE9cnico operativo para soporte de sistemas inform\xE1ticos y mantenimiento de computadores. ",e("br",{}),"\u2022 Auxiliar de soporte y atenci\xF3n al cliente en el \xE1rea de inform\xE1tica. ",e("br",{}),"\u2022 Auxiliar de progrmaci\xF3n.",e("br",{})]})]})]})]})},se=[{name:"Anonymous Chat",description:"This is a simple chat application created with Socket.io.",technologies:["HTML","Typescript","Node.js","Socket.io"],repository:"https://github.com/dany-eduard/anonymous-chat",deployLink:"https://anonymous-chat.danyeduard.repl.co/"},{name:"Fut21 App",description:"React app que permite hacer b\xFAsqueda de jugadores y equipos consumiendo Fut21 API.",technologies:["Typescript","HTML","Node.js","CSS"],repository:"https://github.com/dany-eduard/fut21-app",deployLink:"https://dany-eduard.github.io/fut21-app/"},{name:"Fut21 API",description:"Este proyecto es una r\xE9plica de la API del juego FIFA 21 Ultimate Team.",technologies:["Typescript","Node.js","Express","PostgreSQL"],repository:"https://github.com/dany-eduard/fut21-api",deployLink:"https://fut21-api.herokuapp.com/api/v1/players?page=1"}],ce=r.div`
  max-width: 1160px;
  margin-top: 1rem;
`,de=()=>o(h,{id:"projects",children:[e(u,{children:"Proyectos"}),e(ce,{children:e(oe,{children:se.map(({name:t,description:i,technologies:l,repository:c,deployLink:a,image:n})=>e(ee,{name:t,description:i,technologies:l,repository:c,deployLink:a,image:n},t))})}),e(s,{})]}),pe=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,me=r.div`
  > h3 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
  }
`,he=r.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`,v=r.a`
  text-decoration: none;
  color: var(--secondary-color);
  font-size: clamp(var(--fz-xxs), 8vw, var(--fz-lg));
  font-weight: 500;
  border: 3px solid var(--primary-color-claro);
  border-radius: 3px;
  padding: 0.7rem 1.2rem;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    background-color: var(--primary-color-gradient);
  }

  @media (max-width: 960px) {
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-sm));
    padding: 0.5rem 0.8rem;
  }
`,fe=()=>o(h,{id:"contact",children:[e(pe,{children:"\xBFQu\xE9 es lo siguiente?"}),e(me,{children:e("h3",{children:"Contactame..."})}),e(s,{maxWidth:"632px",children:"Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada est\xE1 siempre abierta. Tanto si tienes una pregunta como si s\xF3lo quieres saludar, har\xE9 lo posible por responderte."}),o(he,{children:[e(v,{href:"mailto:danyeduard17@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Mail"}),e(v,{href:"https://wa.link/1bdf5b",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"}),e(v,{href:"tel:+573017496696",children:"Llamame"})]})]});var xe="assets/github.a236bd5f.svg",ue="assets/gmail.9761f69e.svg",ge="assets/linkedin.80b50059.svg",be="assets/twitter.0346fa34.svg",ye="assets/whatsapp.bd86f9f0.svg";const ve=r.aside`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.5s ease;
  min-height: 87vh;

  @media (max-width: 960px) {
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;
    min-height: 5vh;
  }
`,we=r.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
  justify-content: flex-end;
  gap: 0.5rem;
  transition: all 0.5s ease;
  list-style: none;
  cursor: pointer;

  @media (max-width: 960px) {
    flex-flow: row nowrap;
  }
`,f=r.li`
  > a {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
      transition: 1s all ease;
    }

    @media (max-width: 960px) {
      padding: 0.5rem 0.5rem;
    }
  }
`,x=r.img`
  width: 2.2rem;
  filter: brightness(1.1);
  mix-blend-mode: multiply;

  &:hover {
    filter: drop-shadow(15px 12px 15px orchid);
    transition: 1s all ease;
  }
`,ke=()=>e(ve,{children:o(we,{children:[e(f,{children:e("a",{href:"https://github.com/dany-eduard",target:"_blank",rel:"noopener noreferrer",children:e(x,{src:xe,alt:"GitHub"})})}),e(f,{children:e("a",{href:"mailto:danyeduard17@gmail.com",target:"_blank",rel:"noopener noreferrer",children:e(x,{src:ue,alt:"Gmail"})})}),e(f,{children:e("a",{href:"https://www.linkedin.com/in/dany-eduard/",target:"_blank",rel:"noopener noreferrer",children:e(x,{src:ge,alt:"LinkedIn"})})}),e(f,{children:e("a",{href:"https://twitter.com/dany_eduard17",target:"_blank",rel:"noopener noreferrer",children:e(x,{src:be,alt:"Twitter"})})}),e(f,{children:e("a",{href:"https://wa.link/1bdf5b",target:"_blank",rel:"noopener noreferrer",children:e(x,{src:ye,alt:"WhatsApp"})})})]})}),ze=r.div`
  display: grid;
  grid-template-columns: 0.1fr 1.8fr;
  grid-template-rows: 0.2fr 1.8fr;
  grid-template-areas:
    'nav nav'
    'contact-bottons main';
  max-height: 100vh;
  overflow-y: hidden;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas:
      'nav'
      'main'
      'contact-bottons';
  }
`,Se=r.div`
  grid-area: nav;
`,Ee=r.div`
  grid-area: contact-bottons;
`,je=r.main`
  grid-area: main;
  max-width: 100vw;
  padding-left: 15%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 0px 10%;
  }
`;r.div``;function Le(){return o(ze,{children:[e(Se,{children:e($,{})}),o(je,{children:[e(G,{}),e(ne,{}),e(le,{}),e(de,{}),e(fe,{})]}),e(Ee,{children:e(ke,{})})]})}const Te=j`
:root {

  /***** Screen sizes *****/
  --mobile-screen: 960px;


  /***** Fonst *****/
  --primary-fonts: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --code-fonts: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;

  /***** Font sizes *****/
  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;

  /***** Colors *****/
  --primary-color: #7510f7;
  --primary-color-gradient: #9e5dff85;
  --primary-color-claro: #9e5dff;
  --secondary-color: #290755;
  --secondary-color-transparent: #5b1e8a41;
  --transparent-color: #ffffff00;
  --transparent-background: rgba(255, 255, 255, 0.15);
  --slate-color: #8892b0;
  --light-slate-color: #a8b2d1;
  --lightest-slate-color: #ccd6f6;
  --grey: #828282;
}

/**
 * Beautiful scrollbar CSS
 * https://gist.github.com/dany-eduard/348c03758665917a449bd876fe4b9268
 */
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
*::-webkit-scrollbar-button:increment,
*::-webkit-scrollbar-button {
  display: none;
}

*::-webkit-scrollbar-track {
  background: #e1e1e1;
}

*::-webkit-scrollbar-thumb {
  background: rgb(182, 182, 182);
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #999999;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-thumb:active {
  background-color: #858585;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* img {
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: fill;
}

html {
  scroll-behavior: smooth;
  font-size: calc(60% + 0.8vmin);
}

body {
  margin: 0;
  background-color: azure;
  font-family: var(--primary-fonts);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: var(--code-fonts);
}

`;L.render(o(T.StrictMode,{children:[e(Te,{}),e(Le,{})]}),document.getElementById("root"));
