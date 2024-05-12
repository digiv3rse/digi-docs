"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[1021],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1422:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o=n.p+"assets/images/deployingDAO-75156582fb425e34b5145b4910926134.png",i=n.p+"assets/images/initialDAO-5c31d5e0344f4406a3af57f6f406d528.png",s={id:"creating",title:"Creating a DAO"},c=void 0,l={unversionedId:"smart-contracts/nouns-builder/creating",id:"smart-contracts/nouns-builder/creating",isDocsHomePage:!1,title:"Creating a DAO",description:"Highlights the 3 Steps for Creating a DAO",source:"@site/docs/smart-contracts/nouns-builder/creating.mdx",sourceDirName:"smart-contracts/nouns-builder",slug:"/smart-contracts/nouns-builder/creating",permalink:"/docs/smart-contracts/nouns-builder/creating",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/nouns-builder/creating.mdx",version:"current",frontMatter:{id:"creating",title:"Creating a DAO"},sidebar:"nounsbuilder",previous:{title:"Image Configuration",permalink:"/docs/smart-contracts/nouns-builder/img-config"},next:{title:"Auctions",permalink:"/docs/smart-contracts/nouns-builder/auctions"}},u=[{value:"Deployment",id:"deployment",children:[]},{value:"Metadata Configuration",id:"metadata-configuration",children:[]},{value:"Starting",id:"starting",children:[]}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h5",{id:"highlights-the-3-steps-for-creating-a-dao"},"Highlights the 3 Steps for Creating a DAO"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Useful resources for creating a DAO:\n",(0,a.yg)("a",{parentName:"p",href:"https://nouns.build/"},"Interface")," | ",(0,a.yg)("a",{parentName:"p",href:"https://testnet.nouns.build"},"Testnet Interface")," | ",(0,a.yg)("a",{parentName:"p",href:"../../guides/builder-deployment"},"Deploy Guide")),(0,a.yg)("h2",{id:"deployment"},"Deployment"),(0,a.yg)("p",null,"First, the founder calls the Manager contract with all the selected settings to deploy the DAO contracts.\nThis deploys new contracts for each component of the DAO and has the owner set to the founder's address.\nIn this stage, the founders can edit the contracts directly and make any necessary changes before handing off control to the DAO."),(0,a.yg)("img",{className:"guide-photos",src:o,alt:"deploying-DAO",height:"350px"}),(0,a.yg)("hr",null),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"/// @notice Deploys a DAO with custom token, auction, and governance settings\n/// @param _founderParams The DAO founders\n/// @param _tokenParams The ERC-721 token settings\n/// @param _auctionParams The auction settings\n/// @param _govParams The governance settings\nfunction deploy(\n    FounderParams[] calldata _founderParams,\n    TokenParams calldata _tokenParams,\n    AuctionParams calldata _auctionParams,\n    GovParams calldata _govParams\n)\n")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"metadata-configuration"},"Metadata Configuration"),(0,a.yg)("p",null,"Next, a separate transaction is sent to the Metadata Render contract to store all the property values.\nThis way the Render contract knows all the possible properties and items when randomly generating the images for the DAO NFTs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"/// @notice Adds properties and/or items to be pseudo-randomly chosen from during token minting\n/// @param _names The names of the properties to add\n/// @param _items The items to add to each property\n/// @param _ipfsGroup The IPFS base URI and extension\nfunction addProperties(\n    string[] calldata _names,\n    ItemParam[] calldata _items,\n    IPFSGroup calldata _ipfsGroup\n) external onlyOwner\n")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"starting"},"Starting"),(0,a.yg)("p",null,"Finally, starting hands control over to the DAO by setting the Treasury contract as the owner and then starting the first auction."),(0,a.yg)("p",null,"The Treasury contract is set as the owner since it is the contract that executes transactions based on governance votes.\nOnce a DAO has been initialized the founders are no longer able to directly change the contracts and must have a proposal pass governance to do so."),(0,a.yg)("img",{className:"guide-photos",src:i,alt:"deploying-DAO",height:"350px"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"The DAO is initialized by calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"unpause()")," function on the Auction contract.\nCalling this function will start the first auction."))}g.isMDXComponent=!0}}]);