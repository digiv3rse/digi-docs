"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[2335],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2004:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const o={title:"Burn to Redeem"},i=void 0,l={unversionedId:"smart-contracts/creator-tools/B2R1155",id:"smart-contracts/creator-tools/B2R1155",isDocsHomePage:!1,title:"Burn to Redeem",description:"---",source:"@site/docs/smart-contracts/creator-tools/B2R1155.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/B2R1155",permalink:"/build/index.html/docs/smart-contracts/creator-tools/B2R1155",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/B2R1155.mdx",version:"current",frontMatter:{title:"Burn to Redeem"},sidebar:"createtools",previous:{title:"Permissions",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Permissions1155"},next:{title:"DiGiNFTCreator",permalink:"/build/index.html/docs/smart-contracts/creator-tools/DiGiNFTCreator"}},c=[{value:"Factory Contract",id:"factory-contract",children:[{value:"Checking if a Minter has been deployed",id:"checking-if-a-minter-has-been-deployed",children:[]},{value:"Deploying the Minter",id:"deploying-the-minter",children:[]}]},{value:"Redeem Minter",id:"redeem-minter",children:[{value:"Redeeming a Token",id:"redeeming-a-token",children:[]},{value:"Updating a Redemption",id:"updating-a-redemption",children:[]}]},{value:"Data Structures",id:"data-structures",children:[{value:"Redeem Instructions",id:"redeem-instructions",children:[]}]}],s={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Burn to redeem allows for a combination of token types to be burned to claim an 1155 token.\nFor example, a requirement could be burn ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," amount of a specific 721 and ",(0,a.yg)("inlineCode",{parentName:"p"},"y")," amount of a specific 1155 token to be able to mint an 1155 token."),(0,a.yg)("p",null,"Supported Burn Token Types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ERC-20 "),(0,a.yg)("li",{parentName:"ul"},"ERC-721"),(0,a.yg)("li",{parentName:"ul"},"ERC-1155")),(0,a.yg)("p",null,"Features: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Multi Token Types in a Single Redemption"),(0,a.yg)("li",{parentName:"ul"},"ETH Payment Option"),(0,a.yg)("li",{parentName:"ul"},"Supports Specific TokenId Ranges"),(0,a.yg)("li",{parentName:"ul"},"ETH Payments")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/1155-contracts/src/minters/redeem"},"Source Code")),(0,a.yg)("h2",{id:"factory-contract"},"Factory Contract"),(0,a.yg)("p",null,"For security reasons, each DiGi 1155 contract needs to have a unique burn to redeem minter deployed for it.\nMeaning, that the factory contract must be called to create a unique burn to redeem minter for each 1155 creator contract. "),(0,a.yg)("h3",{id:"checking-if-a-minter-has-been-deployed"},"Checking if a Minter has been deployed"),(0,a.yg)("p",null,"Before deploying a minter for an 1155, it is possible to check and see if one has been deployed or not by calling the contract. "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"getDeployedRedeemMinterForCreatorContract")," returns an ",(0,a.yg)("inlineCode",{parentName:"p"},"address")," based on if a B2R minter contract has been deployed for a specific 1155 contract.\nThe function will return error if no contract has been deployed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function getDeployedRedeemMinterForCreatorContract(\n    address _creatorContract \n) external view returns (address) \n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"doesRedeemMinterExistForCreatorContract")," returns a bool based on if a contract has been deployed when given the creator's 1155 contract address. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function doesRedeemMinterExistForCreatorContract(\n    address _creatorContract\n) public view returns (bool) \n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"predictMinterAddress")," returns the address that the b2r minter will be deployed to when given the creator's 1155 contract address. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function predictMinterAddress(\n    address _creatorContract\n) public view returns (address)\n")),(0,a.yg)("h3",{id:"deploying-the-minter"},"Deploying the Minter"),(0,a.yg)("p",null,"Deploying a minter is done by calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"callSale")," function on the 1155 contract."),(0,a.yg)("p",null,"The factory uses ",(0,a.yg)("inlineCode",{parentName:"p"},"CREATE2")," to generate the B2R contract addresses.\nThis means the address of the deployment can be known ahead of time by calling ",(0,a.yg)("inlineCode",{parentName:"p"},"predictMinterAddress")," with the 1155 address."),(0,a.yg)("p",null,"The following can be done in a single transaction using multi-call.\nThe data structure for ",(0,a.yg)("inlineCode",{parentName:"p"},"REDEEM_INSTRUCTIONS")," can be found ",(0,a.yg)("a",{parentName:"p",href:"./B2R1155#data-structures"},"here"),"."),(0,a.yg)("p",null,"Multi-call if the B2R contract hasn't been deployed, but 1155 contract has:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"setPermissions(REDEMPTION_MINTER_FACTORY, MINTER)"),": Give permission to the factory."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"callSale(REDEMPTION_MINTER_FACTORY, abi.encode(createMinter))"),": Use the callSale function on the 1155 contract.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"target.callSale(0, minterFactory, abi.encodeWithSelector(DiGiCreatorRedeemMinterFactoryImpl.createMinter.selector));")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"clearPermissions(REDEMPTION_MINTER_FACTORY, NONE)"),": Remove permission."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"setPermissions(REDEMPTION_MINTER_CONTRACT, MINTER)"),": Give permission to the minter."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"callSale(REDEMPTION_MINTER_CONTRACT, abi.encode(setRedeem, {REDEEM_INSTRUCTIONS})"),": Use callSale on the 1155 to set up a redemption.")),(0,a.yg)("br",null),(0,a.yg)("p",null,"Multi-call if the B2R contract has been deployed and already has minter permissions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"callSale(REDEMPTION_MINTER_CONTRACT, abi.encode(setRedeem, {REDEEM_INSTRUCTIONS})"))),(0,a.yg)("h2",{id:"redeem-minter"},"Redeem Minter"),(0,a.yg)("p",null,"Each 1155 contract must have its own deployed burn to redeem minter contract. "),(0,a.yg)("h3",{id:"redeeming-a-token"},"Redeeming a Token"),(0,a.yg)("p",null,"Before a token can be redeemed all the tokens that will be burned must be approved to the specific burn to redeem contract.\nOnce approved, then the user can call the ",(0,a.yg)("inlineCode",{parentName:"p"},"mint")," function on the 1155 contract to burn their tokens in exchange for the redeem token.\nThe data structure for the instructions and args can be found below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mint(\n    REDEMPTION_MINTER_CONTRACT, \n    tokenId, // Mint Token\n    quantity, // Mint Amount\n    abi.encode(\n        MINT_TO_ADDRESS, \n        REDEEM_INSTRUCTIONS, \n        REDEEM_ARGS\n    ))\n")),(0,a.yg)("h3",{id:"updating-a-redemption"},"Updating a Redemption"),(0,a.yg)("p",null,"There is no update function within the burn to redeem minter.\nThis means updating requires that a user clear their previous redeem and set a new one.\nNote, that the ",(0,a.yg)("inlineCode",{parentName:"p"},"clearRedeem")," function takes in a hash of the instructions. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"callSale(\n    REDEMPTION_MINTER_CONTRACT, \n    abi.encode(clearRedeem({REDEEM_INSTRUCTIONS_HASH}))\n)\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"callSale(\n    REDEMPTION_MINTER_CONTRACT, \n    abi.encode(setRedeem({REDEEM_INSTRUCTIONS}))\n)\n")),(0,a.yg)("h2",{id:"data-structures"},"Data Structures"),(0,a.yg)("h3",{id:"redeem-instructions"},"Redeem Instructions"),(0,a.yg)("p",null,"Instructions are set when the creator decides on the burn-to-redeem options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"enum RedeemTokenType {\n  NULL,\n  ERC721,\n  ERC1155,\n  ERC20,\n}\n\nenum DiGiCreatePermissions {\n  NONE = 0,\n  ADMIN = 2 ** 1,\n  MINTER = 2 ** 2,\n}\n\ntype RedeemInstruction = {\n  tokenType: RedeemTokenType\n  amount: BigNumber\n  tokenIdStart: BigNumber\n  tokenIdEnd: BigNumber\n  tokenContract: `0x${string}`\n  transferRecipient: `0x${string}`\n  burnFunction: `0x${string}`\n}\n\ntype RedeemMinterConfig = {\n  mintToken: {\n    tokenContract: `0x${string}`\n    tokenId: BigNumber\n    amount: BigNumber\n    tokenType: RedeemTokenType\n  }\n  instructions: RedeemInstruction[]\n  saleStart: BigNumber\n  saleEnd: BigNumber\n  ethAmount: BigNumber\n  ethRecipient: `0x${string}`\n}\n\n")))}p.isMDXComponent=!0}}]);