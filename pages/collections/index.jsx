import { ReactComponent as TwitterIcon } from "assets/images/icons/socials/twitter.svg";
import MyButtonLink from "components/UI/MyButton/MyButtonLink";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import { collections } from "config/collections";
import React from "react";
import { Link } from "react-router-dom";
import s from "./Collections.module.scss";

const Collections = () => {
  return (
    <Container>
      <Wrapper width={880} style={{ marginTop: "3vh" }}>
        <div className={s.header}>
          <h2 className={s.title}>Collections</h2>
          <div className={s.subTitle}>
            To get listed DM
            <MyButtonLink href="https://twitter.com/nfo0ooo">
              <TwitterIcon /> @nfoOoo
            </MyButtonLink>
          </div>
        </div>

        <div className={s.items}>
          {collections.map((coll) => (
            <Link key={coll.name} to={coll.name} className={s.collLink}>
              <h3 className={s.collLinkTitle}>
                <span>
                  {coll.name} {coll.author}
                </span>
              </h3>
              <div className={s.collLinkImage}>
                <img src={coll.logo} alt={coll.name + "collection"} />
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Collections;
