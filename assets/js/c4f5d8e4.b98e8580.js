(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[4195],{70094:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(86010),l=a(86700),s=a(80944),i=a(24973),o="announcementBar_3WsW",c="announcementBarClose_38nx",m="announcementBarContent_3EUC",d="announcementBarCloseable_3myR";var u=function(){var e,t=(0,s.Z)(),a=t.isAnnouncementBarClosed,u=t.closeAnnouncementBar,g=(0,l.LU)().announcementBar;if(!g)return null;var h=g.content,x=g.backgroundColor,f=g.textColor,p=g.isCloseable;return!h||p&&a?null:n.createElement("div",{className:o,style:{backgroundColor:x,color:f},role:"banner"},n.createElement("div",{className:(0,r.Z)(m,(e={},e[d]=p,e)),dangerouslySetInnerHTML:{__html:h}}),p?n.createElement("button",{type:"button",className:c,onClick:u,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},n.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},48543:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294),r=a(10412),l=a(86700),s=(0,l.WA)("theme"),i="light",o="dark",c=function(e){return e===o?o:i},m=function(e){(0,l.WA)("theme").set(c(e))},d=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,a=e.disableSwitch,d=e.respectPrefersColorScheme,u=(0,n.useState)(function(e){return r.Z.canUseDOM?c(document.documentElement.getAttribute("data-theme")):c(e)}(t)),g=u[0],h=u[1],x=(0,n.useCallback)((function(){h(i),m(i)}),[]),f=(0,n.useCallback)((function(){h(o),m(o)}),[]);return(0,n.useEffect)((function(){document.documentElement.setAttribute("data-theme",c(g))}),[g]),(0,n.useEffect)((function(){if(!a)try{var e=s.get();null!==e&&h(c(e))}catch(t){console.error(t)}}),[h]),(0,n.useEffect)((function(){a&&!d||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?o:i)}))}),[]),{isDarkTheme:g===o,setLightTheme:x,setDarkTheme:f}},u=a(82924);var g=function(e){var t=d(),a=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return n.createElement(u.Z.Provider,{value:{isDarkTheme:a,setLightTheme:r,setDarkTheme:l}},e.children)}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},55057:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(67294);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function l(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=a(86700),i="docusaurus.tab.",o=function(){var e=(0,n.useState)({}),t=e[0],a=e[1],r=(0,n.useCallback)((function(e,t){(0,s.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,n.useEffect)((function(){try{for(var e,t={},n=l((0,s._f)());!(e=n()).done;){var r=e.value;if(r.startsWith(i))t[r.substring(i.length)]=(0,s.WA)(r).get()}a(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},c=(0,s.WA)("docusaurus.announcement.dismiss"),m=(0,s.WA)("docusaurus.announcement.id"),d=function(){var e=(0,s.LU)().announcementBar,t=(0,n.useState)(!0),a=t[0],r=t[1],l=(0,n.useCallback)((function(){c.set("true"),r(!0)}),[]);return(0,n.useEffect)((function(){if(e){var t=e.id,a=m.get();"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;m.set(t),n&&c.set("false"),(n||"false"===c.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:l}},u=a(79443);var g=function(e){var t=o(),a=t.tabGroupChoices,r=t.setTabGroupChoices,l=d(),s=l.isAnnouncementBarClosed,i=l.closeAnnouncementBar;return n.createElement(u.Z.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:r,isAnnouncementBarClosed:s,closeAnnouncementBar:i}},e.children)}},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},16252:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n={};a.r(n);var r=a(22122),l=a(67294),s=a(99105),i=a(48543),o=a(55057),c=a(70094),m=a(16589),d=a(85384),u=a.n(d),g=a(41904),h=a(52263),x=[{title:l.createElement(l.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",icon:l.createElement(l.Fragment,null,l.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}))),description:l.createElement(l.Fragment,null,"The simplicity of Grid.js API will help you to develop advanced JavaScript tables in a few simple and straightforward steps.")},{title:l.createElement(l.Fragment,null,"Extensible"),icon:l.createElement(l.Fragment,null,l.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),l.createElement("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))),description:l.createElement(l.Fragment,null,"Grid.js takes advantage of an advanced pipeline to process data. The pipeline is very easy to extend and improve.")},{title:l.createElement(l.Fragment,null,"Free and open-source"),icon:l.createElement(l.Fragment,null,l.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}))),description:l.createElement(l.Fragment,null,"Grid.js is Free and open-source, published under MIT license.")}],f=function(){for(var e=[],t=0;t<15;t++){var a=u().address.country(),n=u().name.jobArea();e.push([u().name.firstName(),n.length>9?n.slice(0,9)+"...":""+n,a.length>9?a.slice(0,9)+"...":""+a])}return e};function p(e){var t=e.icon,a=e.title,n=e.description;return l.createElement("div",{className:"mt-10 lg:mt-0"},l.createElement("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"},t),l.createElement("div",{className:"mt-5"},l.createElement("h5",{className:"text-lg leading-6 font-medium text-gray-900"},a),l.createElement("p",{className:"mt-2 text-base leading-6 text-gray-500"},n)))}function b(){return l.createElement("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8"},l.createElement("div",{className:"py-12 bg-white"},l.createElement("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8"},l.createElement("div",{className:"lg:grid lg:grid-cols-3 lg:gap-8"},x.map((function(e,t){return l.createElement(p,(0,r.Z)({key:t},e))}))))))}function E(){var e=(0,l.useState)(!1),t=e[0],a=e[1],n=(0,l.useRef)(null);return(0,l.useEffect)((function(){n.current.childNodes.length>0||new g.rj({data:f(),columns:[{name:"Name"},{name:"Job"},{name:"Country"}],sort:!0,pagination:{enabled:!0,summary:!1,limit:5}}).render(n.current)})),l.createElement("div",{className:"relative bg-white overflow-hidden"},l.createElement("div",{className:"hidden lg:block lg:absolute lg:inset-0"},l.createElement("svg",{className:"absolute top-0 left-1/2 transform translate-x-64 -translate-y-8",width:"640",height:"784",fill:"none",viewBox:"0 0 640 784"},l.createElement("defs",null,l.createElement("pattern",{id:"9ebea6f4-a1f5-4d96-8c4e-4c2abf658047",x:"118",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},l.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),l.createElement("rect",{y:"72",width:"640",height:"640",className:"text-gray-50",fill:"currentColor"}),l.createElement("rect",{x:"118",width:"404",height:"784",fill:"url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"}))),l.createElement("div",{className:"relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32"},l.createElement("nav",{className:"relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6"},l.createElement("div",{className:"flex items-center flex-1"},l.createElement("div",{className:"flex items-center justify-between w-full md:w-auto"},l.createElement("a",{href:"/"},l.createElement("img",{className:"h-8 w-auto sm:h-10",src:"/img/logo.svg",alt:"Grid.js"})),l.createElement("div",{className:"-mr-2 flex items-center md:hidden"},l.createElement("button",{type:"button",onClick:function(){return a(!0)},className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},l.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}))))),l.createElement("div",{className:"hidden md:block md:ml-10"},l.createElement("a",{href:"/docs/install",className:"font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"},"Install"),l.createElement("a",{href:"/docs/index",className:"ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"},"Documentation"),l.createElement("a",{href:"/docs/sponsors",className:"ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"},"Sponsors"),l.createElement("a",{href:"/docs/community",className:"ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"},"Community"),l.createElement("a",{href:"https://github.com/grid-js/gridjs",className:"ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"},"GitHub"))),l.createElement("div",{className:"hidden md:block text-right"},l.createElement("span",{className:"inline-flex rounded-md shadow-md"},l.createElement("span",{className:"inline-flex rounded-md shadow-xs"},l.createElement("a",{href:"https://discord.com/invite/K55BwDY",className:"inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"Chat"))))),l.createElement("div",{className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden "+(t?"":"hidden")},l.createElement("div",{className:"rounded-lg shadow-md"},l.createElement("div",{className:"rounded-lg bg-white shadow-xs overflow-hidden"},l.createElement("div",{className:"px-5 pt-4 flex items-center justify-between"},l.createElement("div",null,l.createElement("img",{className:"h-8 w-auto",src:"/img/logo.svg",alt:"Grid.js"})),l.createElement("div",{className:"-mr-2"},l.createElement("button",{type:"button",onClick:function(){return a(!1)},className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},l.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))))),l.createElement("div",{className:"px-2 pt-2 pb-3"},l.createElement("a",{href:"/docs/install",className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"},"Install"),l.createElement("a",{href:"/docs/index",className:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"},"Documentation"),l.createElement("a",{href:"/docs/sponsors",className:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"},"Sponsors"),l.createElement("a",{href:"/docs/community",className:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"},"Community"),l.createElement("a",{href:"https://github.com/grid-js/gridjs",className:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"},"GitHub")),l.createElement("div",null,l.createElement("a",{href:"https://discord.com/invite/K55BwDY",className:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"},"Chat"))))),l.createElement("div",{className:"mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"},l.createElement("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8"},l.createElement("div",{className:"sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"},l.createElement("h1",{className:"mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"},"Grid.js\xa0",l.createElement("br",{className:"hidden md:inline"}),l.createElement("span",{className:"text-blue-600"},"Advanced Table Plugin")),l.createElement("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},"Grid.js is a Free and open-source JavaScript table plugin. It works with most JavaScript frameworks, including ",l.createElement("b",null,"React"),", ",l.createElement("b",null,"Angular"),", ",l.createElement("b",null,"Vue")," and ",l.createElement("b",null,"VanillaJs"),"."),l.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},l.createElement("div",{className:"rounded-md shadow"},l.createElement("a",{href:"/docs/index",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"},"Get started")),l.createElement("div",{className:"mt-3 sm:mt-0 sm:ml-3"},l.createElement("a",{href:"/docs/examples/hello-world",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"},"Examples")))),l.createElement("div",{className:"mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"},l.createElement("svg",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden",width:"640",height:"784",fill:"none",viewBox:"0 0 640 784"},l.createElement("defs",null,l.createElement("pattern",{id:"4f4f415c-a0e9-44c2-9601-6ded5a34a13e",x:"118",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},l.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),l.createElement("rect",{y:"72",width:"640",height:"640",className:"text-gray-50",fill:"currentColor"}),l.createElement("rect",{x:"118",width:"404",height:"784",fill:"url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"})),l.createElement("div",{className:"relative mx-auto w-full rounded-lg lg:max-w-md"},l.createElement("div",{ref:n})))))))}function v(){return l.createElement("div",{className:"bg-gray-800 "+n.footer},l.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},l.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},l.createElement("div",{className:"grid grid-cols-2 gap-8 xl:col-span-2"},l.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-8"},l.createElement("div",null,l.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"Grid.js"),l.createElement("ul",{className:"mt-4"},l.createElement("li",null,l.createElement("a",{href:"/docs/install",className:"text-base leading-6 text-gray-300 hover:text-white"},"Install")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"/docs/examples/hello-world",className:"text-base leading-6 text-gray-300 hover:text-white"},"Examples")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"#",className:"text-base leading-6 text-gray-300 hover:text-white"},"Contribute")))),l.createElement("div",{className:"mt-12 md:mt-0"},l.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"Support"),l.createElement("ul",{className:"mt-4"},l.createElement("li",null,l.createElement("a",{href:"/docs/index",className:"text-base leading-6 text-gray-300 hover:text-white"},"Documentation")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"/docs/community",className:"text-base leading-6 text-gray-300 hover:text-white"},"Community")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"https://discord.com/invite/K55BwDY",className:"text-base leading-6 text-gray-300 hover:text-white"},"Chat")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"#",className:"text-base leading-6 text-gray-300 hover:text-white"},"StackOverflow"))))),l.createElement("div",{className:"md:grid md:grid-cols-2 md:gap-8"},l.createElement("div",null,l.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"Team"),l.createElement("ul",{className:"mt-4"},l.createElement("li",null,l.createElement("a",{href:"/blog",className:"text-base leading-6 text-gray-300 hover:text-white"},"Blog")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"#",className:"text-base leading-6 text-gray-300 hover:text-white"},"Contributors")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"https://github.com/grid-js/gridjs",className:"text-base leading-6 text-gray-300 hover:text-white",target:"_blank"},"GitHub")),l.createElement("li",{className:"mt-4"},l.createElement("a",{href:"https://introjs.com",title:"Intro.js is a lightweight library for creating step-by-step customer onboarding",className:"text-base leading-6 text-gray-300 hover:text-white",target:"_blank"},"Intro.js")))),l.createElement("div",{className:"mt-12 md:mt-0"},l.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"Legal"),l.createElement("ul",{className:"mt-4"},l.createElement("li",null,l.createElement("a",{href:"/docs/license",className:"text-base leading-6 text-gray-300 hover:text-white"},"License"))))))),l.createElement("div",{className:"mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"},l.createElement("div",{className:"flex md:order-2"},l.createElement("a",{href:"https://twitter.com/grid_js",className:"ml-6 text-gray-400 hover:text-gray-300"},l.createElement("span",{className:"sr-only"},"Twitter"),l.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},l.createElement("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}))),l.createElement("a",{href:"https://github.com/grid-js/gridjs",className:"ml-6 text-gray-400 hover:text-gray-300"},l.createElement("span",{className:"sr-only"},"GitHub"),l.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},l.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})))),l.createElement("p",{className:"mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1"},"\xa9 2020 Usablica Limited, Inc. All rights reserved."))))}function y(){return l.createElement("div",{className:"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},l.createElement("div",{className:"relative max-w-lg mx-auto lg:max-w-7xl"},l.createElement("div",null,l.createElement("h2",{className:"text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},"Install Grid.js"),l.createElement("p",{className:"mt-3 text-xl leading-7 text-gray-500 sm:mt-4"},"You can install Grid.js in a few simple steps. Grid.js consists of two main files, the JavaScript part and the CSS part which renders the elements nicely.")),l.createElement("div",{className:"mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"},l.createElement("div",null,l.createElement("h3",{className:"mt-4 text-xl leading-7 font-semibold text-gray-900"},l.createElement("span",{className:"inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600"},"1")," Include the JavaScript and CSS"),l.createElement("p",{className:"mt-3 text-base leading-6 text-gray-500"},"Grid.js is available on ",l.createElement("a",{rel:"noreferrer",href:"https://www.npmjs.com/package/gridjs",target:"_blank"},"NPM")," and most CDNs"),l.createElement("div",{className:"mt-1 flex rounded-md shadow-sm"},l.createElement("span",{className:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"},"JavaScript"),l.createElement("input",{readOnly:"readOnly",className:"form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5",value:"https://unpkg.com/gridjs/dist/gridjs.umd.js"})),l.createElement("div",{className:"mt-3 flex rounded-md shadow-sm"},l.createElement("span",{className:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"},"CSS"),l.createElement("input",{readOnly:"readOnly",className:"form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5",value:"https://unpkg.com/gridjs/dist/theme/mermaid.min.css"}))),l.createElement("div",null,l.createElement("h3",{className:"mt-4 text-xl leading-7 font-semibold text-gray-900"},l.createElement("span",{className:"inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600"},"2")," Call the ",l.createElement("code",null,"render()")," method"),l.createElement("p",{className:"mt-3 text-base leading-6 text-gray-500"},"The ",l.createElement("code",null,"render()")," method binds and renders a Grid.js instance"),l.createElement("div",{className:n.codeExample},l.createElement(m.Z,{className:"js",id:"codeExample"},"new Grid({ \n  columns: ['Name', 'Email'],\n  data: [\n    ['John', 'john@example.com'],\n    ['Mike', 'mike@gmail.com']\n  ] \n}).render(document.getElementById('table'));"))))))}var w=function(){var e=(0,h.default)().siteConfig,t=void 0===e?{}:e;return(0,l.useEffect)((function(){document.documentElement.setAttribute("data-theme","")})),l.createElement(i.Z,{isDarkTheme:!1},l.createElement(o.Z,null,l.createElement(s.Z,null,l.createElement("html",{lang:"en"}),l.createElement("title",null,t.title," - ",t.tagline),l.createElement("meta",{property:"og:title",content:t.title+" - "+t.tagline}),l.createElement("link",{rel:"shortcut icon",href:"/img/favicon.ico"}),l.createElement("meta",{name:"author",content:"Afshin Mehrabani"}),l.createElement("meta",{name:"description",content:"Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!"}),l.createElement("meta",{property:"og:description",content:"Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!"}),l.createElement("meta",{name:"keywords",content:"grid, gridjs, grid.js, javascript, javascript table, js table, js grid, jquery, react, table, html, npm, node, angular, vue, typescript"}),l.createElement("meta",{property:"og:image",content:"https://gridjs.io/img/social.png"}),l.createElement("meta",{property:"og:url",content:"https://gridjs.io/"}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:image",content:"https://gridjs.io/img/social.png"}),l.createElement("meta",{name:"twitter:title",content:t.title+" - "+t.tagline}),l.createElement("meta",{name:"twitter:image:alt",content:t.title+" - "+t.tagline}),l.createElement("meta",{name:"twitter:description",content:"Grid.js is a lightweight JavaScript table plugin that works on all web browsers and devices. Grid.js is open-source and it helps you create advanced tables in seconds!"}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:site",content:"@grid_js"}),l.createElement("meta",{name:"twitter:creator",content:"@afshinmeh"})),l.createElement(c.Z,null),l.createElement(E,null),l.createElement(y,null),l.createElement(b,null),l.createElement(v,null)))}}}]);