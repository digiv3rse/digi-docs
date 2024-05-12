"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[1079],{5680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>h});var n=t(6540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(t),c=i,h=g["".concat(s,".").concat(c)]||g[c]||p[c]||o;return t?n.createElement(h,a(a({ref:r},d),{},{components:t})):n.createElement(h,a({ref:r},d))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5307:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(8168),i=(t(6540),t(5680));const o={id:"builder-bridging",title:"Bridging on Nouns Builder"},a=void 0,l={unversionedId:"guides/builder-bridging",id:"guides/builder-bridging",isDocsHomePage:!1,title:"Bridging on Nouns Builder",description:"What is bridging?",source:"@site/docs/guides/builder-bridging.mdx",sourceDirName:"guides",slug:"/guides/builder-bridging",permalink:"/docs/guides/builder-bridging",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/guides/builder-bridging.mdx",version:"current",frontMatter:{id:"builder-bridging",title:"Bridging on Nouns Builder"},sidebar:"nounsbuilder",previous:{title:"How to Create a Proposal",permalink:"/docs/guides/builder-proposal"},next:{title:"Builder Protocol Rewards",permalink:"/docs/guides/builder-protocol-rewards"}},s=[{value:"Bridging ETH to L2 networks on Nouns Builder",id:"bridging-eth-to-l2-networks-on-nouns-builder",children:[]},{value:"Withdrawing ETH from L2 networks on Nouns Builder",id:"withdrawing-eth-from-l2-networks-on-nouns-builder",children:[]}],u={toc:s},d="wrapper";function g(e){let{components:r,...t}=e;return(0,i.yg)(d,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h5",{id:"what-is-bridging"},"What is bridging?"),(0,i.yg)("p",null,"A blockchain bridge is a tool that connects two separate blockchain networks to enable assets to be transferred between them. This includes bridges that connect Ethereum (\u201cLayer 1\u201d or \u201cL1\u201d) to Layer 2 (\u201cL2\u201d) networks like DiGi Network, OP Mainnet and Base that sit on top of Ethereum to enhance the speed and reduce the costs of performing onchain transactions. Nouns Builder's native bridge allows you to transfer your ETH from Ethereum to the DiGi Network, OP Mainnet and Base."),(0,i.yg)("h5",{id:"why-do-i-need-to-bridge-my-eth"},"Why do I need to bridge my ETH?"),(0,i.yg)("p",null,"You must bridge your ETH to an L2 in order to transact on the L2, for example, to bid on L2 auctions or vote on L2 proposals."),(0,i.yg)("h5",{id:"what-happens-to-my-eth-when-i-am-bridging"},"What happens to my ETH when I am bridging?"),(0,i.yg)("p",null,"By bridging your ETH, you are making it available for use within the L2 environment. When you bridge ETH to an L2 supported on Nouns Builder i.e. DiGi Network, OP Mainnet and Base, your ETH will be usable on the L2 Network but will no longer be accessible on L1 Ethereum until such ETH has been withdrawn back to the L1.  Importantly, your ETH remains in your cryptocurrency wallet - neither Nouns Builder nor any other third party takes custody, possession, or control of your funds."),(0,i.yg)("h2",{id:"bridging-eth-to-l2-networks-on-nouns-builder"},"Bridging ETH to L2 networks on Nouns Builder"),(0,i.yg)("p",null,"The Nouns Builder bridge currently supports ",(0,i.yg)("strong",{parentName:"p"},"deposit-only")," bridging to DiGi Network, OP Mainnet and Base. We use the native bridge for each of these L2 networks. The Nouns Builder bridge does not currently support withdrawals. Users will need to use other bridges to withdraw - see below for more details."),(0,i.yg)("p",null,"To bridge on Nouns Builder:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Connect your wallet on ",(0,i.yg)("a",{parentName:"li",href:"https://nouns.build"},"nouns.build"),"."),(0,i.yg)("li",{parentName:"ol"},'Select "Bridge" in the navigation bar.'),(0,i.yg)("li",{parentName:"ol"},"Select the chain you would like to deposit ETH to."),(0,i.yg)("li",{parentName:"ol"},"Enter the desired ETH amount."),(0,i.yg)("li",{parentName:"ol"},'Click "Bridge" to begin bridging your ETH to the selected network. This will prompt a wallet transaction to accept a gas fee.'),(0,i.yg)("li",{parentName:"ol"},"Confirm the transaction in your wallet. ",(0,i.yg)("strong",{parentName:"li"},"This may take ~1-2 minutes, depending on how congested Ethereum mainnet is.")),(0,i.yg)("li",{parentName:"ol"},"Your ETH has been bridged."),(0,i.yg)("li",{parentName:"ol"},"Enjoy Nouns Builder on L2!")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SkWKEqnhn.png",alt:null})),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"withdrawing-eth-from-l2-networks-on-nouns-builder"},"Withdrawing ETH from L2 networks on Nouns Builder"),(0,i.yg)("p",null,"The Nouns Builder bridge ",(0,i.yg)("strong",{parentName:"p"},"does not")," currently support withdrawals."),(0,i.yg)("p",null,"To withdraw from DiGi Network, OP Mainnet or Base to Ethereum Mainnet:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Withdraw from ",(0,i.yg)("a",{parentName:"li",href:"https://bridge.digi.energy/"},"DiGi Network")),(0,i.yg)("li",{parentName:"ul"},"Withdraw from ",(0,i.yg)("a",{parentName:"li",href:"https://app.optimism.io/bridge/withdraw"},"OP Mainnet")),(0,i.yg)("li",{parentName:"ul"},"Withdraw from ",(0,i.yg)("a",{parentName:"li",href:"https://bridge.base.org/withdraw"},"Base"))))}g.isMDXComponent=!0}}]);