import MyButton from "components/UI/MyButton/MyButton";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import { posts } from "config/posts";
import React, { useContext } from "react";
import { updateLoader } from "store/actions";
import { Store } from "store/store-reducer";
import s from "./Main.module.scss";

const MainPage = () => {
  const { state, dispatch } = useContext(Store);

  function jsonParseString(str) {
    return { __html: JSON.parse(JSON.stringify(str)) };
  }

  const openLoader = () => {
    updateLoader(dispatch, {
      text: "transaction in progress...",
      status: "loading",
    });
    setTimeout(() => {
      updateLoader(dispatch, {
        text: "transaction successful",
        status: "success",
      });
    }, 5000);
  };

  return (
    <Container>
      <Wrapper style={{ marginTop: "3vh" }}>
        <h2 className={s.title}>NFO news</h2>
        <MyButton onClick={openLoader}>Open Loader</MyButton>
        {posts.map((post) => (
          <article key={post.id} className={s.post}>
            {post.image && (
              <div className={s.postImage}>
                <img src={post.image.src} alt={post.image.alt} />
              </div>
            )}
            <div>
              <h3 className={s.postTitle}>{post.title}</h3>
              <div className={s.postText}>
                {post.body.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={jsonParseString(paragraph)}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainPage;
