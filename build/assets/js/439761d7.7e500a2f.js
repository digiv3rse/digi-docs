"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[2804],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>h});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=t,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return r?a.createElement(h,s(s({ref:n},d),{},{components:r})):a.createElement(h,s({ref:n},d))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4049:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(8168),t=(r(6540),r(5680));const o={id:"v3-approvals",title:"Approve Tokens to DiGi",sidebar_position:1},s=void 0,i={unversionedId:"guides/v3-approvals",id:"guides/v3-approvals",isDocsHomePage:!1,title:"Approve Tokens to DiGi",description:"Learn the first steps to getting started building with DIGI",source:"@site/docs/guides/v3-approvals.mdx",sourceDirName:"guides",slug:"/guides/v3-approvals",permalink:"/build/index.html/docs/guides/v3-approvals",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/guides/v3-approvals.mdx",version:"current",sidebarPosition:1,frontMatter:{id:"v3-approvals",title:"Approve Tokens to DiGi",sidebar_position:1}},l=[{value:"Required Approvals",id:"required-approvals",children:[]},{value:"Initial Code Setup",id:"initial-code-setup",children:[]},{value:"Approving a Transfer Helper",id:"approving-a-transfer-helper",children:[]},{value:"Approving Modules in the Module Manager",id:"approving-modules-in-the-module-manager",children:[]},{value:"Revoking Access",id:"revoking-access",children:[]}],p={toc:l},d="wrapper";function c(e){let{components:n,...o}=e;return(0,t.yg)(d,(0,a.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h5",{id:"learn-the-first-steps-to-getting-started-building-with-digi"},"Learn the first steps to getting started building with DIGI"),(0,t.yg)("hr",null),(0,t.yg)("p",null,"DIGI V3 provides different types of market functionality that allows anyone to get started building with NFTs.\nHowever, before being able to interact with specific functionality certain approvals must be granted to DIGI."),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"digiv3diagram",src:r(1363).A})),(0,t.yg)("p",null,"V3 consists of a few core contracts and an ever-expanding set of modules.\nModules are non-upgradable contracts that provide specific functionality.\nThe DIGI core contracts include ",(0,t.yg)("strong",{parentName:"p"},"Token Transfer Helpers")," and the ",(0,t.yg)("strong",{parentName:"p"},"Module Manager"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Transfer Helper:")," Handles transferring ERC-20 and ERC-721 tokens for the modules"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Module Manager:")," Manages which modules a user has approved to use their tokens")),(0,t.yg)("h3",{id:"required-approvals"},"Required Approvals"),(0,t.yg)("p",null,"Before interacting with specific modules, there are a few approval steps that are required.\nFirst, any assets that are going to be moved by DIGI must have their respective Transfer Helper approved to the token contract.\nFor example, if you would like to sell an NFT, the ERC-721 Transfer Helper address must be approved to the NFT contract as an operator.\nSecond, once the assets have been approved to the Transfer Helpers, the necessary modules must be approved in the Module Manager by the user."),(0,t.yg)("h5",{id:"approval-steps"},"Approval Steps"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Approve Tokens to the Transfer Helpers"),(0,t.yg)("li",{parentName:"ol"},"Approve Modules in the Module Manager")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"initial-code-setup"},"Initial Code Setup"),(0,t.yg)("p",null,"The following code examples will walk you through how to approve both Transfer Helpers and the Module Manager.\nThis first section will show you how to get set up to interact with the DIGI contracts using the ",(0,t.yg)("inlineCode",{parentName:"p"},"ethers")," js library."),(0,t.yg)("p",null,"The ABIs for all DIGI V3 contracts can be found in the ",(0,t.yg)("inlineCode",{parentName:"p"},"@digiv3rse/v3")," npm package.\nYou can use the following 2 packages to import the ABIs and typechain types (if using typescript):"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"yarn add @digiv3rse/v3 ethers")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"npm install @digiv3rse/v3 ethers")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'import { ethers } from "ethers";\nimport mainnetDiGiAddresses from "@digiv3rse/v3/dist/addresses/1.json"; // Mainnet addresses, 5.json would be Goerli Testnet \nimport { IERC721__factory } from "@digiv3rse/v3/dist/typechain/factories/IERC721__factory";\nimport { IERC20__factory } from "@digiv3rse/v3/dist/typechain/factories/IERC20__factory";\nimport { DiGiModuleManager__factory } from "@digiv3rse/v3/dist/typechain/factories/DiGiModuleManager__factory";\n\n// This should be an ethers.js signer instance: \n// You can get the signer from a wallet using web3modal/rainbowkit/blocknative wallet etc.\n// See: https://docs.ethers.io/v5/api/signer/\nconst provider = new ethers.providers.Web3Provider(web3.currentProvider, 1);\nconst signer = await provider.getSigner();\nconst moduleManagerAddress = mainnetDiGiAddresses.DiGiModuleManager;\nconst ownerAddress = "0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00"; // Owner of the assets\n\n// Initialize NFT demo contract\nconst nftContractAddress = "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"; // Blitmap NFT Contract\nconst erc721Contract = IERC721__factory.connect(nftContractAddress, signer);\n\n// Initialize ERC20 currency demo contract\nconst erc20ContractAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC token address\nconst erc20Contract = IERC20__factory.connect(erc20ContractAddress, signer);\n\n// Initialize DiGi V3 Module Manager contract \nconst moduleManagerContract = DiGiModuleManager__factory.connect(mainnetDiGiAddresses.DiGiModuleManager, signer);\n')),(0,t.yg)("h5",{id:"different-networks"},"Different Networks"),(0,t.yg)("p",null,"Note these examples use ",(0,t.yg)("inlineCode",{parentName:"p"},"Mainnet"),", but if you would like to test on ",(0,t.yg)("inlineCode",{parentName:"p"},"Goerli")," then you can update the ",(0,t.yg)("inlineCode",{parentName:"p"},"networkId")," in the import to be ",(0,t.yg)("inlineCode",{parentName:"p"},"5")," to get the ",(0,t.yg)("inlineCode",{parentName:"p"},"Goerli")," addresses."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"@digiv3rse/v3/dist/addresses/1.json")," change to ",(0,t.yg)("inlineCode",{parentName:"p"},"@digiv3rse/v3/dist/addresses/5.json")," "),(0,t.yg)("p",null,"You can also get ",(0,t.yg)("inlineCode",{parentName:"p"},"Goerli")," ETH at the faucet ",(0,t.yg)("a",{parentName:"p",href:"https://faucet.paradigm.xyz/"},"here"),", ",(0,t.yg)("a",{parentName:"p",href:"https://goerlifaucet.com/"},"here")," or ",(0,t.yg)("a",{parentName:"p",href:"https://faucet.chainstack.com/goerli-faucet"},"here"),"."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"approving-a-transfer-helper"},"Approving a Transfer Helper"),(0,t.yg)("p",null,"Tokens must first be approved to the correct Transfer Helper before being able to be used by DIGI V3.\nA token approval to the DIGI Transfer Helpers will ",(0,t.yg)("strong",{parentName:"p"},"only ever need to be done once per token contract per user address"),".\nOnce a token is approved to the Transfer Helper it can then be used by any approved V3 module.\nIn addition, each module only ever needs to be approved once per user address."),(0,t.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"If a user is trying to make a purchase with ",(0,t.yg)("strong",{parentName:"p"},"just ETH")," then they don't need to approve Transfer Helpers or DIGI modules."))),(0,t.yg)("h5",{id:"erc-721-tokens"},"ERC-721 Tokens"),(0,t.yg)("p",null,"DIGI V3 requires that the ERC-721 Transfer Helper has been approved as an operator to be able to move the NFT.\nFirst, check if the ERC-721 Transfer Helper can access the NFTs for the user's address.\nThen submit a transaction calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"setApprovalForAll")," to approve all NFTs if not already approved."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Read Function\nfunction isApprovedForAll(address _owner, address _operator) \n\n// Write Function\nfunction setApprovalForAll(address _operator, bool _approved)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const erc721TransferHelperAddress = mainnetDiGiAddresses.ERC721TransferHelper;\nconst approved = await erc721Contract.isApprovedForAll(\n  ownerAddress, // NFT owner address\n  erc721TransferHelperAddress // V3 Module Transfer Helper to approve\n);\n\n// If the approval is not already granted, add it.\nif (approved === false) {\n// Notice: Since this interaction submits a transaction to the blockchain it requires an ethers signer.\n// A signer interfaces with a wallet. You can use walletconnect or injected web3.\n  await erc721Contract.setApprovalForAll(erc721TransferHelperAddress, true);\n}\n")),(0,t.yg)("h5",{id:"erc-20"},"ERC-20"),(0,t.yg)("p",null,"If an NFT is priced in an ERC-20 token then the user will first need to approve their tokens to the ERC-20 Transfer Helper.\nYou can check the user's allowance to the DIGI Transfer Helper by calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"allowance")," function and then set the approved amount by calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"approve")," function.\nNote that DIGI is compatible with any ERC-20."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Read Function\nfunction allowance(address _owner, address _spender) \n\n// Write Function\nfunction approve(address _spender, uint256 _amount)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'const erc20TransferHelperAddress = mainnetDiGiAddresses.ERC20TransferHelper;\nconst approvedAmount = await erc20Contract.allowance(ownerAddress, erc20TransferHelperAddress);\nconst infiniteApprovalAmount = ethers.constants.MaxUint256; // Inifite approval is used here but any amount can be specified\n\nif (approvedAmount === "0") {\n    await erc20Contract.approve(ownerAddress, erc20TransferHelperAddress, infiniteApprovalAmount);\n}\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"approving-modules-in-the-module-manager"},"Approving Modules in the Module Manager"),(0,t.yg)("p",null,"Once all the necessary tokens have been approved to the correct Transfer Helpers,\nthe user will then need to submit a transaction to allow specific DIGI modules to have access to their assets.\nFor example, if a user would like to sell an NFT via the ",(0,t.yg)("inlineCode",{parentName:"p"},"Asks v1.1 Module")," they will need to approve that module in the Module Manager for the ",(0,t.yg)("inlineCode",{parentName:"p"},"Asks 1.1 Module")," to be able to transfer the NFT in the event of a sale."),(0,t.yg)("h5",{id:"single-module"},"Single Module"),(0,t.yg)("p",null,"A user can approve a single module by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"setApprovalForModule")," with the address of the module they would like to approve and a boolean."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Read Function\nfunction isModuleApproved(address _user, address _module) // Read Only Function\n\n// Write Function\nfunction setApprovalForModule(address _module, bool _approved)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"// Approving Asks v1.1\nconst approved = await moduleManagerContract.isModuleApproved(ownerAddress, mainnetDiGiAddresses.AsksV1_1);\n\nif (approved === false) {\n    await moduleManagerContract.setApprovalForModule(mainnetDiGiAddresses.AsksV1_1, true);\n}\n")),(0,t.yg)("h5",{id:"multiple-modules"},"Multiple Modules"),(0,t.yg)("p",null,"In addition, a user can batch approve modules in a single transaction by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"setBatchApprovalForModules")," and passing in an array of module addresses with a boolean."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"// Write Function\nfunction setBatchApprovalForModules(address[] _modules, bool _approved)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"// Approving Asks v1.1 and Offers v1.0\nconst digiModuleAddresses = [mainnetDiGiAddresses.AsksV1_1, mainnetDiGiAddresses.OffersV1];\nawait moduleManagerContract.setBatchApprovalForModules(\n    digiModuleAddresses, \n    true\n);\n")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"revoking-access"},"Revoking Access"),(0,t.yg)("p",null,"At some point, a user might want to revoke DIGI's ability to access their assets.\nApprovals to DIGI can be revoked at any time and there are two ways to do it."),(0,t.yg)("h4",{id:"revoking-transfer-helper"},"Revoking Transfer Helper"),(0,t.yg)("p",null,"By revoking access to the Transfer Helper you will remove the ability for all DIGI modules to be able to move the asset."),(0,t.yg)("h5",{id:"erc-721"},"ERC-721"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const approved = await erc721Contract.isApprovedForAll(ownerAddress, erc721TransferHelperAddress);\nif (approved === true) {\n    await erc721Contract.setApprovalForAll(erc721TransferHelperAddress, false);\n}\n")),(0,t.yg)("h5",{id:"erc-20-1"},"ERC-20"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},'const approvedAmount = await erc20Contract.allowance(ownerAddress, erc721TransferHelperAddress);\nif (approvedAmount !== "0") {\n    await erc20Contract.approve(ownerAddress, erc721TransferHelperAddress, "0");\n}\n')),(0,t.yg)("h4",{id:"revoking-module-manager"},"Revoking Module Manager"),(0,t.yg)("p",null,"If you would like the DIGI Transfer Helpers to still have access to your assets,\nbut you would like to restrict certain modules you can either revoke a single module or batch revoke."),(0,t.yg)("h5",{id:"single-module-1"},"Single Module"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const approved = await moduleManagerContract.isModuleApproved(ownerAddress, mainnetDiGiAddresses.AsksV1_1);\nif (approved === true) {\n    await moduleManagerContract.setApprovalForModule(mainnetDiGiAddresses.AsksV1_1, false);\n}\n")),(0,t.yg)("h5",{id:"multiple-modules-1"},"Multiple Modules"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-javascript"},"const digiModuleAddresses = [mainnetDiGiAddresses.AsksV1_1, mainnetDiGiAddresses.OffersV1]; // Asks v1.1 and Offers v1.0\nawait moduleManagerContract.setBatchApprovalForModules(\n    digiModuleAddresses, \n    false\n);\n")),(0,t.yg)("hr",null),(0,t.yg)("p",null,"Now that you have learned how to approve and revoke tokens to DIGI you are ready to begin interacting with the different DIGI V3 Modules.\nYou can get started learning about how to sell an NFT ",(0,t.yg)("a",{parentName:"p",href:"./sell-nft-fixed-price"},"here"),"."))}c.isMDXComponent=!0},1363:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/digi_v3_diagram-944a6c24495690a49682540a84527d55.png"}}]);