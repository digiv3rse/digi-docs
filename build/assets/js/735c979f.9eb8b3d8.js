"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[3516],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8338:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={title:"Selling a Token"},o=void 0,l={unversionedId:"smart-contracts/creator-tools/Selling1155",id:"smart-contracts/creator-tools/Selling1155",isDocsHomePage:!1,title:"Selling a Token",description:"---",source:"@site/docs/smart-contracts/creator-tools/Selling1155.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/Selling1155",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Selling1155",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/Selling1155.mdx",version:"current",frontMatter:{title:"Selling a Token"},sidebar:"createtools",previous:{title:"Creating a Token",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Creating1155Token"},next:{title:"Minting Tokens",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Minting1155"}},s=[{value:"Fixed Price Sale",id:"fixed-price-sale",children:[]},{value:"Merkle Sale",id:"merkle-sale",children:[]},{value:"Royalty",id:"royalty",children:[]},{value:"Withdrawing Funds",id:"withdrawing-funds",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Once a token has been created, it can then be put up for sale.\nMinter strategy contracts are separate contracts that hold minting logic, but the main 1155 is called for minting.\nCheck out the ",(0,a.yg)("a",{parentName:"p",href:"./Minting1155"},"minting")," section to learn more about minters."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/1155-contracts/src/minters"},"Minter Strategy Code")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-deployments/addresses"},"Addresses"))),(0,a.yg)("p",null,"To create a sale you must use the ",(0,a.yg)("inlineCode",{parentName:"p"},"callSale")," function on the 1155 contract.\nThis will set the sale in the appropriate minter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function callSale(\n    uint256 tokenId,\n    IMinter1155 salesConfig, // Minter Strategy Contract\n    bytes memory data\n) \n")),(0,a.yg)("p",null,"The data that is passed into the minter is used to call the ",(0,a.yg)("inlineCode",{parentName:"p"},"setSale")," function.\nEach minter has a unique salesConfig. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function setSale(uint256 tokenId, SalesConfig memory salesConfig) \n")),(0,a.yg)("h3",{id:"fixed-price-sale"},"Fixed Price Sale"),(0,a.yg)("p",null,"Calling ",(0,a.yg)("inlineCode",{parentName:"p"},"callSale")," on an 1155 contract will create a sale for an NFT, but the ",(0,a.yg)("inlineCode",{parentName:"p"},"FIXED_PRICE_SALE_STRATEGY")," address must be specified."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"salesConfig")," for a fixed price is structured as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"struct SalesConfig {\n    uint64 saleStart; \n    uint64 saleEnd; \n    uint64 maxTokensPerAddress; \n    uint96 pricePerToken; // Price in Wei\n    address fundsRecipient; // Where to send the funds\n}\n")),(0,a.yg)("h3",{id:"merkle-sale"},"Merkle Sale"),(0,a.yg)("p",null,"Create a allow list sale with a Merkle proof."),(0,a.yg)("p",null,"Note, the price and the max mint amount per address are specified when creating the Merkle tree.\nThe Merkle sales config is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"struct MerkleSaleSettings {\n    uint64 presaleStart;\n    uint64 presaleEnd;\n    address fundsRecipient;\n    bytes32 merkleRoot;\n}\n")),(0,a.yg)("h2",{id:"royalty"},"Royalty"),(0,a.yg)("p",null,"Royalties are set on the main 1155 contract."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"royaltyBPS"),": The royalty amount in basis points for secondary sales."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"royaltyRecipient"),": The address that will receive the royalty payments.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"struct RoyaltyConfiguration {\n    uint32 royaltyMintSchedule;\n    uint32 royaltyBPS;\n    address royaltyRecipient;\n}\n")),(0,a.yg)("p",null,"This can be set at both the contract and token level."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function updateRoyaltiesForToken(\n    uint256 tokenId, \n    RoyaltyConfiguration memory newConfiguration\n)\n")),(0,a.yg)("h2",{id:"withdrawing-funds"},"Withdrawing Funds"),(0,a.yg)("p",null,"Admin can withdraw all funds to the ",(0,a.yg)("inlineCode",{parentName:"p"},"msg.sender"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function withdrawAll() public onlyAdminOrRole(CONTRACT_BASE_ID, PERMISSION_BIT_FUNDS_MANAGER)\n")),(0,a.yg)("p",null,"Admin can withdraw a certain amount to a specific address."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function withdrawCustom(\n    address recipient, \n    uint256 amounts\n) public onlyAdminOrRole(CONTRACT_BASE_ID, PERMISSION_BIT_FUNDS_MANAGER)\n")))}p.isMDXComponent=!0}}]);