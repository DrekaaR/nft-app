import chainIcon from "assets/images/icons/chains/eth.svg";
import collectionImage from "assets/images/pages/collections/01.gif";
import collectionLogo from "assets/images/pages/collections/still-alive.png";
import collectionVideo from "assets/videos/collections/01.mp4";
import collectionVideo2 from "assets/videos/collections/02.mp4";

export const collections = [
   {
      id: 1,
      name: "choppers",
      author: "StillAlive",
      image: collectionImage,
      date: "October 2022",
      supply: "3x100 NFTs",
      chain: {
         name: "Ethereum",
         icon: chainIcon,
      },
      price: {
         nfoClaim: false,
         value: 100,
      },
      socials: {
         instagram: null,
         tickTok: null,
         twitter: "https://twitter.com/M_Fareniuk",
      },
      logo: collectionLogo,
      background: {
         video: collectionVideo,
         loopVideo: collectionVideo2,
         image: null,
      },
      openseaLink:
         "https://opensea.io/collection/nfofinal?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Origin%20collection&search[stringTraits][0][values][0]=Choppers",
      text: [
         "STILLALIVE is Vintage & Custom studio created for people who perfectly know how to express & introduce themselves to the world. STILLALIVE conveys your genuine personality.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
      ],
   },
   {
      id: 2,
      name: "draniki",
      author: "Alex Troshin",
      image: collectionImage,
      date: "October 2022",
      supply: "3x100 NFTs",
      chain: {
         name: "Ethereum",
         icon: chainIcon,
      },
      price: {
         nfoClaim: false,
         value: 100,
      },
      socials: {
         instagram: null,
         tickTok: null,
         twitter: "https://twitter.com/M_Fareniuk",
      },
      logo: collectionLogo,
      background: {
         video: collectionVideo,
         image: null,
      },
      openseaLink:
         "https://opensea.io/collection/nfofinal?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Origin%20collection&search[stringTraits][0][values][0]=Choppers",
      text: [
         "STILLALIVE is Vintage & Custom studio created for people who perfectly know how to express & introduce themselves to the world. STILLALIVE conveys your genuine personality.",
         "I am Myroslav Fareniuk. I'm a soul-crafter — I customize shoes & clothes for you, working only with original Nike, Vans, Adidas, Levi's, Schott, & Alpha Industries. I create designs which remain unique & timeless.",
      ],
   },
];