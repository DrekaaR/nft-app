import MyButton from "components/UI/MyButton/MyButton";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import React from "react";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { FaDiscord as DiscordIcon } from "react-icons/fa";
import s from "./Socials.module.scss";

const SocialsPage = () => {
  return (
    <Container
      style={{ height: "70vh", display: "grid", alignItems: "center" }}
    >
      <Wrapper
        width={510}
        height={380}
        noScrollBar
        style={{ marginTop: "3vh" }}
      >
        <h2 className={s.title}>Follow us</h2>

        <div className={s.buttons}>
          <MyButton href="www.twitter.com">
            <TwitterIcon /> <span>twitter</span>
          </MyButton>
          <MyButton disabled href="www.discord.com">
            <DiscordIcon /> <span>discord</span>
          </MyButton>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SocialsPage;