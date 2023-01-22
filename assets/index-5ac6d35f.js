import{j as e,R as i,a as c}from"./index-84ee3536.js";import{u as l,A as m,e as h,r as s,f as d,L as u,g as p,O as g}from"./vendor-3c2e7aba.js";import{E as f,G as S}from"./index.esm-c62344d9.js";import{n as r,c as y}from"./index-2bd8f759.js";const C=()=>{const{colorScheme:o,toggleColorScheme:n}=l(),a=o==="dark";return e(m,{variant:"outline",color:a?"yellow":"gray",onClick:()=>n(),title:"Toggle color scheme",children:a?e(f,{size:18}):e(S,{size:18})})},{gaps:t}=y,v=r.main`
  position: relative;
  height: 100%;
  padding: ${t.lg} 0;
`,L=r.div`
  position: absolute;
  top: ${t.sm};
  right: ${t.md};
`,k=()=>{const o=h();return s.useEffect(()=>{o(i.Feed)},[]),c(v,{children:[e(L,{children:e(C,{})}),e(s.Suspense,{fallback:e(d,{children:e(u,{})}),children:e(p,{size:"sm",children:e(g,{})})})]})},$=k;export{$ as default};
