import { ReactComponent as SearchIcon } from "assets/images/icons/search.svg";
import s from "pages/NFTs/Merge/StepOne/ModalNFTs/ModalNFTs.module.scss";
import MyModal from "components/UI/MyModal/MyModal";
import useInput from "hooks/useInput";
import React, { useContext, useMemo } from "react";
import { MergeContext } from "contexts/MergeContext";
import MyInput from "components/UI/MyInput/MyInput";

const modalWrapperStyles = {
  alignItems: "flex-start",
  marginTop: "15vh",
  minHeight: "auto",
};

const useSearch = (items, query) => {
  const sortedAndSearchedPosts = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);
  return sortedAndSearchedPosts;
};

const ModalNFTs = ({ items, isOpen, setOpen }) => {
  const search = useInput("");
  const searchedNFTs = useSearch(items, search.value);
  const { mergeState, setMergeState } = useContext(MergeContext);

  const selectNftHandler = (nft) => {
    setMergeState({ ...mergeState, selectedNFT: nft });
    setOpen(false);
  };

  return (
    <MyModal
      style={modalWrapperStyles}
      width={1480}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <div className={s.mainTitle}>Choose an nft</div>

      <div className={s.search}>
        <MyInput
          value={search.value}
          onChange={search.onChange}
          placeholder="Search for an NFT"
        >
          <div className={s.searchIcon}>
            <SearchIcon />
          </div>
        </MyInput>
      </div>

      <div className={s.NFTsItemsWrapper}>
        {searchedNFTs.length ? (
          <div className={s.items}>
            {searchedNFTs.map((item) => (
              <button
                onClick={() => selectNftHandler(item)}
                key={item.id}
                className={s.item}
              >
                <div className={s.image}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={s.title}>{item.name}</div>
              </button>
            ))}
          </div>
        ) : (
          <div className={s.notFoundTitle}>NFT not found</div>
        )}
      </div>
    </MyModal>
  );
};

export default ModalNFTs;
