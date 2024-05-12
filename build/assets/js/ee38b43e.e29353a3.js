"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[9382],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7790:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));const a={title:"Minting Tokens"},o=void 0,l={unversionedId:"smart-contracts/creator-tools/Minting1155",id:"smart-contracts/creator-tools/Minting1155",isDocsHomePage:!1,title:"Minting Tokens",description:"---",source:"@site/docs/smart-contracts/creator-tools/Minting1155.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/Minting1155",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Minting1155",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/Minting1155.mdx",version:"current",frontMatter:{title:"Minting Tokens"},sidebar:"createtools",previous:{title:"Selling a Token",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Selling1155"},next:{title:"Permissions",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Permissions1155"}},s=[{value:"DiGi Mint Fee",id:"digi-mint-fee",children:[]},{value:"Mint Function with Rewards",id:"mint-function-with-rewards",children:[]},{value:"Minter Strategy Contracts",id:"minter-strategy-contracts",children:[{value:"Fixed Price Strategy",id:"fixed-price-strategy",children:[]},{value:"Merkle Proof Strategy",id:"merkle-proof-strategy",children:[]}]},{value:"Admin Minting",id:"admin-minting",children:[]}],c={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/main/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L426"},"View Source Code")),(0,i.yg)("h2",{id:"digi-mint-fee"},"DiGi Mint Fee"),(0,i.yg)("p",null,"DiGi charges a small fee for minting an NFT.\nThere is no charge to the creator, all the funds from the sales go to the creator.\nLastly, the mint fee doesn't apply to admin minted NFT (airdropping)."),(0,i.yg)("p",null,"The best way to find the mint fee for a specific contract is to retrieve it from the contract by calling the ",(0,i.yg)("inlineCode",{parentName:"p"},"mintFee")," function.\nYou can read more about the DiGi mint fee ",(0,i.yg)("a",{parentName:"p",href:"https://support.digiv3rse.xyz/en/articles/4981037-digi-mint-fees"},"here"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"function mintFee() external view returns (uint256)")),(0,i.yg)("h2",{id:"mint-function-with-rewards"},"Mint Function with Rewards"),(0,i.yg)("p",null,"Referring a mint and passing it in as the ",(0,i.yg)("inlineCode",{parentName:"p"},"mintReferral")," with give a reward to the person or platform that refers the mint.\nView the rewards section for more information."),(0,i.yg)("p",null,"Purchase tokens given a minter contract and minter arguments"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"minter"),": The minter contract to use"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"tokenId"),": The token ID to purchase"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"quantity"),": The quantity of tokens to purchase"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"minterArguments"),": The arguments to pass to the minter (detail in the minters section)")),(0,i.yg)("p",null,"*The minter arguments are different for each minter contract and are listed in the section."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"function mintWithRewards(\n    IMinter1155 minter,\n    uint256 tokenId,\n    uint256 quantity,\n    bytes calldata minterArguments,\n    address mintReferral\n) external payable nonReentrant \n")),(0,i.yg)("h2",{id:"minter-strategy-contracts"},"Minter Strategy Contracts"),(0,i.yg)("p",null,"The minting logic for DiGi 1155's lives outside of the main 1155 contract.\nIt lives in separate contracts called minters.\nTo mint a token the ",(0,i.yg)("inlineCode",{parentName:"p"},"mint")," function is called on the main 1155 contract and then minter checks if the user should be able to mint.\nThen the minter tells the main 1155 contract if it should mint or not."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/1155-contracts/src/minters"},"Minters Code")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/digiv3rse/digi-protocol/tree/main/packages/protocol-deployments/addresses"},"Deployed Addresses"))),(0,i.yg)("p",null,"*Note, that the minter arguments are type ",(0,i.yg)("inlineCode",{parentName:"p"},"bytes")),(0,i.yg)("h3",{id:"fixed-price-strategy"},"Fixed Price Strategy"),(0,i.yg)("p",null,"Mint NFTs for a specific ETH price. "),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ETH transaction value = ((price + DiGi mint fee) * amount)")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"minterArguments"),": User address to mint to, in bytes"),(0,i.yg)("p",null,"*Note, the payment amount of ETH must be set an override if using wagmi or ethers.js. "),(0,i.yg)("h4",{id:"getting-the-mint-price"},"Getting the Mint Price"),(0,i.yg)("p",null,"Calling the ",(0,i.yg)("inlineCode",{parentName:"p"},"sale")," function on the fixed-price minter will return the price for a specific token.\n",(0,i.yg)("inlineCode",{parentName:"p"},"function sale(address tokenContract, uint256 tokenId) ")," "),(0,i.yg)("h3",{id:"merkle-proof-strategy"},"Merkle Proof Strategy"),(0,i.yg)("p",null,"Mints tokens based on a merkle tree."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ETH transaction value = ((price + DiGi mint fee) * amount)")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"minterArguments"),": Address to mint to, Max quantity, Price per token, Merkle proof"),(0,i.yg)("h2",{id:"admin-minting"},"Admin Minting"),(0,i.yg)("p",null,"Admins can mint NFTs to addresses. These NFTs ",(0,i.yg)("strong",{parentName:"p"},"do not")," incur the DiGi mint fee."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"function adminMint(\n    address recipient, \n    uint256 tokenId, \n    uint256 quantity, \n    bytes memory data\n) external onlyAdminOrRole(tokenId, PERMISSION_BIT_MINTER)\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"function adminMintBatch(\n    address recipient, \n    uint256[] memory tokenIds, \n    uint256[] memory quantities, \n    bytes memory data\n) public nonReentrant\n")))}p.isMDXComponent=!0}}]);