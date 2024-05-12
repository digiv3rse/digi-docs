"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[7244],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return r?o.createElement(u,i(i({ref:t},p),{},{components:r})):o.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[g]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5926:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(8168),n=(r(6540),r(5680));const a={title:"Protocol SDK"},i=void 0,c={unversionedId:"smart-contracts/creator-tools/ProtocolSDK",id:"smart-contracts/creator-tools/ProtocolSDK",isDocsHomePage:!1,title:"Protocol SDK",description:"Get started building with the DiGi smart contracts",source:"@site/docs/smart-contracts/creator-tools/ProtocolSDK.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/ProtocolSDK",permalink:"/build/index.html/docs/smart-contracts/creator-tools/ProtocolSDK",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/ProtocolSDK.mdx",version:"current",frontMatter:{title:"Protocol SDK"},sidebar:"createtools",previous:{title:"Introduction",permalink:"/build/index.html/docs/smart-contracts/creator-tools/intro"},next:{title:"Factory Addresses",permalink:"/build/index.html/docs/smart-contracts/creator-tools/factories"}},l=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Code Examples",id:"code-examples",children:[]}],s={toc:l},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h5",{id:"get-started-building-with-the-digi-smart-contracts"},"Get started building with the DiGi smart contracts"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"The Protocol SDK makes interacting with the DIGI protocol easier by generating required transactions for our contracts."),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Mint existing 1155 NFTs and gasless NFTs"),(0,n.yg)("li",{parentName:"ol"},"Deploy new contracts and create new tokens"),(0,n.yg)("li",{parentName:"ol"},"Creating a token for free (gasless creation)"),(0,n.yg)("li",{parentName:"ol"},"Minting a token that was created for free (bringing it onchain)")),(0,n.yg)("h3",{id:"installation"},"Installation"),(0,n.yg)("p",null,"The SDK is written in typescript and can be installed via ",(0,n.yg)("inlineCode",{parentName:"p"},"npm"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"yarn"),", etc.\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-sdk"},"Source Code")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"npm install @digiv3rse/protocol-sdk\n")),(0,n.yg)("h3",{id:"code-examples"},"Code Examples"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-sdk#creating-a-mint-from-an-on-chain-contract"},"Minting an 1155 token")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-sdk#creating-an-1155-contract"},"Deploying a new 1155 contract with a token")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-sdk#creating-a-premint"},"Minting a token for free (gasless creation)")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-sdk#executing-a-premint"},"Bringing a Gasless NFT onchain and minting"))))}g.isMDXComponent=!0}}]);