(window.webpackJsonpalibaba_rest_countries_api=window.webpackJsonpalibaba_rest_countries_api||[]).push([[0],{1:function(e,a,t){e.exports={container:"CountryDetails_container__4kbIn",countryDetails:"CountryDetails_countryDetails__3OvAy",backButton:"CountryDetails_backButton__2bfrE",main:"CountryDetails_main__Ae9dW",flag:"CountryDetails_flag__2NEi_",details:"CountryDetails_details__2tlby",mainDetails:"CountryDetails_mainDetails__RWWHL",additionalDetails:"CountryDetails_additionalDetails___CUY_",languages:"CountryDetails_languages__1BFgj",detailsContainer:"CountryDetails_detailsContainer__31U8B",darkDetails:"CountryDetails_darkDetails__1-TLe",lightDetails:"CountryDetails_lightDetails__3tyh-",error:"CountryDetails_error__gOoVv"}},11:function(e,a,t){e.exports={countryItem:"CountryItem_countryItem__15hri",background:"CountryItem_background__3X5uK",textContainer:"CountryItem_textContainer__o1XCm",darkCaption:"CountryItem_darkCaption__F6rbz",lightCaption:"CountryItem_lightCaption__3dKuh"}},13:function(e,a,t){e.exports={container:"FilterBar_container__2qj6x",filterBar:"FilterBar_filterBar__EgPhd",regionFilter:"FilterBar_regionFilter__3lgas",rotate:"FilterBar_rotate__TsZfb",dropDown:"FilterBar_dropDown__2WiMm",arrow__Up:"FilterBar_arrow__Up__3uNbf",arrow__Down:"FilterBar_arrow__Down__2rhS3"}},15:function(e,a,t){e.exports={container:"NavBar_container__WwQ6n",bold:"NavBar_bold__1bIV6",semiBold:"NavBar_semiBold__Ob9vx",navBar:"NavBar_navBar__169o_"}},16:function(e,a,t){e.exports={container:"Dashboard_container__205D7",dashboard:"Dashboard_dashboard__3-njO",fillTheRemainingHeight:"Dashboard_fillTheRemainingHeight__3M5Sd"}},20:function(e,a,t){e.exports={countryList:"CountryList_countryList__2N0w8",error:"CountryList_error__3D9qO"}},34:function(e,a,t){e.exports={borderCountries:"BorderCountries_borderCountries__TXNOR"}},36:function(e,a,t){e.exports={notFoundPage:"NotFound_notFoundPage__1J0-G"}},37:function(e,a,t){e.exports=t(65)},6:function(e,a,t){e.exports={container:"Pagination_container__3Siz-","fa-ellipsis-h":"Pagination_fa-ellipsis-h__2XJDu",dark:"Pagination_dark__3ch29",light:"Pagination_light__2HVlT",darkElements:"Pagination_darkElements__2lE83",lightElements:"Pagination_lightElements__1mCbV",root:"Pagination_root__3CR49",loadingGif:"Pagination_loadingGif__1jKSR",pagination:"Pagination_pagination__2oVRO",nextPage:"Pagination_nextPage__pDh0V",isActive:"Pagination_isActive__3TKoH",ellipsis:"Pagination_ellipsis__2xbPc"}},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),o=t.n(r),i=t(4),c=t(10),s=t(2),u=t(15),m=t.n(u),d=l.a.createContext({}),g="/Alibaba_REST_Countries_API/",f=function(){var e=Object(n.useContext)(d),a=e.isUsingDarkMode,t=e.toggleDarkMode;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"".concat(m.a.container," ").concat(m.a.navBar," ").concat(a?"dark darkElements":"light lightElements")},l.a.createElement(c.b,{to:g,className:m.a.bold},"Where in the world?"),l.a.createElement("button",{className:"".concat(m.a.semiBold," ").concat(a?"dark darkElements":"light lightElements"),onClick:t},a?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-moon"})," Dark Mode"):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"far fa-moon"})," Light Mode"))))},E=t(13),_=t.n(E),h=function(e){var a=e.countrySearchField,t=e.regionFilter,r=e.onCountrySearchFieldChange,o=e.onRegionChange,c=e.scrollTo,s=Object(n.useContext)(d).isUsingDarkMode,u=Object(n.useState)(!1),m=Object(i.a)(u,2),g=m[0],f=m[1],E=Object(n.useRef)(null),h=function(e){E.current&&!E.current.contains(e.target)&&f(!1)},b=Object(n.useCallback)((function(e){return r(e.target.value)}),[]),p=Object(n.useCallback)((function(){return f((function(e){return!e}))}),[]),C=Object(n.useCallback)((function(e){e.stopPropagation(),o("")}),[]),v=Object(n.useCallback)((function(e){o(e.target.innerHTML),p()}),[]);return Object(n.useEffect)((function(){return document.addEventListener("mousedown",h),function(){document.removeEventListener("mousedown",h)}})),l.a.createElement("div",{ref:c,className:"".concat(_.a.filterBar," ").concat(_.a.container," ").concat(s?"dark":"light")},l.a.createElement("span",{className:s?"darkElements":"lightElements"},l.a.createElement("i",{className:"fas fa-search"}),l.a.createElement("input",{type:"text",placeholder:"Search for a country...",onChange:b,value:a})),l.a.createElement("div",{className:_.a.regionFilter,ref:E},l.a.createElement("div",{className:s?"darkElements":"lightElements",onClick:p},l.a.createElement("span",null,t&&l.a.createElement("button",{className:s?"darkElements":"lightElements",onClick:C},l.a.createElement("i",{className:"fas fa-times"})),t?t.charAt(0).toUpperCase()+t.slice(1):"Filter by Region"),l.a.createElement("i",{className:"fas fa-arrow-left ".concat(g?_.a.arrow__Up:_.a.arrow__Down)})),g&&l.a.createElement("ul",{className:s?"darkElements":"lightElements",onClick:v},l.a.createElement("li",null,"africa"),l.a.createElement("li",null,"americas"),l.a.createElement("li",null,"asia"),l.a.createElement("li",null,"europe"),l.a.createElement("li",null,"oceania"))))},b=t(17),p=t.n(b),C=t(11),v=t.n(C),k=function(e){var a=e.capital,t=e.darkMode,n=e.name,r=e.population,o=e.region,i=e.homePage,s=e.flag;return l.a.createElement(c.b,{to:"".concat(i,"countries/").concat(n)},l.a.createElement("figure",{className:"".concat(v.a.countryItem," ").concat(t?"dark darkElements":"light lightElements")},l.a.createElement("div",{className:v.a.background,style:{background:"url(".concat(s,")")}}),l.a.createElement("figcaption",{className:v.a.textContainer},l.a.createElement("h2",null,n),l.a.createElement("div",null,"Population :",l.a.createElement("span",{className:t?v.a.darkCaption:v.a.lightCaption},p()(r).format(0,0))),l.a.createElement("div",null,"Region :",l.a.createElement("span",{className:t?v.a.darkCaption:v.a.lightCaption},o)),l.a.createElement("div",null,"Capital :",l.a.createElement("span",{className:t?v.a.darkCaption:v.a.lightCaption},a||"-")))))},N=function(){var e=Object(n.useContext)(d).isUsingDarkMode;return l.a.createElement("img",{className:"loadingGif",src:"".concat("/Alibaba_REST_Countries_API","/assets/pics/loading--").concat(e?"dark":"light",".svg"),alt:"loading"})},D=t(6),y=t.n(D),w=function(e){e.current.scrollIntoView({behavior:"smooth"})},O=function(e,a,t,n){switch(t){case"INCREMENT":w(n),e(a+1);break;case"DECREMENT":w(n),e(a-1)}},j=function(e,a,t,n){if(1===a)return l.a.createElement("button",{className:y.a.isActive},"1");switch(e+1){case 1:case a:return function(e,a,t,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:e+1===a?function(){t(0),w(n)}:void 0,className:0===e?y.a.isActive:void 0},"1"),l.a.createElement("button",{className:y.a.ellipsis},l.a.createElement("i",{className:"fas fa-ellipsis-h"})),l.a.createElement("button",{onClick:e+1===1?function(){t(a-1),w(n)}:void 0,className:e+1===a?y.a.isActive:void 0},a))}(e,a,t,n);case 2:case a-1:return function(e,a,t,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){t(0),w(n)}},"1"),e+1===2?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:y.a.isActive},"2"),l.a.createElement("button",{className:y.a.ellipsis},l.a.createElement("i",{className:"fas fa-ellipsis-h"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:y.a.ellipsis},l.a.createElement("i",{className:"fas fa-ellipsis-h"})),l.a.createElement("button",{className:y.a.isActive},a-1)),l.a.createElement("button",{onClick:function(){t(a-1),w(n)}},a))}(e,a,t,n);default:return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){t(0),w(n)}},"1"),l.a.createElement("button",{className:y.a.ellipsis},l.a.createElement("i",{className:"fas fa-ellipsis-h"})),l.a.createElement("button",{className:y.a.isActive},e+1),l.a.createElement("button",{className:y.a.ellipsis},l.a.createElement("i",{className:"fas fa-ellipsis-h"})),l.a.createElement("button",{onClick:function(){t(a-1),w(n)}},a))}},F=function(e){var a=e.currentPage,t=e.setCurrentPage,r=e.totalPages,o=e.scrollTo,i=Object(n.useContext)(d).isUsingDarkMode;return l.a.createElement("div",{className:"".concat(y.a.pagination," ").concat(i?"dark ":"light ")},l.a.createElement("button",{onClick:function(){O(t,a,"DECREMENT",o)},disabled:0===a},l.a.createElement("i",{className:"fas fa-arrow-left"})),j(a,r,t,o),l.a.createElement("button",{className:y.a.nextPage,onClick:function(){O(t,a,"INCREMENT",o)},disabled:a+1===r},l.a.createElement("i",{className:"fas fa-arrow-left"})))},P=t(20),x=t.n(P),S=function(e){var a=e.filteredCountries,t=e.scrollTo,r=e.regionFilter,o=e.countrySearchField,c=Object(n.useContext)(d),s=c.loading,u=c.isUsingDarkMode,m=c.totalCountries,f=Object(n.useState)(0),E=Object(i.a)(f,2),_=E[0],h=E[1],b=Object(n.useState)(1),p=Object(i.a)(b,2),C=p[0],v=p[1];return Object(n.useEffect)((function(){v((null===a||void 0===a?void 0:a.length)>8?Math.ceil(a.length/8):1)}),[a]),Object(n.useEffect)((function(){h(0)}),[a]),l.a.createElement("section",{className:x.a.countryList},s?l.a.createElement(N,null):(r||o)&&0===(null===a||void 0===a?void 0:a.length)?l.a.createElement("p",{className:x.a.error},"Oops, we have no idea what you're talking about",l.a.createElement("br",null),"Search for something else"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,function(e,a,t,n){return e.length>0&&e.slice(8*a,8*a+8).map((function(e){return l.a.createElement(k,Object.assign({key:e.name},e,{darkMode:t,homePage:n}))}))}(r||o?a:m,_,u,g)),l.a.createElement(F,{currentPage:_,scrollTo:t,setCurrentPage:h,totalPages:C})))},B=t(16),R=t.n(B),T=function(){var e=Object(n.useContext)(d),a=e.isUsingDarkMode,t=e.totalCountries,r=Object(n.useRef)(null),o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],u=c[1],m=Object(n.useState)(""),g=Object(i.a)(m,2),E=g[0],_=g[1],b=Object(n.useState)(""),p=Object(i.a)(b,2),C=p[0],v=p[1];return Object(n.useEffect)((function(){document.title="Where in the World ?"}),[]),Object(n.useEffect)((function(){u((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())}));return C&&(e=e.filter((function(e){return e.region.toLowerCase()===C.toLowerCase()}))),e}))}),[C,E,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:R.a.dashboard},l.a.createElement(f,null),l.a.createElement(h,{scrollTo:r,onRegionChange:function(e){v(e)},onCountrySearchFieldChange:function(e){_(e)},regionFilter:C,countrySearchField:E})),l.a.createElement("main",{className:"".concat(R.a.container," ").concat(R.a.dashboard," ").concat(R.a.fillTheRemainingHeight," ").concat(a?"dark":"light")},l.a.createElement(S,{scrollTo:r,filteredCountries:s,regionFilter:C,countrySearchField:E})))},M=t(34),A=t.n(M),L=function(e){var a=e.countryDetails,t=Object(n.useContext)(d),r=t.totalCountries,o=t.isUsingDarkMode,i=Object(n.useMemo)((function(){return r.filter((function(e){return a&&a.borders&&a.borders.includes(e.alpha3Code)})).map((function(e){return l.a.createElement(c.b,{to:"".concat(g,"countries/").concat(e.name),key:e.name,className:o?"dark darkElements":"light lightElements"},e.name)}))}),[a,r,o]);return l.a.createElement("div",{className:"".concat(A.a.borderCountries," ").concat(o?"dark":"light")},l.a.createElement("h3",null,"Border Countries: "),l.a.createElement("div",null," ",0!==i.length?i:"-"," "))},U=t(35),I=t.n(U),W="https://restcountries.com/v2/all",V=function(){return I.a.get(W)},H=t(1),G=t.n(H),J=function(){var e,a=Object(s.f)(),t=Object(s.g)(),r=Object(n.useContext)(d),o=r.loading,u=r.setLoadingValue,m=r.isUsingDarkMode,E=r.totalCountries,_=Object(n.useState)(null),h=Object(i.a)(_,2),b=h[0],C=h[1],v=function(){u(!0),V().then((function(e){k(e.data)})).catch((function(e){return console.log(e)})).finally((function(){u(!1)}))},k=function(e){C(e.find((function(e){return e.name===t.countryName})))};return Object(n.useEffect)((function(){document.title=t.countryName}),[t]),Object(n.useEffect)((function(){(null===E||void 0===E?void 0:E.length)>0?k(E):v()}),[a.key,E]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"".concat(G.a.countryDetails," ").concat(m?"dark":"light")},l.a.createElement(f,null),l.a.createElement(c.b,{to:g,className:"".concat(G.a.backButton," ").concat(m?"dark darkElements":"light lightElements")},l.a.createElement("i",{className:"fas fa-arrow-left"}),"Back")),l.a.createElement("main",{className:"".concat(G.a.countryDetails," ").concat(G.a.main,"  ").concat(m?"dark":"light")},o||null===b?l.a.createElement(N,null):void 0===b?l.a.createElement("p",{className:G.a.error},"Sorry we we have no idea about the thing you're looking for"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:G.a.flag},l.a.createElement("img",{src:null===b||void 0===b?void 0:b.flag,alt:"".concat(b.name," flag")})),l.a.createElement("div",{className:G.a.details},l.a.createElement("h1",null," ",t.countryName),l.a.createElement("div",{className:G.a.detailsContainer},l.a.createElement("div",{className:G.a.mainDetails},l.a.createElement("p",null,"Native Name:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails},b.nativeName," ")),l.a.createElement("p",null,"Population:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails},p()(b.population).format(0,0))),l.a.createElement("p",null,"Region:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails},b.region)),l.a.createElement("p",null,"Sub Region:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails}," ",b.subregion)),l.a.createElement("p",null,"Capital:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails}," ",b.capital||"-"))),l.a.createElement("div",{className:G.a.additionalDetails},l.a.createElement("p",null,"Top Level Domain:"," ",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails},b.topLevelDomain)),l.a.createElement("p",null,"Currencies:",l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails}," ",(null===b||void 0===b?void 0:b.currencies)?null===b||void 0===b||null===(e=b.currencies[0])||void 0===e?void 0:e.name:"-")),l.a.createElement("p",{className:G.a.languages},"Languages :",b.languages.map((function(e){var a=e.name;return l.a.createElement("span",{className:m?G.a.darkDetails:G.a.lightDetails,key:a},a)}))))),l.a.createElement(L,{countryDetails:b,fetchCountryDetails:v})))))},K=t(36),X=t.n(K),q=function(){var e=Object(n.useContext)(d).isUsingDarkMode;return l.a.createElement("main",{className:"".concat(X.a.notFoundPage," ").concat(e?"dark":"light")},"Sorry, nothing was found !",l.a.createElement(c.b,{to:g,className:e?"darkElements":"lightElements"},"Go Back Home"))},z=(t(64),function(){var e=Object(n.useRef)(!0),a=Object(n.useState)(!0),t=Object(i.a)(a,2),r=t[0],o=t[1],u=Object(n.useState)(!0),m=Object(i.a)(u,2),f=m[0],E=m[1],_=Object(n.useState)([]),h=Object(i.a)(_,2),b=h[0],p=h[1],C=Object(n.useCallback)((function(){E((function(e){return!e}))}),[]),v=Object(n.useCallback)((function(e){if("boolean"!==typeof e)throw new Error("loading value should be a boolean");o(e)}),[]);return Object(n.useEffect)((function(){return v(!0),V().then((function(a){e.current&&p(a.data)})).catch(console.error).finally((function(){v(!1)})),function(){e.current=!1}}),[]),l.a.createElement(d.Provider,{value:{loading:r,setLoadingValue:v,toggleDarkMode:C,isUsingDarkMode:f,totalCountries:b}},l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:g},l.a.createElement(T,null)),l.a.createElement(s.a,{exact:!0,path:"".concat(g,"countries/:countryName")},l.a.createElement(J,null)),l.a.createElement(s.a,null,l.a.createElement(q,null)))))}),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Alibaba_REST_Countries_API",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/Alibaba_REST_Countries_API","/service-worker.js");Q?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(a,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.ae980dd0.chunk.js.map