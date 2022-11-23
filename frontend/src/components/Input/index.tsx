import { useEffect, useState } from "react";
import { Post } from "../../types";
import "./styles.css";

export const Input = ({ posts, setFilteredPosts }: PropType) => {
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [postLegend, setPostLegend] = useState("");

  useEffect(() => {
    if (!posts || posts.length === 0) {
      setPostLegend("Não há postagens postagens");
    } else {
      setPostLegend("Exibindo todos os posts");
    }
  }, [posts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHidden(e.target.value.length > 0 ? "" : "hidden");
    if (posts) {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPostLegend(
        filteredPosts.length === 0
          ? "Não há postagens postagens"
          : `Exibindo ${filteredPosts.length} post${
              filteredPosts.length === 0 ? "" : "s"
            } para: ${e.target.value}`
      );
      setFilteredPosts(filteredPosts);
    }
  };

  const handleClick = () => {
    setValue("");
    setHidden("hidden");
    setFilteredPosts(posts);
  };

  return (
    <>
      <div className="box">
        <input
          type="text"
          placeholder="Buscar posts"
          value={value}
          onChange={handleChange}
        />
        <button className={hidden} onClick={handleClick}>
          Limpar
        </button>
      </div>
      <p className="mt-3">{postLegend}</p>
    </>
  );
};

type PropType = {
  posts: Post[] | undefined;
  setFilteredPosts: Function;
};
