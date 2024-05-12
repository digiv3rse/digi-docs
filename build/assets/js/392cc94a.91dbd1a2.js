"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[1059],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,y=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4650:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(8168),o=(t(6540),t(5680));const i={title:"Permissions"},a=void 0,s={unversionedId:"smart-contracts/creator-tools/Permissions1155",id:"smart-contracts/creator-tools/Permissions1155",isDocsHomePage:!1,title:"Permissions",description:"---",source:"@site/docs/smart-contracts/creator-tools/Permissions1155.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/Permissions1155",permalink:"/docs/smart-contracts/creator-tools/Permissions1155",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/Permissions1155.mdx",version:"current",frontMatter:{title:"Permissions"},sidebar:"createtools",previous:{title:"Minting Tokens",permalink:"/docs/smart-contracts/creator-tools/Minting1155"},next:{title:"Burn to Redeem",permalink:"/docs/smart-contracts/creator-tools/B2R1155"}},l=[{value:"Admin and Minter Role",id:"admin-and-minter-role",children:[]},{value:"Assigning Mint Access",id:"assigning-mint-access",children:[]},{value:"Checking for Admin or Role",id:"checking-for-admin-or-role",children:[]},{value:"Contract Level Permissions",id:"contract-level-permissions",children:[{value:"Setting the Owner",id:"setting-the-owner",children:[]},{value:"Setting a Contract Role",id:"setting-a-contract-role",children:[]}]},{value:"Token Level Permissions",id:"token-level-permissions",children:[]},{value:"Removing a Role",id:"removing-a-role",children:[]},{value:"Updating Royalties",id:"updating-royalties",children:[]}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/main/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L329"},"View Source Code")),(0,o.yg)("h2",{id:"admin-and-minter-role"},"Admin and Minter Role"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Admin"),": Can update sales, airdrop tokens, metadata, and withdraw ETH"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Minter"),": Can mint and airdrop tokens")),(0,o.yg)("h2",{id:"assigning-mint-access"},"Assigning Mint Access"),(0,o.yg)("p",null,"By giving an address mint access it will be able to mint NFTs from the contract.\nHowever, this means different sales strategies can be created for the contract and given access to manage minting.\nThe minter role can be granted at either the contract or token level."),(0,o.yg)("p",null,"The roles are stored at different bit amounts."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"uint256 PERMISSION_BIT_ADMIN = 2**1;\nuint256 PERMISSION_BIT_MINTER = 2**2;\n")),(0,o.yg)("p",null,"Note, contract metadata and other settings are stored at tokenId 0.\nTo specify an update for the contract level, tokenId 0 can be used instead of an individual token."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"uint256 CONTRACT_BASE_ID = 0;\n\n")),(0,o.yg)("h2",{id:"checking-for-admin-or-role"},"Checking for Admin or Role"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"isAdminOrRole")," checks if an address either has a minter role for a token or if they are the admin.\nPassing in tokenId 0 will return the role for the contract level. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function isAdminOrRole(\n    address user,\n    uint256 tokenId,\n    uint256 role // Optional for admin checking\n)\n")),(0,o.yg)("h2",{id:"contract-level-permissions"},"Contract Level Permissions"),(0,o.yg)("h3",{id:"setting-the-owner"},"Setting the Owner"),(0,o.yg)("p",null,"Set the owner of the contract.\nThis function can only be called by the contract admin.\nOwner is set to the ",(0,o.yg)("inlineCode",{parentName:"p"},"defaultAdmin")," when the contract is created."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function setOwner(address newOwner) external onlyAdmin(CONTRACT_BASE_ID)\n")),(0,o.yg)("h3",{id:"setting-a-contract-role"},"Setting a Contract Role"),(0,o.yg)("p",null,"For granting permission at the contract level, 0 is passed in as the tokenId\nOnly an admin can add an address as a role.\nBy default, both the DiGi minters have the contract level minter role in the contract."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function addPermission(\n    uint256 tokenId, // tokenId 0 for contract level\n    address user,\n    uint256 permissionBits\n) external onlyAdmin(tokenId)\n")),(0,o.yg)("h2",{id:"token-level-permissions"},"Token Level Permissions"),(0,o.yg)("p",null,"Add a role to a user for a specific token."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function addPermission(\n    uint256 tokenId,\n    address user,\n    uint256 permissionBits\n) external onlyAdmin(tokenId)\n")),(0,o.yg)("h2",{id:"removing-a-role"},"Removing a Role"),(0,o.yg)("p",null,"Remove a role from a user for a token or the contract (tokenId 0)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function removePermission(\n    uint256 tokenId,\n    address user,\n    uint256 permissionBits\n) external onlyAdmin(tokenId)\n")),(0,o.yg)("h2",{id:"updating-royalties"},"Updating Royalties"),(0,o.yg)("p",null,"Updates the royalty configuration for a token or the contract (tokenId 0)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function updateRoyaltiesForToken(\n    uint256 tokenId, \n    RoyaltyConfiguration memory newConfiguration\n)\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"royaltyMintSchedule"),": 1/N tokens are minted to the royalty recipient"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"royaltyBPS"),": The royalty amount in basis points for secondary sales."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"royaltyRecipient"),": The address that will receive the royalty payments.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"struct RoyaltyConfiguration {\n    uint32 royaltyMintSchedule;\n    uint32 royaltyBPS;\n    address royaltyRecipient;\n}\n")))}m.isMDXComponent=!0}}]);