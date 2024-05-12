"use strict";(self.webpackChunkdigi_docusaurus_v_1=self.webpackChunkdigi_docusaurus_v_1||[]).push([[2518],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,u=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(u,s(s({ref:t},g),{},{components:n})):a.createElement(u,s({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7775:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const i={title:"Events for Indexing and Integration Overview"},s="DIGI Smart Contracts Event-based Overview",o={unversionedId:"smart-contracts/creator-tools/events",id:"smart-contracts/creator-tools/events",isDocsHomePage:!1,title:"Events for Indexing and Integration Overview",description:"DiGi 1155 Contracts",source:"@site/docs/smart-contracts/creator-tools/events.mdx",sourceDirName:"smart-contracts/creator-tools",slug:"/smart-contracts/creator-tools/events",permalink:"/build/index.html/docs/smart-contracts/creator-tools/events",editUrl:"https://github.com/digiv3rse/digi-docs/blob/main/docs/smart-contracts/creator-tools/events.mdx",version:"current",frontMatter:{title:"Events for Indexing and Integration Overview"},sidebar:"createtools",previous:{title:"Protocol Rewards",permalink:"/build/index.html/docs/smart-contracts/creator-tools/rewards"},next:{title:"Creating a Contract",permalink:"/build/index.html/docs/smart-contracts/creator-tools/Deploy1155Contract"}},l=[{value:"DiGi 1155 Contracts",id:"digi-1155-contracts",children:[{value:"Creating a New Token",id:"creating-a-new-token",children:[]},{value:"Setting a Price",id:"setting-a-price",children:[]},{value:"Purchasing / Collecting a Token",id:"purchasing--collecting-a-token",children:[]},{value:"Mint Comments",id:"mint-comments",children:[]},{value:"Permissions",id:"permissions",children:[]}]},{value:"721 Events",id:"721-events",children:[{value:"Creating a new Token",id:"creating-a-new-token-1",children:[]}]},{value:"Protocol Rewards",id:"protocol-rewards",children:[]}],d={toc:l},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"digi-smart-contracts-event-based-overview"},"DIGI Smart Contracts Event-based Overview"),(0,r.yg)("h2",{id:"digi-1155-contracts"},"DiGi 1155 Contracts"),(0,r.yg)("h3",{id:"creating-a-new-token"},"Creating a New Token"),(0,r.yg)("p",null,"When a user creates a new token, the parameters expected are maxSupply and URI. maxSupply is the immutable maximum number of NFTs that can be made for this token and the URI is possible to change but the initial URL representing the token."),(0,r.yg)("p",null,"Now that we have both gasless and on-chain minting the token creation event arguments are slightly different to determine the originating user of the mint."),(0,r.yg)("p",null,"Creating new tokens can happen with a call to either ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/HEAD/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L260"},(0,r.yg)("inlineCode",{parentName:"a"},"setupNewToken()"))," or ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/f58ee955e6b50c13e90b4cfd72ab4b68dce86fad/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L765"},(0,r.yg)("inlineCode",{parentName:"a"},"delegateSetupNewToken()"))," (used by the gasless creation mint flow)."),(0,r.yg)("p",null,"Be aware that often creating a new token and minting often occur in the ",(0,r.yg)("em",{parentName:"p"},"same")," transaction."),(0,r.yg)("p",null,"It is also possible to setup a new token without a mint event."),(0,r.yg)("p",null,"Any time a new token is setup this event is emitted, however, the sender field is not the actual creator and is the premint executor contract in a gasless setting."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"emit UpdatedToken(address sender, uint256 tokenId, TokenData {\n    string uri,\n    uint256 maxSupply,\n})\n")),(0,r.yg)("p",null,"Read the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-creator-subgraph/blob/HEAD/src/ERC1155Mappings/templates/DiGiCreator1155ImplMappings.ts#L403"},"subgraph handler")," for this action."),(0,r.yg)("p",null,"The standard 1155 ",(0,r.yg)("inlineCode",{parentName:"p"},"URI")," event is also emitted when the token is setup when provided with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event URI(string uri, uint256 tokenId)\n// Emitted in DiGiCreator1155Impl:306\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"CreatorAttribution")," event is emitted only when bringing a token onchain. The creator of the token in this case is the ",(0,r.yg)("inlineCode",{parentName:"p"},"creator")," field of the event. This is part of a ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-7015"},"draft ERC standard"),"."),(0,r.yg)("p",null,"If necessary, this field can be verified by extracting the signer of the ",(0,r.yg)("inlineCode",{parentName:"p"},"signature")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"structHash"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"// this is what attributes this token to have been created by the original creator\nevent CreatorAttribution(bytes32 structHash, string domainName, string version, address creator, bytes signature);\n// Emitted in `DiGiCreator1155Impl:781`\n")),(0,r.yg)("h3",{id:"setting-a-price"},"Setting a Price"),(0,r.yg)("h4",{id:"events-emitted"},"Events Emitted:"),(0,r.yg)("p",null,"Minting a token can occur via different ",(0,r.yg)("inlineCode",{parentName:"p"},"SalesConfiguration")," contracts which are given ",(0,r.yg)("inlineCode",{parentName:"p"},"Minter")," roles on the 1155 contracts to setup a mint."),(0,r.yg)("p",null,"Sales configurations are linked to contracts via ",(0,r.yg)("inlineCode",{parentName:"p"},"Permissions")," with the ",(0,r.yg)("inlineCode",{parentName:"p"},"Minter")," role."),(0,r.yg)("p",null,"You can determine which contract is a sales configuration contract by their ",(0,r.yg)("inlineCode",{parentName:"p"},"contractName"),"."),(0,r.yg)("p",null,"The most common ",(0,r.yg)("inlineCode",{parentName:"p"},"SalesConfiguration")," is a ",(0,r.yg)("inlineCode",{parentName:"p"},"FixedPriceSaleStrategy"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"factory")," contracts include getters for ",(0,r.yg)("inlineCode",{parentName:"p"},"fixedPriceMinter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"merkleMinter")," which are the two digi-supported sales methods but users can add their own as well."),(0,r.yg)("p",null,"We index known sales configuration contracts for ",(0,r.yg)("inlineCode",{parentName:"p"},"SaleSet")," events."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event SaleSet(address indexed mediaContract, uint256 indexed tokenId, SalesConfig {\n    /// @notice Unix timestamp for the sale start\n    uint64 saleStart;\n    /// @notice Unix timestamp for the sale end\n    uint64 saleEnd;\n    /// @notice Max tokens that can be minted for an address, 0 if unlimited\n    uint64 maxTokensPerAddress;\n    /// @notice Price per token in eth wei\n    uint96 pricePerToken;\n    /// @notice Funds recipient (0 if no different funds recipient than the contract global)\n    address fundsRecipient;\n} salesConfig);\n")),(0,r.yg)("h4",{id:"how-to-call"},"How to call:"),(0,r.yg)("p",null,"These settings are set via the ",(0,r.yg)("inlineCode",{parentName:"p"},"callSale")," argument which sets the caller context for security purposes to be the calling contract and does the required permissions checks:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"function callSale(uint256 tokenId, IMinter1155 minterModule, bytes calldata data);\n")),(0,r.yg)("p",null,"For example, you would setup a fixed price nft sale in solidity for token id ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," using:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"DiGi1155(nftContract).callSale(1, FIXED_PRICE_SALE_STRATEGY, abi.encodeWithSelector(FixedPriceSaleStrategy.setSale(1, SalesConfig({\n    saleStart: 0,\n    saleEnd: 1735711271, // new years 2025\n    maxTokensPerAddress: 0, // unlimited\n    pricePerToken: 0 ether,\n    fundsRecipient: address(0) // set to contract\n}))));\n")),(0,r.yg)("p",null,"Note that the ",(0,r.yg)("inlineCode",{parentName:"p"},"FIXED_PRICE_SALE_STRATEGY")," would need to have ",(0,r.yg)("inlineCode",{parentName:"p"},"Minter")," permissions either on the whole contract (token id ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),") or on the individual token (token id ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),")."),(0,r.yg)("h3",{id:"purchasing--collecting-a-token"},"Purchasing / Collecting a Token"),(0,r.yg)("h4",{id:"mint-events-emitted"},"Mint Events Emitted:"),(0,r.yg)("p",null,"When a user purchases a token the primary event emitted is the ",(0,r.yg)("inlineCode",{parentName:"p"},"Purchased")," event:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event Purchased(address sender, address minterModule, uint256 tokenId, uint256 quantity, uint256 amount);\n")),(0,r.yg)("p",null,"The amount includes both the price and the mint fee."),(0,r.yg)("p",null,"The other events emitted on a purchase are the standard 1155 transfer events:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)\n")),(0,r.yg)("p",null,"If the user wishes to include a ",(0,r.yg)("inlineCode",{parentName:"p"},"MintComment"),", an MintComment event is emitted in the same transaction from the ",(0,r.yg)("inlineCode",{parentName:"p"},"FixedPriceSaleStrategy"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event MintComment(address indexed sender, address indexed tokenContract, uint256 indexed tokenId, uint256 quantity, string comment);\n")),(0,r.yg)("h4",{id:"calling-the-mint-function"},"Calling the Mint Function:"),(0,r.yg)("p",null,"Purchasing a token should be called via:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"function mintWithRewards(\n    IMinter1155 minter,\n    uint256 tokenId,\n    uint256 quantity,\n    bytes calldata minterArguments,\n    address mintReferral\n)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The first argument is the minter module which can be found via looking at permissions or the subgraph."),(0,r.yg)("li",{parentName:"ul"},"The second argument is the desired ",(0,r.yg)("inlineCode",{parentName:"li"},"tokenId")," and the ",(0,r.yg)("inlineCode",{parentName:"li"},"quantity"),"."),(0,r.yg)("li",{parentName:"ul"},"Sales information can be found by querying the subgraph or the fixed price minter's ",(0,r.yg)("inlineCode",{parentName:"li"},"function sale(address tokenContract, uint256 tokenId) returns (SalesConfig memory)"),"."),(0,r.yg)("li",{parentName:"ul"},"MinterArguments for fixed price minter are ",(0,r.yg)("inlineCode",{parentName:"li"},"abi.encode(address (tokenMintRecipient))"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"abi.encode(address (tokenMintRecipient), string (mintComment))")," if you wish to add a MintComment."),(0,r.yg)("li",{parentName:"ul"},"The mintReferral argument is the DiGi Rewards referral address.")),(0,r.yg)("p",null,"All of these arguments are handled if using the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.digiv3rse.xyz/docs/smart-contracts/creator-tools/ProtocolSDK"},"Protocol SDK"),"."),(0,r.yg)("h3",{id:"mint-comments"},"Mint Comments"),(0,r.yg)("p",null,"Mint comments are optional strings emitted on the ",(0,r.yg)("inlineCode",{parentName:"p"},"FixedPriceSaleStrategy"),". Read the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-creator-subgraph/blob/HEAD/src/ERC721Mappings/templates/ERC721DropMappings.ts#L344"},"subgraph handler"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event MintComment(address indexed sender, address indexed tokenContract, uint256 indexed tokenId, uint256 quantity, string comment);\n")),(0,r.yg)("h3",{id:"permissions"},"Permissions"),(0,r.yg)("p",null,"When permissions are changed the ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdatedPermissions")," event is emitted."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event UpdatedPermissions(uint256 indexed tokenId, address indexed user, uint256 indexed permissions);\n")),(0,r.yg)("p",null,"Global permissions are assigned to token id 0, and individual token permissions are assigned to the token.\nBy default, the user that creates a token is given admin permissions on that token."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Permission"),(0,r.yg)("th",{parentName:"tr",align:null},"Bits"),(0,r.yg)("th",{parentName:"tr",align:null},"Numeric"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Admin"),(0,r.yg)("td",{parentName:"tr",align:null},"2^1"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Allows for all functionality and for managing permissions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Minter"),(0,r.yg)("td",{parentName:"tr",align:null},"2^2"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Allows to mint existing tokens")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sales"),(0,r.yg)("td",{parentName:"tr",align:null},"2^3"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Allows for updating pricing and sales information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Metadata"),(0,r.yg)("td",{parentName:"tr",align:null},"2^4"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"Allows for updating token metadata and information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Funds Manager"),(0,r.yg)("td",{parentName:"tr",align:null},"2^5"),(0,r.yg)("td",{parentName:"tr",align:null},"32"),(0,r.yg)("td",{parentName:"tr",align:null},"Allows for withdrawing funds and setting the funds withdraw address")))),(0,r.yg)("p",null,"Permissions can be added via ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/HEAD/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L330"},(0,r.yg)("inlineCode",{parentName:"a"},"addPermission(uint256 tokenId, address user, uint256 permissions)"))," and removed via ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-protocol/blob/HEAD/packages/1155-contracts/src/nft/DiGiCreator1155Impl.sol#L338"},(0,r.yg)("inlineCode",{parentName:"a"},"function removePermission(uint256 tokenId, address user, uint256 permissionBits)")),"."),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-creator-subgraph/blob/HEAD/src/ERC1155Mappings/templates/DiGiCreator1155ImplMappings.ts#L118"},"subgraph handler"),"."),(0,r.yg)("h2",{id:"721-events"},"721 Events"),(0,r.yg)("h3",{id:"creating-a-new-token-1"},"Creating a new Token"),(0,r.yg)("p",null,"721 Contracts share both metadata as either a series of metadata or shared edition metadata."),(0,r.yg)("p",null,"They also have the same sales settings across the contract unlike 1155 tokens."),(0,r.yg)("p",null,"New tokens are created by calling the DiGiNFTCreatorV1 proxy contract."),(0,r.yg)("p",null,"Once the contract is created, if the sale is active users can purchase tokens."),(0,r.yg)("p",null,"We also support a ",(0,r.yg)("inlineCode",{parentName:"p"},"multicall")," pattern with the ",(0,r.yg)("inlineCode",{parentName:"p"},"setupCalls")," argument where the factory is granted temporary admin permissions to execute multiple commands on the contract after deployment allowing for setting additional settings or minting upon deployment."),(0,r.yg)("h4",{id:"creating-an-edition"},"Creating an Edition:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"function createEditionWithReferral(\n    string memory name,\n    string memory symbol,\n    address defaultAdmin,\n    uint64 editionSize,\n    uint16 royaltyBPS,\n    address payable fundsRecipient,\n    bytes[] memory setupCalls,\n    IMetadataRenderer metadataRenderer,\n    bytes memory metadataInitializer,\n    address createReferral\n)\n")),(0,r.yg)("h4",{id:"creating-a-drop"},"Creating a Drop:"),(0,r.yg)("p",null,"Event Emitted when a drop is created from the factory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"event CreatedDrop(address indexed creator, address indexed editionContractAddress, uint256 editionSize)\n")),(0,r.yg)("p",null,"This is emitted by the ",(0,r.yg)("inlineCode",{parentName:"p"},"DiGiNFTCreatorV1")," factory contract."),(0,r.yg)("h5",{id:"setting-a-price-1"},"Setting a Price"),(0,r.yg)("p",null,"Event emitted with Sales Configuration Setup:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"event SalesConfigChanged(address indexed changedBy);\n")),(0,r.yg)("p",null,"After this event is emitted, the contract sales information can be queried and stored. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/digiv3rse/digi-creator-subgraph/blob/HEAD/src/ERC721Mappings/templates/ERC721DropMappings.ts#L56"},"subgraph implementation"),"."),(0,r.yg)("h5",{id:"collecting-a-token"},"Collecting a Token"),(0,r.yg)("p",null,"First, sales information can be retrieved by calling ",(0,r.yg)("inlineCode",{parentName:"p"},"salesConfig()")," on the 721 contract which returns all of the presale (allowlist), and public sale (standard purchase) configuration."),(0,r.yg)("p",null,"After this call, the ",(0,r.yg)("inlineCode",{parentName:"p"},"function mintWithRewards(address recipient, uint256 quantity, string calldata comment, address mintReferral)")," function can be called."),(0,r.yg)("p",null,"The mint fee can be queried from ",(0,r.yg)("inlineCode",{parentName:"p"},"digiFeeForAmount(uint256 amount) returns (address, uint256 fee)")," which returns the total mint fee for a given amount."),(0,r.yg)("p",null,"The value sent is ",(0,r.yg)("inlineCode",{parentName:"p"},"pricePerToken * numberOfTokens + mintFee"),"."),(0,r.yg)("p",null,"This emits:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"event IERC721Drop.Sale(\n    address recipient,\n    uint256 quantity,\n    uint256 pricePerToken,\n    uint256 firstPurchasedTokenId\n);\n")),(0,r.yg)("p",null,"and if salesComment is not unset (in solidity, is not an empty string) ",(0,r.yg)("inlineCode",{parentName:"p"},"''"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"event IERC721Drop.MintComment(\n    address sender, // Address sending the mint\n    address tokenContract, // Current NFT contract\n    uint256 tokenId,\n    uint256 quantity,\n    string comment\n);\n")),(0,r.yg)("h2",{id:"protocol-rewards"},"Protocol Rewards"),(0,r.yg)("p",null,"DiGi protocol rewards power rewards for both the 721 and 1155 contracts."),(0,r.yg)("p",null,"The contracts include a shared solidity library to calculate the fees and call a shared hyperstructure to escrow and store the deposits for users to deposit."),(0,r.yg)("p",null,"This allows us to have the gas savings and security of a model where users retrieve funds from the contract rather than push payments where payments are sent to them while also making it easy for users to retrieve all their rewards in one place."),(0,r.yg)("p",null,"Protocol Reward events for a free and a paid mint vary."),(0,r.yg)("p",null,"Since the logic is in the NFT itself, upgrading the NFT can change the deposit behavior below."),(0,r.yg)("p",null,"This is an example of how our NFT contracts behave for the current version."),(0,r.yg)("p",null,"Users need to opt-into new versions with different fee payment amounts by upgrading."),(0,r.yg)("h4",{id:"free-mint"},"Free Mint"),(0,r.yg)("p",null,"The below event is emitted from the DiGiRewards contract when a deposit is received from a free mint:"),(0,r.yg)("p",null,"Example Event:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"RewardsDeposit(\n    // This is the address of the token creator\n    address indexed creator,\n    // This is the address of the referral for the token creation\n    address indexed createReferral,\n    // This is the address of the referral of the mint\n    address indexed mintReferral,\n    // This is the address of the user that brought the token onchain\n    address firstMinter,\n    // This is the address of the digi multisig\n    address digi,\n    // This is the address of the smart contract depositing the reward\n    address from,\n    // This is the amount going to the `creator` address above.\n    uint256 creatorReward,\n    // This amount is currently 0.000333 ETH for a free mint\n    // This is the amount going to the `createReferral` address above.\n    // This amount is currently 0.000111 ETH\n    uint256 createReferralReward,\n    // This is the amount going to the `mintReferral` address above.\n    // This amount is currently 0.000111 ETH\n    uint256 mintReferralReward,\n    // This is the amount going to the `firstMinter` address above.\n    // This amount is currently 0.000111 ETH\n    uint256 firstMinterReward,\n    // This is the amount going to the `digi` address above.\n    // This amount is currently 0.000111 ETH\n    uint256 digiReward\n)\n")),(0,r.yg)("h4",{id:"paid-mint"},"Paid Mint"),(0,r.yg)("p",null,"The below event is emitted from the DiGiRewards contract when a deposit is received from a paid mint:"),(0,r.yg)("p",null,"Example Event:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sol"},"RewardsDeposit(\n    // This is the address of the token creator\n    address indexed creator,\n    // This is the address of the referral for the token creation\n    address indexed createReferral,\n    // This is the address of the referral of the mint\n    address indexed mintReferral,\n    // This is the address of the user that brought the token onchain\n    address firstMinter,\n    // This is the address of the digi multisig\n    address digi,\n    // This is the address of the smart contract depositing the reward\n    address from,\n    // This is the amount going to the `creator` address above.\n    uint256 creatorReward,\n    // This amount is currently 0 ETH for a paid mint\n    // This is the amount going to the `createReferral` address above.\n    // This amount is currently 0.000222 ETH\n    uint256 createReferralReward,\n    // This is the amount going to the `mintReferral` address above.\n    // This amount is currently 0.000222 ETH\n    uint256 mintReferralReward,\n    // This is the amount going to the `firstMinter` address above.\n    // This amount is currently 0.000111 ETH\n    uint256 firstMinterReward,\n    // This is the amount going to the `digi` address above.\n    // This amount is currently 0.000222 ETH\n    uint256 digiReward\n)\n")))}c.isMDXComponent=!0}}]);