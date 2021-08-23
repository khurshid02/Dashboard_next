import Dashboard from "../containers/dashboard";
import PostsData from "../containers/Posts/Posts";

const Posts = () => {
  return (
    <div>
      <Dashboard menu={"posts"}>
        <PostsData />
      </Dashboard>
    </div>
  );
};

export default Posts;
