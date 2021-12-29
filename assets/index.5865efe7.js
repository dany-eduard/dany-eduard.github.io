import{j as w,s as r,r as k,W as E,R as j,a as M}from"./vendor.8e1174a4.js";const L=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const x of a.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&f(x)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};L();var T="assets/logo.e7ef0941.svg",z="assets/menu.31757ce1.svg",S="assets/close.69d19444.svg";const C=`
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`,D=`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`,I=`
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
`,A=`
height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`,F=`
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
`,e=w.exports.jsx,o=w.exports.jsxs,W=r.div`
  ${C}
`,B=r.div`
  ${D}
`,N=r.div`
  ${I}
`,R=r.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 960px) {
    background: var(--transparent-background);
    backdrop-filter: blur(23px);
    position: absolute;
    top: 70px;
    left: ${({open:n})=>n?"0":"-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
`,c=r.li`
  ${A}
`,d=r.a`
  ${F}
`,q=r.div`
  display: none;
  @media (max-width: 960px) {
    background-image: url(${({open:n})=>n?S:z});
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
  }
`,O=()=>{const[n,l]=k.exports.useState(!1);return e(W,{children:o(B,{children:[e(N,{children:e("img",{src:T,alt:"danyeduard-logo"})}),e(q,{open:n,onClick:()=>l(!n),children:n?e("img",{src:S,alt:"close-icon"}):e("img",{src:z,alt:"menu-icon"})}),o(R,{open:n,onClick:()=>l(!n),children:[e(c,{children:e(d,{href:"#about",children:"Sobre m\xED"})}),e(c,{children:e(d,{href:"#experience",children:"Experiencia"})}),e(c,{children:e(d,{href:"#projects",children:"Proyectos"})}),e(c,{children:e(d,{href:"#contact",children:"Hablame"})}),e(c,{children:e(d,{href:"https://drive.google.com/file/d/12BVXeru5dv3Gjlf08ffL1NiLWN0yVz2h/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn_resume",children:"Resume"})})]})]})})},m=r.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 85vh;
  padding: 0;
  transition: all 0.5s ease;
`,$=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,P=r.div`
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
`,G=()=>o(m,{children:[e($,{children:"Hola, soy"}),o(P,{children:[e("h2",{children:"Daniel Eduardo."}),e("h2",{className:"descriptor",children:"Back-End Developer"})]}),e(_,{children:"Soy desarrollador web con experiencia en desarrollo Front-End y Back-End, con conocimientos en Node.js, React, Angular, Express, y muchas otras tecnolog\xEDas."})]}),u=r.h2`
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  font-family: var(--primary-fonts);
  color: var(--primary-color);
  margin-bottom: 0.8rem;
`,i=r.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: ${({maxWidth:n})=>n||"max-content"};
`,H=r.div`
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
    margin-right: 2rem;
  }

  @media (max-width: 360px) {
    margin-right: 1rem;
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
`,U=()=>o(m,{id:"about",children:[e(u,{children:"Sobre m\xED"}),o(i,{maxWidth:"645px",children:["Mi nombre es Daniel Eduardo Almagro y disfruto de crear cosas para la Web. Mi inter\xE9s por el desarrollo comenz\xF3 en el ",e("time",{dateTime:"2018",children:"2018"})," cuando empec\xE9 a estudiar Mant. de Sistemas Inform\xE1ticos. Actualmente conozco sobre muchos temas, pero considero que a\xFAn tengo un largo camino por recorrer y as\xED mismo much\xEDsimas cosas que aprender y otras por mejorar."]}),e(i,{maxWidth:"645px",children:"Me considero una persona responsable y con habilidad para el trabajo en equipo. Me gusta aprender cosas nuevas y una buena forma de hacerlo es escuchando a otras personas. Tambien me considero una persona resiliente y me gusta aceptar nuevos retos y probar mejores formas de hacer las cosas."}),e(i,{maxWidth:"645px",children:"Mi primera experiencia laboral fue como desarrollador Front-End, utilizando React y Typescript y fue bastante agradable el equipo con el que compart\xED buenos momentos. Actualmente me enfoco principalmente en el desarrollo Back-End con Node.js."}),e(i,{children:"Aqu\xED algunas tecnolog\xEDas con las que he trabajado:"}),o(H,{children:[o(g,{children:[e("li",{children:"HTML"}),e("li",{children:"CSS"}),e("li",{children:"SASS"}),e("li",{children:"Bootstrap"}),e("li",{children:"Materialize"}),e("li",{children:"JavaScript"})]}),o(g,{children:[e("li",{children:"Typescript"}),e("li",{children:"React"}),e("li",{children:"MUI"}),e("li",{children:"Redux"}),e("li",{children:"Angular"}),e("li",{children:"Node.js"})]}),o(g,{children:[e("li",{children:"Express"}),e("li",{children:"NestJs"}),e("li",{children:"PostgreSQL"}),e("li",{children:"MySQL"}),e("li",{children:"Git"})]})]})]}),J=r.div`
  max-width: 1160px;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
`,Q=r.div`
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
  background-color: ${({active:n})=>n?"#ccc":"inherit"};
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
  }
`,v=r.div`
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
`,V=()=>{const[n,l]=k.exports.useState(2),s=(f=2)=>{l(f)};return o(m,{id:"experience",children:[e(u,{children:"Donde he trabajado"}),o(J,{children:[o(Q,{children:[e(b,{onClick:()=>s(2),active:n===2,children:"3DVES"}),e(b,{onClick:()=>s(1),active:n===1,children:"Devitech"}),e(b,{onClick:()=>s(0),active:n===0,children:"Sempertex"})]}),n===2&&o(v,{id:"3dves",children:[e("h3",{children:"Back-End Developer"}),o("small",{children:[e("time",{dateTime:"Dec. 2021 - actualidad.",children:"Dec. 2021 - actualidad."})," "]}),e(i,{maxWidth:"632px",children:'Empresa tecnol\xF3gica internacional con sucursal en Bogot\xE1, que trabaja en diferentes mercados verticales en el desarrollo de soluciones "IOT" y \u201CB2B\u201D para sectores como el de la construcci\xF3n entre otros donde se usan est\xE1ndares BIM.'})]}),n===1&&o(v,{id:"devitech",children:[e("h3",{children:"Front-End Web Developer | React Developer"}),o("small",{children:[e("time",{dateTime:"Mar. 2021 - Oct. 2021",children:"Mar. 2021 - Oct. 2021"})," "]}),o(i,{maxWidth:"632px",children:["\u2022 Programaci\xF3n del lado del cliente con JavaScript, TypeScript, HTML y CSS. ",e("br",{}),"\u2022 Refactorizar y modularizar componentes React. ",e("br",{}),"\u2022 Crear nuevas interfaces siguiendo un dise\xF1o. ",e("br",{}),"\u2022 Conectar FrontEnd con Web Services realizando peticiones HTTP para obtener diversos tipos de datos. ",e("br",{}),"\u2022 Uso de Bootstrap y Material-UI para interface grafica. ",e("br",{}),"\u2022 Uso de Axios y XMLHttpRequest para hacer peticiones HTTP. ",e("br",{}),"\u2022 Uso de dayjs para manejar fechas, jspdf para crear PDFs, xlsx para archivos Excel, entre otras librerias. ",e("br",{}),"\u2022 Soporte y capacitaci\xF3n a cliente externo de la compa\xF1\xEDa. ",e("br",{})]})]}),n===0&&o(v,{id:"sempertex",children:[e("h3",{children:"Axiliar de Soporte TI"}),o("small",{children:[e("time",{dateTime:"Oct. 2019 - Ago. 2020",children:"Oct. 2019 - Ago. 2020"})," "]}),o(i,{maxWidth:"632px",children:["\u2022 Auxiliar en el montaje y mantenimiento de redes de computadores. ",e("br",{}),"\u2022 T\xE9cnico operativo para soporte de sistemas inform\xE1ticos y mantenimiento de computadores. ",e("br",{}),"\u2022 Auxiliar de soporte y atenci\xF3n al cliente en el \xE1rea de inform\xE1tica. ",e("br",{}),"\u2022 Auxiliar de progrmaci\xF3n.",e("br",{})]})]})]})]})},X=r.div`
  display: flex;
  width: 80vw;
  height: 65vh;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
  justify-content: space-around;
  align-items: center;

  > h3 {
    font-size: clamp(26px, 5vw, var(--fz-heading));
    font-weight: 300;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    margin-bottom: 0.8rem;
  }
`,K=()=>o(m,{id:"projects",children:[e(u,{children:"Proyectos"}),e(X,{children:e("h3",{children:"\u26A0 section under construction."})}),e(i,{})]}),Y=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,Z=r.div`
  > h3 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
  }
`,ee=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`,y=r.a`
  display: inline-block;
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
`,re=()=>o(m,{id:"contact",children:[e(Y,{children:"\xBFQu\xE9 es lo siguiente?"}),e(Z,{children:e("h3",{children:"Contactame..."})}),e(i,{maxWidth:"632px",children:"Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada est\xE1 siempre abierta. Tanto si tienes una pregunta como si s\xF3lo quieres saludar, har\xE9 lo posible por responderte."}),o(ee,{children:[e(y,{href:"mailto:danyeduard17@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Di hola en Gmail"}),e(y,{href:"tel:+573017496696",children:"Llamame"}),e(y,{href:"https://wa.link/1bdf5b",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})]})]});var oe="assets/github.a236bd5f.svg",ne="assets/gmail.9761f69e.svg",te="assets/linkedin.80b50059.svg",ae="assets/twitter.0346fa34.svg",ie="assets/whatsapp.bd86f9f0.svg";const le=r.aside`
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
`,se=r.ul`
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
`,p=r.li`
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
`,h=r.img`
  width: 2.2rem;
  filter: brightness(1.1);
  mix-blend-mode: multiply;

  &:hover {
    // box-shadow: 1px 12px 15px 3px rgba(0, 0, 0, 0.52);
    filter: drop-shadow(15px 12px 15px orchid);
    transition: 1s all ease;
  }
`,ce=()=>e(le,{children:o(se,{children:[e(p,{children:e("a",{href:"https://github.com/dany-eduard",target:"_blank",rel:"noopener noreferrer",children:e(h,{src:oe,alt:"GitHub"})})}),e(p,{children:e("a",{href:"mailto:danyeduard17@gmail.com",target:"_blank",rel:"noopener noreferrer",children:e(h,{src:ne,alt:"Gmail"})})}),e(p,{children:e("a",{href:"https://www.linkedin.com/in/dany-eduard/",target:"_blank",rel:"noopener noreferrer",children:e(h,{src:te,alt:"LinkedIn"})})}),e(p,{children:e("a",{href:"https://twitter.com/dany_eduard17",target:"_blank",rel:"noopener noreferrer",children:e(h,{src:ae,alt:"Twitter"})})}),e(p,{children:e("a",{href:"https://wa.link/1bdf5b",target:"_blank",rel:"noopener noreferrer",children:e(h,{src:ie,alt:"WhatsApp"})})})]})}),de=r.div`
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
`,me=r.div`
  grid-area: nav;
`,pe=r.div`
  grid-area: contact-bottons;
`,he=r.main`
  grid-area: main;
  max-width: 100vw;
  padding-left: 15%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 0px 10%;
  }
`;r.div``;function fe(){return o(de,{children:[e(me,{children:e(O,{})}),o(he,{children:[e(G,{}),e(U,{}),e(V,{}),e(K,{}),e(re,{})]}),e(pe,{children:e(ce,{})})]})}const xe=E`
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

`;j.render(o(M.StrictMode,{children:[e(xe,{}),e(fe,{})]}),document.getElementById("root"));
