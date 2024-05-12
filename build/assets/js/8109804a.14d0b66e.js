"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[90],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,c=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(c,o(o({ref:t},g),{},{components:n})):i.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3140:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(8168),a=(n(6540),n(5680));const r={id:"query-formatting",title:"Query Formatting"},o="Query Formatting",l={unversionedId:"digi-api/query-formatting",id:"digi-api/query-formatting",isDocsHomePage:!1,title:"Query Formatting",description:"The Different Entities and Parameters in the API",source:"@site/docs/digi-api/query-formatting.mdx",sourceDirName:"digi-api",slug:"/digi-api/query-formatting",permalink:"/build/index.html/docs/digi-api/query-formatting",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/digi-api/query-formatting.mdx",version:"current",frontMatter:{id:"query-formatting",title:"Query Formatting"},sidebar:"api",previous:{title:"Introduction",permalink:"/build/index.html/docs/digi-api/intro"},next:{title:"Media Encoding",permalink:"/build/index.html/docs/digi-api/media-encoding"}},s=[{value:"Core Entities",id:"core-entities",children:[]},{value:"Aggregated Entities",id:"aggregated-entities",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sales Price Responses",id:"sales-price-responses",children:[]},{value:"Pagination Parameters",id:"pagination-parameters",children:[]}],p={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"query-formatting"},"Query Formatting"),(0,a.yg)("h5",{id:"the-different-entities-and-parameters-in-the-api"},"The Different Entities and Parameters in the API"),(0,a.yg)("hr",null),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Check out our ",(0,a.yg)("a",{parentName:"p",href:"https://api.digiv3rse.xyz/graphql"},"GraphiQL")," to play around with the API"))),(0,a.yg)("h3",{id:"core-entities"},"Core Entities"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"token"),": Gets data on a single token"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tokens"),": Gets data for multiple tokens"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"collections"),": NFT collection information"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"events"),": Contract event information, e.g. Transfers, Mints, Approvals, etc. Queries may timeout if not scoped to a specific contract."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sales"),": Historical sales data from DIGI, OpenSea, LooksRare, Foundation, and more."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"mints"),": Historical minting data")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"aggregated-entities"},"Aggregated Entities"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"aggregateStat"),": Returns owner count, total supply, sales volume, and other statistics"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"aggregateAttributes"),": Gets the total set of NFT attributes")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"query-parameters"},"Query Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"where"),": Parameters that grab a specific set of NFT data, e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"collectionAddress")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"filter"),": Filters down the results from the ",(0,a.yg)("inlineCode",{parentName:"li"},"where")," parameters into a smaller data set"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"networks"),": The network and chain to grab NFT data from"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pagination"),": A way to set the limit and starting point of the response"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sort"),": Sorts the order of the returned data")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"sales-price-responses"},"Sales Price Responses"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"nativePrice"),": The sales price in the currency that was used in the sale transaction"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"usdcPrice"),": The sales price in USD at the time of the sale"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"chainTokenPrice"),": The sales price in the chain's gas token at the time of the sale",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Ethereum = ETH"),(0,a.yg)("li",{parentName:"ul"},"Polygon = Matic")))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"pagination-parameters"},"Pagination Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"limit"),": Limits the size of the response"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"after"),": A cursor string from the previous page",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"after")," can be obtained from the ",(0,a.yg)("inlineCode",{parentName:"li"},"endCursor")," in the ",(0,a.yg)("inlineCode",{parentName:"li"},"pageInfo")," response")))))}m.isMDXComponent=!0}}]);