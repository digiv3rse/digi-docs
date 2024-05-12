"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[5695],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6157:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(8168),r=(t(6540),t(5680)),o=t(5944);const s={id:"governance",title:"Governance"},i=void 0,l={unversionedId:"smart-contracts/nouns-builder/governance",id:"smart-contracts/nouns-builder/governance",isDocsHomePage:!1,title:"Governance",description:"Creating a Proposal, Voting, and Vetoing",source:"@site/docs/smart-contracts/nouns-builder/governance.mdx",sourceDirName:"smart-contracts/nouns-builder",slug:"/smart-contracts/nouns-builder/governance",permalink:"/docs/smart-contracts/nouns-builder/governance",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/nouns-builder/governance.mdx",version:"current",frontMatter:{id:"governance",title:"Governance"},sidebar:"nounsbuilder",previous:{title:"Auctions",permalink:"/docs/smart-contracts/nouns-builder/auctions"},next:{title:"How to Create a DAO",permalink:"/docs/guides/builder-deployment"}},p=[{value:"Proposal Lifecycle:",id:"proposal-lifecycle",children:[]},{value:"Min and Max Values",id:"min-and-max-values",children:[]},{value:"Proposing",id:"proposing",children:[]},{value:"Voting",id:"voting",children:[]},{value:"Executing a Proposal",id:"executing-a-proposal",children:[]},{value:"Delegation",id:"delegation",children:[]},{value:"Vetoing",id:"vetoing",children:[]}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h5",{id:"creating-a-proposal-voting-and-vetoing"},"Creating a Proposal, Voting, and Vetoing"),(0,r.yg)("hr",null),(0,r.yg)("p",null,"The Governance contract is in charge of maintaining order within the DAO.\nIt keeps a record of proposals and votes.\nWhile the Treasury contract is in charge of holding DAO funds and executing transactions for passed proposals."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Proposal Threshold:")," Min ",(0,r.yg)("a",{parentName:"li",href:"https://www.investopedia.com/terms/b/basispoint.asp"},"BPS")," of total votes (NFTs) needed to put a proposal to a vote.\nFor example, if the Proposal Threshold is set to 100 BPS and there are 500 total NFTs minted then 5 NFTs need to approve the proposal for it to a vote."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Quorum Threshold:")," Min BPS of total ",(0,r.yg)("strong",{parentName:"li"},"For")," votes (NFTs) required for a proposal to pass"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Voting Delay:")," The amount of time before a proposal can start voting in seconds."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Voting Period:")," The duration for voting on a proposal in seconds."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Time Lock Delay:")," The amount of time a successful proposal must wait between being queued and executed.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"proposal-lifecycle"},"Proposal Lifecycle:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A proposal is submitted to the DAO on-chain by an address that owns enough NFTs to clear the Proposal Threshold."),(0,r.yg)("li",{parentName:"ul"},"The proposal can't be voted on until after the voting delay time has passed."),(0,r.yg)("li",{parentName:"ul"},"Once the delay period has passed, the proposal must then receive more ",(0,r.yg)("strong",{parentName:"li"},"For")," votes than ",(0,r.yg)("strong",{parentName:"li"},"Against")," and the number of ",(0,r.yg)("strong",{parentName:"li"},"For")," votes must meet or the Quorum Threshold."),(0,r.yg)("li",{parentName:"ul"},"Finally, if the voting period has finished and it has received enough ",(0,r.yg)("strong",{parentName:"li"},"For")," votes then the proposed transaction is queued for execution."),(0,r.yg)("li",{parentName:"ul"},"Then the proposal must pass the Time Lock Delay which defaults to 2 days."),(0,r.yg)("li",{parentName:"ul"},"Finally, once the time lock has ended the proposal is then executed.")),(0,r.yg)("img",{className:"guide-photos",src:o.A,alt:"proposal-lifecycle",width:"100%",height:"auto"}),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"min-and-max-values"},"Min and Max Values"),(0,r.yg)("p",null,"As a precaution, Nouns Builder has put guards in place to make sure that governance can't set voting parameters to unreasonable values.\nListed below are the min and max values possible for each governance parameter."),(0,r.yg)("h5",{id:"proposal-threshold"},"Proposal Threshold"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MIN_PROPOSAL_THRESHOLD_BPS:")," 1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MAX_PROPOSAL_THRESHOLD_BPS:")," 1000")),(0,r.yg)("h5",{id:"quorum-threshold"},"Quorum Threshold"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MIN_QUORUM_THRESHOLD_BPS:")," 200"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MAX_QUORUM_THRESHOLD_BPS:")," 2000  ")),(0,r.yg)("h5",{id:"voting-delay"},"Voting Delay"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MIN_VOTING_DELAY:")," 1 seconds"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MAX_VOTING_DELAY:")," 24 weeks")),(0,r.yg)("h5",{id:"voting-period"},"Voting Period"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MIN_VOTING_PERIOD:")," 10 minutes"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MAX_VOTING_PERIOD:")," 24 weeks")),(0,r.yg)("h2",{id:"proposing"},"Proposing"),(0,r.yg)("p",null,"Anyone can create a proposal, however, the proposal needs to have a certain number of NFTs backing it (Proposal Threshold) before it is put to a vote."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @param _targets The target addresses to call\n/// @param _values The ETH values of each call\n/// @param _calldatas The calldata of each call\n/// @param _description The proposal description\nfunction propose(\n    address[] memory _targets,\n    uint256[] memory _values,\n    bytes[] memory _calldatas,\n    string memory _description\n) external returns (bytes32)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"voting"},"Voting"),(0,r.yg)("p",null,"Once a proposal has received enough backing to surpass the Proposal Threshold and enough time has passed for the Voting Delay, then the voting process can begin.\nThere are different ways to cast a vote for a proposal."),(0,r.yg)("p",null,"Note, the Token contract checkpoints the timestamp every time the NFT is transferred.\nAs a result, an NFT is not able to vote on a proposal if it has been transferred after the proposal was created. "),(0,r.yg)("h4",{id:"castvote"},"castVote"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'/// @param _proposalId The proposal id\n/// @param _support The support value (0 = Against, 1 = For, 2 = Abstain)\nfunction castVote(bytes32 _proposalId, uint256 _support) external returns (uint256) {\n    return _castVote(_proposalId, msg.sender, _support, "");\n}\n')),(0,r.yg)("h4",{id:"castvotewithreason"},"castVoteWithReason"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Casts a vote with a reason\n/// @param _proposalId The proposal id\n/// @param _support The support value (0 = Against, 1 = For, 2 = Abstain)\n/// @param _reason The vote reason\nfunction castVoteWithReason(\n    bytes32 _proposalId,\n    uint256 _support,\n    string memory _reason\n) external returns (uint256)\n")),(0,r.yg)("h4",{id:"castvotebysig"},"castVoteBySig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Casts a signed vote\n/// @param _voter The voter address\n/// @param _proposalId The proposal id\n/// @param _support The support value (0 = Against, 1 = For, 2 = Abstain)\n/// @param _deadline The signature deadline\n/// @param _v The 129th byte and chain id of the signature\n/// @param _r The first 64 bytes of the signature\n/// @param _s Bytes 64-128 of the signature\nfunction castVoteBySig(\n    address _voter,\n    bytes32 _proposalId,\n    uint256 _support,\n    uint256 _deadline,\n    uint8 _v,\n    bytes32 _r,\n    bytes32 _s\n) external returns (uint256)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"executing-a-proposal"},"Executing a Proposal"),(0,r.yg)("p",null,"If a proposal has received a majority For vote and has passed the Quorum Threshold it can be executed on-chain.\nThe execute function is called on the Governance contract, but forwards the calldata to the Treasury contract."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @param _targets The target addresses to call\n/// @param _values The ETH values of each call\n/// @param _calldatas The calldata of each call\n/// @param _descriptionHash The hash of the description\n/// @param _proposer The proposal creator\nfunction execute(\n    address[] calldata _targets,\n    uint256[] calldata _values,\n    bytes[] calldata _calldatas,\n    bytes32 _descriptionHash,\n    address _proposer\n) external payable returns (bytes32)\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"delegation"},"Delegation"),(0,r.yg)("p",null,"The Token contract allows holders to be able to delegate their voting power to another address.\nNote, on transfer the Token contract resets all delegation records."),(0,r.yg)("h4",{id:"delegate"},"delegate"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Delegates votes to an account\n/// @param _to The address delegating votes to\nfunction delegate(address _to) external\n")),(0,r.yg)("h4",{id:"delegatebysig"},"delegateBySig"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Delegates votes from a signer to an account\n/// @param _from The address delegating votes from\n/// @param _to The address delegating votes to\n/// @param _deadline The signature deadline\n/// @param _v The 129th byte and chain id of the signature\n/// @param _r The first 64 bytes of the signature\n/// @param _s Bytes 64-128 of the signature\nfunction delegateBySig(\n    address _from,\n    address _to,\n    uint256 _deadline,\n    uint8 _v,\n    bytes32 _r,\n    bytes32 _s\n) external\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"vetoing"},"Vetoing"),(0,r.yg)("p",null,"Vetoing is an optional setting that can be configured by the founders when deploying.\nNote, veto power is encouraged due to the small number of votes (NFTs) at the beginning of a DAO.\nThe veto can later before removed by the founders once the NFTs have become sufficiently decentralized."),(0,r.yg)("h4",{id:"vetoing-proposal"},"Vetoing Proposal"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Vetoes a proposal\n/// @param _proposalId The proposal id\nfunction veto(bytes32 _proposalId) external\n")),(0,r.yg)("h4",{id:"updating-and-removing-veto"},"Updating and Removing Veto"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/// @notice Updates the vetoer\n/// @param newVetoer The new vetoer address\nfunction updateVetoer(address newVetoer) external;\n\n/// @notice Burns the vetoer\nfunction burnVetoer() external;\n")))}u.isMDXComponent=!0},5944:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/proposalLifecycle-a40c8e08746c7689cf4716b7f6dea77c.png"}}]);