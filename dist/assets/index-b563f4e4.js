import{j as t,R as a,F as i}from"./index-84ee3536.js";import{b as d,a as c,A as m}from"./constants-a7e79a7d.js";import{N as l,q as F,f as p,L as u}from"./vendor-3c2e7aba.js";import{n as s,c as g}from"./index-2bd8f759.js";const{gaps:h}=g,L=s.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: ${h.md};
  }

  :hover {
    transform: scale(1.02);
    transition-duration: 300ms;
  }
`,f=s(l)`
  text-decoration: none;
  color: inherit;
`,$=({id:e,...r})=>t(L,{children:t(f,{to:`${a.Feed}/${e}`,children:t(d,{...r})})}),y=async()=>{const{data:e}=await c.get(`${m}/news?sortBy=createdAt&order=desc`);return e},x=()=>{const{data:e,isError:r,isLoading:n}=F(["getFeed"],()=>y());return{data:e,isError:r,isLoading:n}},A=s.ul`
  margin: 0;
	padding: 0;
`,w=()=>{const{data:e,isLoading:r,isError:n}=x();return t(A,{children:r?t(p,{children:t(u,{})}):t(i,{children:e==null?void 0:e.map(o=>t($,{...o},o.id))})})},k=w;export{k as default};
