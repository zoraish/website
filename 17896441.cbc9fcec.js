(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(169);function l(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(193),c=a(184),i=a(169),m=a(181),s=a(171);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:m}=e,s=decodeURIComponent(m.substring(m.indexOf("#")+1));i.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},E=a(170),u=a.n(E),g=a(99),v=a.n(g);function p({headings:e}){return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(f,{headings:e})))}function f({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:d}=s,{description:E,title:g,permalink:f,editUrl:h,lastUpdatedAt:_,lastUpdatedBy:b,version:N}=d,{frontMatter:{image:w,keywords:k,hide_title:y,hide_table_of_contents:C}}=s,x=g?`${g} | ${n}`:n;let L=a+Object(m.a)(w);return Object(c.a)(w)||(L=w),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,x),l.a.createElement("meta",{property:"og:title",content:x}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),k&&k.length&&l.a.createElement("meta",{name:"keywords",content:k.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:L}),w&&l.a.createElement("meta",{property:"twitter:image",content:L}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),f&&l.a.createElement("meta",{property:"og:url",content:a+f}),f&&l.a.createElement("link",{rel:"canonical",href:a+f})),l.a.createElement("div",{className:u()("container padding-vert--lg",v.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:u()("col",{[v.a.docItemCol]:!C})},l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N)),!y&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},g)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(h||_||b)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||b)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),b&&" "),b&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,b)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:d})))),!C&&s.rightToc&&l.a.createElement(p,{headings:s.rightToc}))))}}}]);