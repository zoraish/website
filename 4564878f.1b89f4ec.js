(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(144),n=a(143),s=a(0),c=a.n(s),o=a(145);class i extends s.Component{render(){return c.a.createElement(n.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:r.d,html:r.h,h:r.g,gCreateRef:r.f,gComponent:r.c,PluginPosition:r.e,BaseComponent:r.a,BaseProps:r.BaseProps,CodeBlock:n.a,useEffect:s.useEffect,useRef:s.useRef,faker:o,...this.props.scope}})}}},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),s=(a(0),a(141)),c=a(142),o={id:"server",title:"Import server-side data",keywords:["javascript","table","javascript table","gridjs","grid js","server side","server side data"]},i={unversionedId:"examples/server",id:"examples/server",isDocsHomePage:!1,title:"Import server-side data",description:"You can use the server property to load data from a remote server and populate the table:",source:"@site/docs/examples/server.md",permalink:"/docs/examples/server",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Async data import",permalink:"/docs/examples/import-async"},next:{title:"Server Side Search",permalink:"/docs/examples/server-side-search"}},d=[],p={rightToc:d};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can use the ",Object(s.b)("inlineCode",{parentName:"p"},"server")," property to load data from a remote server and populate the table:"),Object(s.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Language', 'Released At', 'Artist'],\n  server: {\n    url: 'https://api.scryfall.com/cards/search?q=Inspiring',\n    then: data => data.data.map(card => [card.name, card.lang, card.released_at, card.artist])\n  } \n});\n",mdxType:"LiveExample"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can also use the ",Object(s.b)("inlineCode",{parentName:"p"},"data")," attribute, pass an async function and your favorite Ajax/XHR client to send\nthe request and feed the table, see ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/examples/import-async"}),"Async data import"),"."))))}l.isMDXComponent=!0}}]);