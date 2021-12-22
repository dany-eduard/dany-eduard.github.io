import{j as v,s as r,r as y,W as z,R as E,a as S}from"./vendor.8e1174a4.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const h of t.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function l(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(n){if(n.ep)return;n.ep=!0;const t=l(n);fetch(n.href,t)}};j();var M="assets/logo.e7ef0941.svg",b="assets/menu.31757ce1.svg",w="assets/close.69d19444.svg";const e=v.exports.jsx,o=v.exports.jsxs,k=r.div`
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`,D=r.div`
  // width: 100%;
  // max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`,T=r.div`
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
`,C=r.ul`
  // height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 960px) {
    background: var(--transparent-background);
    backdrop-filter: blur(23px);
    position: absolute;
    top: 70px;
    left: ${({open:i})=>i?"0":"-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
`,s=r.li`
  height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`,d=r.a`
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
`,F=r.div`
  display: none;
  @media (max-width: 960px) {
    background-image: url(${({open:i})=>i?w:b});
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
  }
`,A=()=>{const[i,c]=y.exports.useState(!1);return e(k,{children:o(D,{children:[e(T,{children:e("img",{src:M,alt:"danyeduard-logo"})}),e(F,{open:i,onClick:()=>c(!i),children:i?e("img",{src:w,alt:"close-icon"}):e("img",{src:b,alt:"menu-icon"})}),o(C,{open:i,onClick:()=>c(!i),children:[e(s,{children:e(d,{href:"#about",children:"Sobre m\xED"})}),e(s,{children:e(d,{href:"#experience",children:"Experiencia"})}),e(s,{children:e(d,{href:"#projects",children:"Proyectos"})}),e(s,{children:e(d,{href:"#contact",children:"Hablame"})}),e(s,{children:e(d,{href:"https://drive.google.com/file/d/12BVXeru5dv3Gjlf08ffL1NiLWN0yVz2h/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn_resume",children:"Resume"})})]})]})})},m=r.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  transition: all 0.5s ease;
`,L=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,W=r.div`
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
`,B=r.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: 560px;
`,N=()=>o(m,{children:[e(L,{id:"about",children:"Hola, soy"}),o(W,{children:[e("h2",{children:"Daniel Eduardo."}),e("h2",{className:"descriptor",children:"Full-Stack Web Developer"})]}),e(B,{children:"Soy desarrollador web con experiencia en desarrollo Front-End y Back-End, con conocimientos en Node.js, React, Angular, Express, y muchas otras tecnolog\xEDas."})]}),f=r.h2`
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  font-family: var(--primary-fonts);
  color: var(--primary-color);
  margin-bottom: 0.8rem;
`,a=r.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: ${({maxWidth:i})=>i||"max-content"};
`,I=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`,x=r.ul`
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
`,R=()=>o(m,{children:[e(f,{id:"#about",children:"Sobre m\xED"}),o(a,{maxWidth:"645px",children:["Mi nombre es Daniel Eduardo Almagro y disfruto de crear cosas para la Web. Mi inter\xE9s por el desarrollo comenz\xF3 en el ",e("time",{dateTime:"2018",children:"2018"})," cuando empec\xE9 a estudiar Mant. de Sistemas Inform\xE1ticos. Actualmente conozco sobre muchos temas, pero considero que a\xFAn tengo un largo camino por recorrer y as\xED mismo much\xEDsimas cosas que aprender y otras por mejorar."]}),e(a,{maxWidth:"645px",children:"Me considero una persona responsable y con habilidad para el trabajo en equipo. Me gusta aprender cosas nuevas y una buena forma de hacerlo es escuchando a otras personas. Tambien me considero una persona resiliente y me gusta aceptar nuevos retos y probar mejores formas de hacer las cosas."}),e(a,{maxWidth:"645px",children:"Mi primera experiencia laboral fue como desarrollador Front-End, utilizando React y Typescript y fue bastante agradable el equipo con el que compart\xED buenos momentos. Actualmente me enfoco principalmente en el desarrollo Back-End con Node.js."}),e(a,{children:"Aqu\xED algunas tecnolog\xEDas con las que he trabajado:"}),o(I,{children:[o(x,{children:[e("li",{children:"HTML"}),e("li",{children:"CSS"}),e("li",{children:"SASS"}),e("li",{children:"Bootstrap"}),e("li",{children:"Materialize"}),e("li",{children:"JavaScript"})]}),o(x,{children:[e("li",{children:"Typescript"}),e("li",{children:"React"}),e("li",{children:"MUI"}),e("li",{children:"Redux"}),e("li",{children:"Angular"}),e("li",{children:"Node.js"})]}),o(x,{children:[e("li",{children:"Express"}),e("li",{children:"NestJs"}),e("li",{children:"PostgreSQL"}),e("li",{children:"MySQL"}),e("li",{children:"Git"})]})]})]}),q=r.div`
  max-width: 1160px;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
`,O=r.div`
  float: left;
  width: 25%;
  height: 300px;

  @media (max-width: 960px) {
    float: none;
    display: flex;
    height: auto;
  }
`,u=r.button`
  display: block;
  background-color: ${({active:i})=>i?"#ccc":"inherit"};
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
`,g=r.div`
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
`,P=()=>{const[i,c]=y.exports.useState(2),l=(p=2)=>{c(p)};return o(m,{children:[e(f,{id:"experience",children:"Donde he trabajado"}),o(q,{children:[o(O,{children:[e(u,{onClick:()=>l(2),active:i===2,children:"3DVES"}),e(u,{onClick:()=>l(1),active:i===1,children:"Devitech"}),e(u,{onClick:()=>l(0),active:i===0,children:"Sempertex"})]}),i===2&&o(g,{id:"3dves",children:[e("h3",{children:"Back-End Developer"}),o("small",{children:[e("time",{dateTime:"Dec. 2021 - actualidad.",children:"Dec. 2021 - actualidad."})," "]}),e(a,{maxWidth:"632px",children:'Empresa tecnol\xF3gica internacional con sucursal en Bogot\xE1, que trabaja en diferentes mercados verticales en el desarrollo de soluciones "IOT" y \u201CB2B\u201D para sectores como el de la construcci\xF3n entre otros donde se usan est\xE1ndares BIM.'})]}),i===1&&o(g,{id:"devitech",children:[e("h3",{children:"Front-End Web Developer | React Developer"}),o("small",{children:[e("time",{dateTime:"Mar. 2021 - Oct. 2021",children:"Mar. 2021 - Oct. 2021"})," "]}),o(a,{maxWidth:"632px",children:["\u2022 Programaci\xF3n del lado del cliente con JavaScript, TypeScript, HTML y CSS. ",e("br",{}),"\u2022 Refactorizar y modularizar componentes React. ",e("br",{}),"\u2022 Crear nuevas interfaces siguiendo un dise\xF1o. ",e("br",{}),"\u2022 Conectar FrontEnd con Web Services realizando peticiones HTTP para obtener diversos tipos de datos. ",e("br",{}),"\u2022 Uso de Bootstrap y Material-UI para interface grafica. ",e("br",{}),"\u2022 Uso de Axios y XMLHttpRequest para hacer peticiones HTTP. ",e("br",{}),"\u2022 Uso de dayjs para manejar fechas, jspdf para crear PDFs, xlsx para archivos Excel, entre otras librerias. ",e("br",{}),"\u2022 Soporte y capacitaci\xF3n a cliente externo de la compa\xF1\xEDa. ",e("br",{})]})]}),i===0&&o(g,{id:"sempertex",children:[e("h3",{children:"Axiliar de Soporte TI"}),o("small",{children:[e("time",{dateTime:"Oct. 2019 - Ago. 2020",children:"Oct. 2019 - Ago. 2020"})," "]}),o(a,{maxWidth:"632px",children:["\u2022 Auxiliar en el montaje y mantenimiento de redes de computadores. ",e("br",{}),"\u2022 T\xE9cnico operativo para soporte de sistemas inform\xE1ticos y mantenimiento de computadores. ",e("br",{}),"\u2022 Auxiliar de soporte y atenci\xF3n al cliente en el \xE1rea de inform\xE1tica. ",e("br",{}),"\u2022 Auxiliar de progrmaci\xF3n.",e("br",{})]})]})]})]})},H=r.div`
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
`,U=()=>o(m,{children:[e(f,{id:"projects",children:"Proyectos"}),e(H,{children:e("h3",{children:"\u26A0 section under construction."})}),e(a,{})]}),$=r.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,G=r.div`
  > h3 {
    font-size: clamp(25px, 8vw, 60px);
    font-weight: 600;
    font-family: var(--primary-fonts);
    color: var(--primary-color);
    line-height: 1.1;
  }
`,J=()=>o(m,{children:[e($,{children:"\xBFQu\xE9 es lo siguiente?"}),e(G,{children:e("h3",{id:"contact",children:"Contactame..."})}),e(a,{maxWidth:"632px",children:"Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada est\xE1 siempre abierta. Tanto si tienes una pregunta como si s\xF3lo quieres saludar, har\xE9 lo posible por responderte."})]}),Q=r.div`
  display: grid;
  gird-auto-columns: 1fr;
  grid-template-columns: 0.2fr 1.8fr;
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
`,V=r.div`
  grid-area: nav;
`,_=r.div`
  grid-area: contact-bottons;
`,X=r.main`
  grid-area: main;
  max-width: 1366px;
  padding: 0px 100px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 0px 10%;
  }
`;r.div``;function K(){return o(Q,{children:[e(V,{children:e(A,{})}),o(X,{children:[e(N,{}),e(R,{}),e(P,{}),e(U,{}),e(J,{})]}),e(_,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}const Y=z`
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

`;E.render(o(S.StrictMode,{children:[e(Y,{}),e(K,{})]}),document.getElementById("root"));
