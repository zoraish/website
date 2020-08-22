(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(144)),s={id:"jquery",title:"jQuery"},c={unversionedId:"integrations/jquery",id:"integrations/jquery",isDocsHomePage:!1,title:"jQuery",description:"jQuery wrapper for Grid.js",source:"@site/docs/integrations/jquery.md",permalink:"/docs/integrations/jquery",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/jquery.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1598096785,sidebar:"sidebar",previous:{title:"Vue",permalink:"/docs/integrations/vue"},next:{title:"Hello, World!",permalink:"/docs/examples/hello-world"}},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]}],o={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/grid-js/gridjs-jquery"}),"jQuery wrapper")," for Grid.js"),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Include jQuery and gridjs-jquery in the ",Object(i.b)("inlineCode",{parentName:"p"},"<head>")," tag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://unpkg.com/jquery/dist/jquery.min.js"><\/script>\n<script src="https://unpkg.com/gridjs-jquery/dist/gridjs.production.min.js"><\/script>\n<link rel="stylesheet" type="text/css" href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" />\n')),Object(i.b)("p",null,"or install using NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save gridjs-jquery\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": ",Object(i.b)("inlineCode",{parentName:"p"},"gridjs-jquery")," contains Grid.js package as well. You don't need to install it separately."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Select your wrapper and call ",Object(i.b)("inlineCode",{parentName:"p"},"Grid"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"$(\"div#wrapper\").Grid({\n  columns: ['Name', 'Age', 'Email'],\n  data: [\n    ['John', 25, 'john@k.com'],\n    ['Mark', 59, 'mark@e.com'],\n    // ...\n  ],\n});\n")),Object(i.b)("p",null,"Live example: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/gridjs-jquery-jq4zf"}),"https://codesandbox.io/s/gridjs-jquery-jq4zf"),"  "),Object(i.b)("p",null,"Grid.js can also convert an HTML table. Simply select the table with jQuery\nand call ",Object(i.b)("inlineCode",{parentName:"p"},"Grid"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'$("table#myTable").Grid();\n')),Object(i.b)("p",null,"You can pass all Grid.js configs to the ",Object(i.b)("inlineCode",{parentName:"p"},"Grid")," function.\nSee ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://gridjs.io/docs/config"}),"Grid.js Config")," for more details."))}d.isMDXComponent=!0}}]);