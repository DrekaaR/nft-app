import image from "assets/images/factory/red.gif";
import { ReactComponent as NfoIcon } from "assets/images/icons/chains/nfo.svg";
import { ReactComponent as UsdcIcon } from "assets/images/icons/chains/usdc.svg";
import { factoryCollection } from "config/factory";
import { FactoryContext } from "contexts/FactoryContext";
import s from "pages/factory/TabFactory/TabFactory.module.scss";
import React, { memo, useContext, useMemo } from "react";

let userIds = [2, 1];

function useGroupByCollection(collections) {
  const sortedCollections = useMemo(() => {
    const result = {};
    collections.forEach((obj) => {
      if (!result[obj.collection]) {
        result[obj.collection] = {};
      }
      if (!result[obj.collection][obj.name]) {
        result[obj.collection][obj.name] = obj;
      }
    });
    return result;
  }, [collections]);

  return sortedCollections;
}

const Collections = memo(({ isAllVisible }) => {
  const { setFactoryState } = useContext(FactoryContext);
  const useSortedCollections = useGroupByCollection(factoryCollection);

  const selectTokenHandler = (item) => {
    setFactoryState({
      orderModalVisible: true,
      selectedToken: item,
    })
  };

  return Object.entries(useSortedCollections).map(([collection, items]) => (
    <div key={collection} className={s.collection}>
      <h3>{collection}</h3>
      <div className={s.items}>
        {Object.values(items).map((item) => (
          <button
            className={s.item}
            key={item.id}
            disabled={!userIds.includes(item.id)}
            onClick={() => selectTokenHandler(item)}
            style={{
              display:
                !isAllVisible || userIds.includes(item.id) ? "block" : "none",
            }}
          >
            <div className={s.image}>
              <div className={s.paymethod}>
                {item.nfoClaim ? <NfoIcon /> : <UsdcIcon />}
              </div>
              <img src={item.image} alt={item.name + "image"} />
            </div>

            <div className={s.name}>{item.name}</div>
          </button>
        ))}
      </div>
    </div>
  ));
});

export default Collections;
