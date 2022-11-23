import "./styles.css"

export const PostCard = ({ title, author, date, body, category }: PropType) => {
  return (
    <div className="post-card card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-0">{title}</h2>
        <p className="mt-0">{`Por: ${author} - ${date.toLocaleDateString()}`}</p>
        <p className="card-text">{body}</p>
        <span className="badge rounded-pill p-2">{category}</span>
      </div>
    </div>
  );
};

type PropType = {
    title: String;
    author: String;
    date: Date;
    body: String;
    category: String;
}
