"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[3356],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),y=a,g=p["".concat(c,".").concat(y)]||p[y]||m[y]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},649:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(8168),a=(r(6540),r(5680)),i=r(8365);const o={},l=void 0,c={unversionedId:"smart-contracts/creator-tools/DiGiNFTCreator",id:"smart-contracts/creator-tools/DiGiNFTCreator",isDocsHomePage:!1,title:"DiGiNFTCreator",description:"A factory that deploys new NFT contracts",source:"@site/docs/smart-contracts/creator-tools/DiGiNFTCreator.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/DiGiNFTCreator",permalink:"/build/index.html/docs/smart-contracts/creator-tools/DiGiNFTCreator",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/DiGiNFTCreator.mdx",version:"current",frontMatter:{},sidebar:"createtools",previous:{title:"Burn to Redeem",permalink:"/build/index.html/docs/smart-contracts/creator-tools/B2R1155"},next:{title:"ERC721Drop",permalink:"/build/index.html/docs/smart-contracts/creator-tools/ERC721Drop"}},d=[{value:"Edition vs Drop",id:"edition-vs-drop",children:[]},{value:"Global Variables",id:"global-variables",children:[]},{value:"Creating an NFT Contract",id:"creating-an-nft-contract",children:[{value:"createEditionWithReferral",id:"createeditionwithreferral",children:[]},{value:"createDropWithReferral",id:"createdropwithreferral",children:[]}]}],s={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h5",{id:"a-factory-that-deploys-new-nft-contracts"},"A factory that deploys new NFT contracts"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"This contract is in charge of deploying new NFT contracts.\nThe factory references an ",(0,a.yg)("inlineCode",{parentName:"p"},"implementation")," contract and clones it to give it it's own unique address."),(0,a.yg)("p",null,"View the contract code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-drops-contracts/blob/main/src/DiGiNFTCreatorV1.sol"},"here")," and the list of deployed addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-drops-contracts/tree/main/deployments"},"here"),"."),(0,a.yg)("h2",{id:"edition-vs-drop"},"Edition vs Drop"),(0,a.yg)("p",null,"This contract can be used to create either ",(0,a.yg)("inlineCode",{parentName:"p"},"Editions")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Drops"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Editions"),": All the NFTs share the same media asset."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Drops"),": All the NFTs have individual pieces of media.")),(0,a.yg)("p",null,"Platforms have the ability to earn some of the protocol rewards for helping creators deploy their smart contracts."),(0,a.yg)("img",{className:"guide-photos",src:i.A,alt:"proposal-lifecycle",width:"100%"}),(0,a.yg)("h2",{id:"global-variables"},"Global Variables"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"implementation"),": An NFT contract used for cloning."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"editionMetadataRenderer"),": A contract for rendering editions metadata."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dropMetadataRenderer"),": A contract for rendering drops.")),(0,a.yg)("h2",{id:"creating-an-nft-contract"},"Creating an NFT Contract"),(0,a.yg)("h3",{id:"createeditionwithreferral"},"createEditionWithReferral"),(0,a.yg)("p",null,"Creates a new edition contract with a deterministic address.\nNote, not all of these fields can be changed after creating the contract."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": Name of the edition contract (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"symbol"),": Symbol of the edition contract (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"defaultAdmin"),": Default admin address (contract sets the owner to this address by default)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"editionSize"),": Total size of the edition (number of possible editions)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"royaltyBPS"),": BPS amount of royalty (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fundsRecipient"),": Recipient for sales and royalties"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"description"),": Metadata: Description of the edition entry"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"animationURI"),": Metadata: Animation url (optional) of the edition entry"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"imageURI"),": Metadata: Image url (semi-required) of the edition entry"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"createReferral"),": Protocol reward for the platform that helped the creator deploy the NFT contract")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function createEditionWithReferral(\n    string memory name,\n    string memory symbol,\n    uint64 editionSize,\n    uint16 royaltyBPS,\n    address payable fundsRecipient,\n    address defaultAdmin,\n    IERC721Drop.SalesConfiguration memory saleConfig,\n    string memory description,\n    string memory animationURI,\n    string memory imageURI,\n    address createReferral\n) \n")),(0,a.yg)("h3",{id:"createdropwithreferral"},"createDropWithReferral"),(0,a.yg)("p",null,"Creates a new drop contract with a deterministic address.\nNote, not all of these fields can be changed after creating the contract."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": Name for new contract (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"symbol"),": Symbol for new contract (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"defaultAdmin"),": Default admin address (contract sets the owner to this address by default)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"editionSize"),": The max size of the media contract allowed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"royaltyBPS"),": BPS for on-chain royalties (cannot be changed)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fundsRecipient"),": Recipient for sales and royalties"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"metadataURIBase"),": URI Base for metadata"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"metadataContractURI"),": URI for ",(0,a.yg)("a",{parentName:"li",href:"https://docs.opensea.io/docs/contract-level-metadata"},"contract metadata")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"createReferral"),": Protocol reward for the platform that helped the creator deploy the NFT contract")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function createDropWithReferral(\n    string memory name,\n    string memory symbol,\n    address defaultAdmin,\n    uint64 editionSize,\n    uint16 royaltyBPS,\n    address payable fundsRecipient,\n    IERC721Drop.SalesConfiguration memory saleConfig,\n    string memory metadataURIBase,\n    string memory metadataContractURI,\n    address createReferral\n) \n")))}m.isMDXComponent=!0},8365:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/EvD-2180eb44dce3101735ce2716feb43979.png"}}]);