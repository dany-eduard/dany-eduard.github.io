import{j as y,s as o,r as v,W as z,R as E,a as S}from"./vendor.8e1174a4.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function l(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(i){if(i.ep)return;i.ep=!0;const t=l(i);fetch(i.href,t)}};j();var M="assets/logo.e7ef0941.svg",b="assets/menu.31757ce1.svg",w="assets/close.69d19444.svg";const e=y.exports.jsx,r=y.exports.jsxs,D=o.div`
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`,k=o.div`
  // width: 100%;
  // max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`,T=o.div`
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
`,C=o.ul`
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
    left: ${({open:n})=>n?"0":"-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
`,s=o.li`
  height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`,d=o.a`
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
`,A=o.div`
  display: none;
  @media (max-width: 960px) {
    background-image: url(${({open:n})=>n?w:b});
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
  }
`,F=()=>{const[n,c]=v.exports.useState(!1);return e(D,{children:r(k,{children:[e(T,{children:e("img",{src:M,alt:"danyeduard-logo"})}),e(A,{open:n,onClick:()=>c(!n),children:n?e("img",{src:w,alt:"close-icon"}):e("img",{src:b,alt:"menu-icon"})}),r(C,{open:n,onClick:()=>c(!n),children:[e(s,{children:e(d,{href:"#about",children:"Sobre m\xED"})}),e(s,{children:e(d,{href:"#experience",children:"Experiencia"})}),e(s,{children:e(d,{href:"#projects",children:"Proyectos"})}),e(s,{children:e(d,{href:"#contact",children:"Hablame"})}),e(s,{children:e(d,{href:"https://drive.google.com/file/d/12BVXeru5dv3Gjlf08ffL1NiLWN0yVz2h/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"btn_resume",children:"Resume"})})]})]})})},m=o.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  transition: all 0.5s ease;
`,L=o.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,W=o.div`
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
`,I=o.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: 560px;
`,N=()=>r(m,{children:[e(L,{children:"Hola, soy"}),r(W,{children:[e("h2",{children:"Daniel Eduardo."}),e("h2",{className:"descriptor",children:"Full-Stack Web Developer"})]}),e(I,{children:"Soy desarrollador web con experiencia en desarrollo Front-End y Back-End, con conocimientos en Node.js, React, Angular, Express, y muchas otras tecnolog\xEDas."})]}),h=o.h2`
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  font-family: var(--primary-fonts);
  color: var(--primary-color);
  margin-bottom: 0.8rem;
`,a=o.p`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-md));
  font-weight: 400;
  font-family: var(--primary-fonts);
  color: var(--secondary-color);
  line-height: 1.5;
  margin-top: 1rem;
  max-width: ${({maxWidth:n})=>n||"max-content"};
`,R=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`,x=o.ul`
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
`,q=()=>r(m,{children:[e(h,{id:"#about",children:"Sobre m\xED"}),r(a,{maxWidth:"645px",children:["Mi nombre es Daniel Eduardo Almagro y disfruto de crear cosas para la Web. Mi inter\xE9s por el desarrollo comenz\xF3 en el ",e("time",{dateTime:"2018",children:"2018"})," cuando empec\xE9 a estudiar Mant. de Sistemas Inform\xE1ticos. Actualmente conozco sobre muchos temas, pero considero que a\xFAn tengo un largo camino por recorrer y as\xED mismo much\xEDsimas cosas que aprender y otras por mejorar."]}),e(a,{maxWidth:"645px",children:"Me considero una persona responsable y con habilidad para el trabajo en equipo. Me gusta aprender cosas nuevas y una buena forma de hacerlo es escuchando a otras personas. Tambien me considero una persona resiliente y me gusta aceptar nuevos retos y probar mejores formas de hacer las cosas."}),e(a,{maxWidth:"645px",children:"Mi primera experiencia laboral fue como desarrollador Front-End, utilizando React y Typescript y fue bastante agradable el equipo con el que compart\xED buenos momentos. Actualmente me enfoco principalmente en el desarrollo Back-End con Node.js."}),e(a,{children:"Aqu\xED algunas tecnolog\xEDas con las que he trabajado:"}),r(R,{children:[r(x,{children:[e("li",{children:"HTML"}),e("li",{children:"CSS"}),e("li",{children:"SASS"}),e("li",{children:"Bootstrap"}),e("li",{children:"Materialize"}),e("li",{children:"JavaScript"})]}),r(x,{children:[e("li",{children:"Typescript"}),e("li",{children:"React"}),e("li",{children:"MUI"}),e("li",{children:"Redux"}),e("li",{children:"Angular"}),e("li",{children:"Node.js"})]}),r(x,{children:[e("li",{children:"Express"}),e("li",{children:"NestJs"}),e("li",{children:"PostgreSQL"}),e("li",{children:"MySQL"}),e("li",{children:"Git"})]})]})]}),B=o.div`
  max-width: 1160px;
  margin-top: 1rem;
  box-shadow: 2px 3px 12px #999;
`,O=o.div`
  float: left;
  width: 25%;
  height: 300px;

  @media (max-width: 960px) {
    float: none;
    display: flex;
    height: auto;
  }
`,u=o.button`
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
`,g=o.div`
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
`,P=()=>{const[n,c]=v.exports.useState(2),l=(p=2)=>{c(p)};return r(m,{children:[e(h,{id:"experience",children:"Donde he trabajado"}),r(B,{children:[r(O,{children:[e(u,{onClick:()=>l(2),active:n===2,children:"3DVES"}),e(u,{onClick:()=>l(1),active:n===1,children:"Devitech"}),e(u,{onClick:()=>l(0),active:n===0,children:"Sempertex"})]}),n===2&&r(g,{id:"3dves",children:[e("h3",{children:"Back-End Developer"}),r("small",{children:[e("time",{dateTime:"Dec. 2021 - actualidad.",children:"Dec. 2021 - actualidad."})," "]}),e(a,{maxWidth:"632px",children:'Empresa tecnol\xF3gica internacional con sucursal en Bogot\xE1, que trabaja en diferentes mercados verticales en el desarrollo de soluciones "IOT" y \u201CB2B\u201D para sectores como el de la construcci\xF3n entre otros donde se usan est\xE1ndares BIM.'})]}),n===1&&r(g,{id:"devitech",children:[e("h3",{children:"Front-End Web Developer | React Developer"}),r("small",{children:[e("time",{dateTime:"Mar. 2021 - Oct. 2021",children:"Mar. 2021 - Oct. 2021"})," "]}),r(a,{maxWidth:"632px",children:["\u2022 Programaci\xF3n del lado del cliente con JavaScript, TypeScript, HTML y CSS. ",e("br",{}),"\u2022 Refactorizar y modularizar componentes React. ",e("br",{}),"\u2022 Crear nuevas interfaces siguiendo un dise\xF1o. ",e("br",{}),"\u2022 Conectar FrontEnd con Web Services realizando peticiones HTTP para obtener diversos tipos de datos. ",e("br",{}),"\u2022 Uso de Bootstrap y Material-UI para interface grafica. ",e("br",{}),"\u2022 Uso de Axios y XMLHttpRequest para hacer peticiones HTTP. ",e("br",{}),"\u2022 Uso de dayjs para manejar fechas, jspdf para crear PDFs, xlsx para archivos Excel, entre otras librerias. ",e("br",{}),"\u2022 Soporte y capacitaci\xF3n a cliente externo de la compa\xF1\xEDa. ",e("br",{})]})]}),n===0&&r(g,{id:"sempertex",children:[e("h3",{children:"Axiliar de Soporte TI"}),r("small",{children:[e("time",{dateTime:"Oct. 2019 - Ago. 2020",children:"Oct. 2019 - Ago. 2020"})," "]}),r(a,{maxWidth:"632px",children:["\u2022 Auxiliar en el montaje y mantenimiento de redes de computadores. ",e("br",{}),"\u2022 T\xE9cnico operativo para soporte de sistemas inform\xE1ticos y mantenimiento de computadores. ",e("br",{}),"\u2022 Auxiliar de soporte y atenci\xF3n al cliente en el \xE1rea de inform\xE1tica. ",e("br",{}),"\u2022 Auxiliar de progrmaci\xF3n.",e("br",{})]})]})]})]})},H=o.div`
  display: flex;
  width: 1160px;
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
`,U=()=>r(m,{children:[e(h,{id:"projects",children:"Proyectos"}),e(H,{children:e("h3",{children:"\u26A0 section under construction."})}),e(a,{})]}),$=o.div`
  font-size: clamp(var(--fz-xs), 8vw, var(--fz-xl));
  font-weight: 400;
  font-family: var(--code-fonts);
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
`,G=o.div`
  > h3 {
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
`,J=()=>r(m,{children:[e($,{children:"Contactame..."}),e(h,{id:"contact",children:"Contactame"}),e(G,{children:e("h3",{children:"Dime hola..."})}),e(a,{maxWidth:"632px",children:"Aunque actualmente no estoy buscando nuevas oportunidades, mi bandeja de entrada est\xE1 siempre abierta. Tanto si tienes una pregunta como si s\xF3lo quieres saludar, har\xE9 lo posible por responderte."})]});function V(){return r("div",{children:[e(F,{}),e(N,{}),e(q,{}),e(P,{}),e(U,{}),e(J,{})]})}const _=z`
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

`;E.render(r(S.StrictMode,{children:[e(_,{}),e(V,{})]}),document.getElementById("root"));