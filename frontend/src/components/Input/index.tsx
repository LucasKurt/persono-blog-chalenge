import { useEffect, useState } from "react";
import { Post } from "../../types";
import "./styles.css";

export const Input = ({ posts, filteredPosts, setFilteredPosts }: PropType) => {
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [postLegend, setPostLegend] = useState("");

  useEffect(() => {
    if (!posts || !filteredPosts) {
      setPostLegend("Não há postagens disponíveis");
    } else if (filteredPosts.length === posts.length && value === "") {
      setPostLegend("Exibindo todos os posts");
    } else {
      setPostLegend(`Exibindo ${filteredPosts.length} post${filteredPosts.length === 1 ? '' : 's'} para: ${value}`);
    }
  }, [posts, filteredPosts, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHidden(e.target.value.length > 0 ? "" : "hidden");
    if (posts) {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())
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
      <p>{postLegend}</p>
    </>
  );
};

type PropType = {
  posts: Post[] | undefined;
  filteredPosts: Post[] | undefined;
  setFilteredPosts: Function;
};
