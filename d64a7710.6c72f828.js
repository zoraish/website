(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{123:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return i})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return p}));var t=a(2),r=a(6),s=(a(0),a(141)),c=a(142),o={id:"search",title:"Search",keywords:["javascript","table","javascript table","gridjs","grid js","search","table search","row search"]},i={unversionedId:"examples/search",id:"examples/search",isDocsHomePage:!1,title:"Search",description:"Grid.js supports global search on all rows and columns. Set search",source:"@site/docs/examples/search.md",permalink:"/docs/examples/search",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/search.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1595586234,sidebar:"sidebar",previous:{title:"Pagination",permalink:"/docs/examples/pagination"},next:{title:"Sorting",permalink:"/docs/examples/sorting"}},l=[],m={rightToc:l};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Grid.js supports global search on all rows and columns. Set ",Object(s.b)("inlineCode",{parentName:"p"},"search: true")," to enable the search plugin:"),Object(s.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n",mdxType:"LiveExample"}),Object(s.b)("br",null),Object(s.b)("p",null,"Or you can pass an object to customize the search plugin:"),Object(s.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n   {\n     name: 'Name',\n     formatter: (cell) => cell.firstName\n   }, \n   'Email',\n   'Phone Number'\n  ],\n  search: {\n    selector: (cell, rowIndex, cellIndex) => cellIndex === 0 ? cell.firstName : cell\n  },\n  data: [\n    [{ firstName: 'John', lastName: 'MP' }, 'john@example.com', '(353) 01 222 3333'],\n    [{ firstName: 'Mark', lastName: 'Blue' }, 'mark@gmail.com',   '(01) 22 888 4444'],\n    [{ firstName: 'Eoin', lastName: 'Kavanagh' }, 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    [{ firstName: 'Megan', lastName: 'Niesen' }, 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n",mdxType:"LiveExample"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Using the ",Object(s.b)("inlineCode",{parentName:"p"},"selector")," function, you can select or customize each cell's content for the search plugin. For instance,\nif you have a nested object and you need to select a particular field to apply the search functionality to."))))}p.isMDXComponent=!0},142:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(144),r=a(143),s=a(0),c=a.n(s),o=a(145);class i extends s.Component{render(){return c.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:t.d,html:t.h,h:t.g,gCreateRef:t.f,gComponent:t.c,PluginPosition:t.e,BaseComponent:t.a,BaseProps:t.BaseProps,CodeBlock:r.a,useEffect:s.useEffect,useRef:s.useRef,faker:o,...this.props.scope}})}}}}]);