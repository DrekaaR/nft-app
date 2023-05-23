import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";
import { ReactComponent as PlusIcon } from "assets/images/icons/plus.svg";
import { ReactComponent as PlusBgIcon } from "assets/images/icons/plusBg.svg";
import nft_1 from "assets/images/nfts/01.jpg";
import nft_2 from "assets/images/nfts/02.jpg";
import nft_3 from "assets/images/nfts/03.jpg";
import nft_4 from "assets/images/nfts/04.jpg";
import shapeGif from "assets/images/shape.gif";
import ModalNFTs from "pages/NFTs/Merge/StepOne/ModalNFTs/ModalNFTs";
import { MergeContext } from "contexts/MergeContext";
import React, { memo, useContext, useState } from "react";
import s from "./StepOne.module.scss";
import mainStyles from "../Merge.module.scss";

const nfts = [
  { id: 1, name: "Mystical Unicorn", image: nft_1 },
  { id: 2, name: "Galactic Explorer", image: nft_2 },
  { id: 3, name: "Enchanted Forest", image: nft_3 },
  { id: 4, name: "Mythical Dragon", image: nft_4 },
];

const StepOne = memo(() => {
  const { mergeState } = useContext(MergeContext);
  const [NFTsModalVisible, setNFTsModalVisible] = useState(false);

  const openNFTsModal = () => {
    setNFTsModalVisible(true);
  };
  const shapes = 1;

  return (
    <div>
      <div className={mainStyles.title}>step 1</div>
      <div className={mainStyles.body}>
        <div className={s.stepOneContainer}>
          {/* Shapes - start */}
          <div className={mainStyles.item}>
            <div className={mainStyles.itemTitle}>
              {`You have ${shapes} shape`}
            </div>
            {shapes > 0 ? (
              <div className={s.shapeImage}>
                <img
                  src={shapeGif}
                  alt="rotating sneakers in a transparent box"
                />
              </div>
            ) : (
              <button className={s.hintBtn}>
                <div className={s.hintBtnTitle}>to MINT</div>
                <div className={s.hintBtnText}>
                  Click here to go to mint page and get a blank.
                </div>
              </button>
            )}
          </div>
          {/* Shapes - end */}

          <PlusBgIcon />

          {/* NFT picker - start */}
          <div className={mainStyles.item}>
            <div className={mainStyles.itemTitle}>Add an NFT</div>
            {mergeState.selectedNFT ? (
              <button onClick={openNFTsModal} className={s.imageNFT}>
                <img
                  src={mergeState.selectedNFT.image}
                  alt={mergeState.selectedNFT.name}
                />
                <div className={s.editIcon}>
                  <EditIcon />
                </div>
              </button>
            ) : (
              <button onClick={openNFTsModal} className={s.hintBtn}>
                <div className={s.hintBtnTitle}>
                  <PlusIcon />
                </div>
                <div className={s.hintBtnText}>
                  Click here to choose an NFT from your collection
                </div>
              </button>
            )}
          </div>

          <ModalNFTs
            items={nfts}
            isOpen={NFTsModalVisible}
            setOpen={setNFTsModalVisible}
          />
          {/* NFT picker - end */}
        </div>
      </div>
    </div>
  );
});

export default StepOne;
