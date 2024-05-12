"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[7906],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var i=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,y=d["".concat(s,".").concat(g)]||d[g]||c[g]||n;return r?i.createElement(y,l(l({ref:t},p),{},{components:r})):i.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3051:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=r(8168),a=(r(6540),r(5680));const n={},l="Bug Bounty Program",o={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Bug Bounty Program",description:"---",source:"@site/docs/security.mdx",sourceDirName:".",slug:"/security",permalink:"/build/index.html/docs/security",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/security.mdx",version:"current",frontMatter:{},sidebar:"introduction",previous:{title:"Introduction",permalink:"/build/index.html/docs/intro"}},s=[{value:"Security at DiGi",id:"security-at-digi",children:[]},{value:"Report Submission Guidelines",id:"report-submission-guidelines",children:[]},{value:"Bug Bounty Rewards",id:"bug-bounty-rewards",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Out of scope vulnerabilities",id:"out-of-scope-vulnerabilities",children:[]},{value:"Program Rules",id:"program-rules",children:[]},{value:"Disclosure Policy",id:"disclosure-policy",children:[]}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,i.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bug-bounty-program"},"Bug Bounty Program"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"security-at-digi"},"Security at DiGi"),(0,a.yg)("p",null,"At DiGi, we prioritize the safety and security for all of our users and community members. We encourage and appreciate any feedback from our community to help us identify and promptly address any potential vulnerabilities in our product. "),(0,a.yg)("h3",{id:"report-submission-guidelines"},"Report Submission Guidelines"),(0,a.yg)("p",null,"To submit your report, please send an email to ",(0,a.yg)("a",{parentName:"p",href:"mailto:security@digiv3rse.xyz"},"security@digiv3rse.xyz")," and include the following details:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Provide a clear description of the issue, highlighting its potential impact."),(0,a.yg)("li",{parentName:"ul"},"Specify the location where the vulnerability was identified."),(0,a.yg)("li",{parentName:"ul"},"Steps to reproduce (Add details for how we can reproduce the issue)."),(0,a.yg)("li",{parentName:"ul"},"Include any proof-of-concept code or supporting materials.")),(0,a.yg)("p",null,"Upon receipt of your report, a member of our security team will confirm and begin an investigation into the reported issue. We are committed to providing you with regular updates on the progress of your report. Should further information or clarification be necessary, we will reach out to you."),(0,a.yg)("h3",{id:"bug-bounty-rewards"},"Bug Bounty Rewards"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rewards of up to $40,000 for any ",(0,a.yg)("strong",{parentName:"li"},"critical")," bugs that could result in loss of funds."),(0,a.yg)("li",{parentName:"ul"},"Rewards may be awarded for smaller bugs or improvements that are classified as valid. This will depend on the following considerations; the exploit scenario, product found in, likelihood and impact.")),(0,a.yg)("h3",{id:"scope"},"Scope"),(0,a.yg)("p",null,"Assets listed below are considered in-scope and are eligible submissions within the bug bounty program. If you believe you have found a vulnerability in an area not specified in the table, please report it to the team and a member of our security team will investigate it further. "),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Asset"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Scope"),(0,a.yg)("th",{parentName:"tr",align:null},"Eligible Reward"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://digiv3rse.xyz/create"},"digiv3rse.xyz/create")," ",(0,a.yg)("br",null)," digiv3rse.xyz/collect/","[chain]",":","[contract address]",(0,a.yg)("br",null)," digiv3rse.xyz/","[profile address]"),(0,a.yg)("td",{parentName:"tr",align:null},"Website and Applications"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $10,000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://api.digiv3rse.xyz"},"api.digiv3rse.xyz")),(0,a.yg)("td",{parentName:"tr",align:null},"Website and Applications"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $2000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"digi.energy",(0,a.yg)("br",null),"- ",(0,a.yg)("a",{parentName:"td",href:"https://bridge.digi.energy/"},"https://bridge.digi.energy/")),(0,a.yg)("td",{parentName:"tr",align:null},"Website and Applications"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $10,000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://docs.digiv3rse.xyz"},"docs.digiv3rse.xyz")),(0,a.yg)("td",{parentName:"tr",align:null},"Website and Applications"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $5000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://github.com/digiv3rse/digi-protocol"},"https://github.com/digiv3rse/digi-protocol")),(0,a.yg)("td",{parentName:"tr",align:null},"Smart Contract"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $40,000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://github.com/digiv3rse/digi-drops-contracts"},"https://github.com/digiv3rse/digi-drops-contracts")),(0,a.yg)("td",{parentName:"tr",align:null},"Smart Contract"),(0,a.yg)("td",{parentName:"tr",align:null},"In scope"),(0,a.yg)("td",{parentName:"tr",align:null},"Up to $40,000")))),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Please note: All bounty rewards will be denoted as USD and will be paid out as USDC. Rewards will require the recipient to have an erc20 wallet address. KYC verification is required and will be specifically requested in cases of valid reports that meet the criteria for a reward payout.")),(0,a.yg)("h3",{id:"out-of-scope-vulnerabilities"},"Out of scope vulnerabilities"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Any activity that could lead to the disruption of our service (DDOS/DOS)."),(0,a.yg)("li",{parentName:"ul"},"Vulnerabilities that require physical access to a user's device."),(0,a.yg)("li",{parentName:"ul"},"Clickjacking on pages with no sensitive actions."),(0,a.yg)("li",{parentName:"ul"},"Attacks requiring leaked keys or credentials."),(0,a.yg)("li",{parentName:"ul"},"Self-XSS reports will not be accepted."),(0,a.yg)("li",{parentName:"ul"},"Lack of Secure/HTTPOnly flags on non-sensitive Cookies."),(0,a.yg)("li",{parentName:"ul"},"Missing or incorrect SPF and/or DMARC records of any kind."),(0,a.yg)("li",{parentName:"ul"},"Theoretical attacks without proof of exploitability.")),(0,a.yg)("h3",{id:"program-rules"},"Program Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Social engineering targeted to DiGi employees is prohibited."),(0,a.yg)("li",{parentName:"ul"},"Publishing sensitive information discovered during security testing is prohibited."),(0,a.yg)("li",{parentName:"ul"},"Only submit one vulnerability per report."),(0,a.yg)("li",{parentName:"ul"},"Vulnerabilities that DiGi is aware of will not be rewarded."),(0,a.yg)("li",{parentName:"ul"},"Please provide thorough reports with clear steps that can be replicated. If the report lacks sufficient detail to reproduce the issue, it may not be accepted."),(0,a.yg)("li",{parentName:"ul"},"When duplicates occur, we will only accept the first report that was received, as long as it fulfills our submission criteria and can be fully reproduced.")),(0,a.yg)("h3",{id:"disclosure-policy"},"Disclosure Policy"),(0,a.yg)("p",null,"To ensure responsible handling of vulnerability disclosures, it is crucial to keep all discussions of such vulnerabilities (even those that have already been resolved) within the program and not disclose them externally within 90 days of remediation or without DiGi's express approval. Failure to comply with the Disclosure Policy will result in forfeiture of any eligible reward. Be confident that you are adhering to this policy and contributing to the safety and integrity of the program."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Updated as of February 2024")))}d.isMDXComponent=!0}}]);