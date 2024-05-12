"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[1519],{5680:(e,i,n)=>{n.d(i,{xA:()=>g,yg:()=>y});var a=n(6540);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function o(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),p=function(e){var i=a.useContext(d),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},g=function(e){var i=p(e.components);return a.createElement(d.Provider,{value:i},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},m=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return n?a.createElement(y,l(l({ref:i},g),{},{components:n})):a.createElement(y,l({ref:i},g))}));function y(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in i)hasOwnProperty.call(i,d)&&(o[d]=i[d]);o.originalType=e,o[u]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2302:(e,i,n)=>{n.r(i),n.d(i,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(8168),t=(n(6540),n(5680));const r={id:"media-encoding",title:"Media Encoding"},l="Media Encoding",o={unversionedId:"digi-api/media-encoding",id:"digi-api/media-encoding",isDocsHomePage:!1,title:"Media Encoding",description:"Understand the different media formats that can be retrieved",source:"@site/docs/digi-api/media-encoding.mdx",sourceDirName:"digi-api",slug:"/digi-api/media-encoding",permalink:"/build/index.html/docs/digi-api/media-encoding",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/digi-api/media-encoding.mdx",version:"current",frontMatter:{id:"media-encoding",title:"Media Encoding"},sidebar:"api",previous:{title:"Query Formatting",permalink:"/build/index.html/docs/digi-api/query-formatting"},next:{title:"DiGi Dev Kit (DDK)",permalink:"/build/index.html/docs/digi-api/ddk"}},d=[{value:"Images &amp; GIFs",id:"images--gifs",children:[]},{value:"<strong>Videos</strong>",id:"videos",children:[]},{value:"Audio",id:"audio",children:[]},{value:"SVGs",id:"svgs",children:[]}],p={toc:d},g="wrapper";function u(e){let{components:i,...n}=e;return(0,t.yg)(g,(0,a.A)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"media-encoding"},"Media Encoding"),(0,t.yg)("h5",{id:"understand-the-different-media-formats-that-can-be-retrieved"},"Understand the different media formats that can be retrieved"),(0,t.yg)("hr",null),(0,t.yg)("p",null,"All images and videos have been encoded to enable a range of sizes to choose from.\nThis makes it easy to show a preview or thumbnail without having to show the original size."),(0,t.yg)("h2",{id:"images--gifs"},"Images & GIFs"),(0,t.yg)("p",null,"The following encoding types are supported for images/GIFs:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"THUMBNAIL"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Converts file to ",(0,t.yg)("inlineCode",{parentName:"li"},".webp")),(0,t.yg)("li",{parentName:"ul"},"Max size of 240px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"POSTER"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Converts file to ",(0,t.yg)("inlineCode",{parentName:"li"},".jpeg")),(0,t.yg)("li",{parentName:"ul"},"Max size of 602px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LARGE"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Converts file to ",(0,t.yg)("inlineCode",{parentName:"li"},".webp")),(0,t.yg)("li",{parentName:"ul"},"Max size of 8192px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ORIGINAL"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Does not apply any encoding (except if the image exceeds ",(0,t.yg)("inlineCode",{parentName:"li"},"LARGE")," width and height, then the ",(0,t.yg)("inlineCode",{parentName:"li"},"LARGE")," max size is applied)"),(0,t.yg)("li",{parentName:"ul"},"File format stays the same as what was uploaded")))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"videos"},(0,t.yg)("strong",{parentName:"h2"},"Videos")),(0,t.yg)("p",null,"The following encoding types are supported for videos:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"THUMBNAIL"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Max size of 240px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"POSTER"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Max size of 602px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PREVIEW"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Max size of 480px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LARGE"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Max height size of 2160px"),(0,t.yg)("li",{parentName:"ul"},"Max width size of 3840px"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ORIGINAL"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Does not apply any encoding (except if the video exceeds ",(0,t.yg)("inlineCode",{parentName:"li"},"LARGE")," width and height, then the ",(0,t.yg)("inlineCode",{parentName:"li"},"LARGE")," max size is applied)"),(0,t.yg)("li",{parentName:"ul"},"File format stays the same as what was uploaded")))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"audio"},"Audio"),(0,t.yg)("p",null,"The following encoding types are supported for audio:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"LARGE"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Converts the audio file to an ",(0,t.yg)("inlineCode",{parentName:"li"},".mp3")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ORIGINAL"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"File format stays the same as what was uploaded")))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"svgs"},"SVGs"),(0,t.yg)("p",null,"Currently, there is only SVG support for ",(0,t.yg)("inlineCode",{parentName:"p"},"ORIGINAL")," encoding type but will be expanding the options in the near future."))}u.isMDXComponent=!0}}]);