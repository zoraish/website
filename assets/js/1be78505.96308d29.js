(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[9514,4608],{63616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var a=n(67294),i=n(3905),r=n(52263),l=n(46291),o=n(26270),c=n(22122),s=n(19756),d=n(86010),u=n(86700),m=n(80944),b=n(31839),p=n(93783),h=n(77898),f=n(36742),v=n(13919),E=n(55537),g=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(84478),_=n(24973),C="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",y="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R",L="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH",R="menuLinkExternal_1OhN",M=["items"],B=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},W=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,M);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return a.createElement(F,e);case"link":default:return a.createElement(O,e)}}function F(e){var t,n,i,r=e.item,l=e.onItemClick,o=e.collapsible,u=e.activePath,m=(0,s.Z)(e,B),b=r.items,p=r.label,h=H(r,u),f=(n=h,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!o&&(!h&&r.collapsed)})),E=v[0],g=v[1],k=(0,a.useRef)(null),_=(0,a.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!f&&E&&g(!1)}),[h,f,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[y]=!o,t)),onClick:o?I:void 0,href:o?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||N(!1)}},a.createElement(W,{items:b,tabIndex:E?"-1":"0",onItemClick:l,collapsible:o,activePath:u})))}function O(e){var t,n=e.item,i=e.onItemClick,r=e.activePath,l=(e.collapsible,(0,s.Z)(e,P)),o=n.href,u=n.label,m=H(n,r);return a.createElement("li",{className:"menu__list-item",key:u},a.createElement(f.Z,(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--active":m},t[R]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:i},l),u))}function K(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(g,{className:A}))}function U(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(L,x)},"\xd7"):a.createElement(k.Z,{className:L,height:24,width:24}))}var V=function(e){var t,n,i=e.path,r=e.sidebar,l=e.sidebarCollapsible,o=void 0===l||l,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,u.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),w=y.showResponsiveSidebar,A=y.closeResponsiveSidebar,L=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(C,(t={},t[Z]=g,t[N]=s,t))},g&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":w},n[T]=!_&&f,n))},a.createElement(U,{responsiveSidebarOpened:w,onClick:L}),a.createElement("ul",{className:"menu__list"},a.createElement(W,{items:r,onItemClick:A,collapsible:o,activePath:i}))),k&&a.createElement(K,{onClick:c}))},j=n(3009),z=n(24608),J=n(5977),Y="docPage_31aa",G="docMainContainer_3ufF",Q="docMainContainerEnhanced_3NYZ",X="docSidebarContainer_3Kbt",q="docSidebarContainerHidden_3pA8",$="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ne="docItemWrapper_3FMP";function ae(e){var t,n,l,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,r.default)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,k=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=k[m.path],I=C[N],S=(0,a.useState)(!1),y=S[0],T=S[1],w=(0,a.useState)(!1),A=w[0],L=w[1],x=(0,a.useCallback)((function(){A&&L(!1),T(!y)}),[A]);return a.createElement(o.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,u.os)(E,Z)}},a.createElement("div",{className:Y},I&&a.createElement("div",{className:(0,d.Z)(X,(t={},t[q]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X)&&y&&L(!0)},role:"complementary"},a.createElement(V,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(l=f.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:x,isHidden:A}),A&&a.createElement("div",{className:$,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},a.createElement(g,{className:ee}))),a.createElement("main",{className:(0,d.Z)(G,(c={},c[Q]=y||!I,c))},a.createElement("div",{className:(0,d.Z)("container padding-vert--lg",ne,(s={},s[te]=y,s))},a.createElement(i.Zo,{components:j.Z},p)))))}var ie=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,r=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return r?a.createElement(ae,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t)):a.createElement(z.default,e)}},3009:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(67294),i=n(36742),r=n(16589),l=n(19756),o=n(86010),c=n(24973),s=n(86700),d="enhancedAnchor_2LWZ",u=["id"],m=function(e){return function(t){var n,i=t.id,r=(0,l.Z)(t,u),m=(0,s.LU)().navbar.hideOnScroll;return i?a.createElement(e,r,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(n={},n[d]=!m,n)),id:i}),r.children,a.createElement("a",{className:"hash-link",href:"#"+i,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,r)}},b={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(r.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(r.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},24608:function(e,t,n){"use strict";n.r(t);var a=n(67294),i=n(26270),r=n(24973);t.default=function(){return a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);