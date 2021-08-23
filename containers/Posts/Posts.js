import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsWrapper from "./PostsWrapper";
import { Slide } from "react-awesome-reveal";
import { setPosts } from "../../redux/actions";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPosts(dispatch);
  }, []);

  const data = useSelector((state) => state.users);

  return (
    <PostsWrapper>
      <h1 className="mb-4">Posts</h1>
      <div className="row">
        {data.map((v) => (
          <div className="col-sm-6 col-md-4">
            <Slide className="p-4 rounded shadow">
              <div className="ht">
                <h1>Title:{v.title}</h1>
                <h2>ID:{v.id}</h2>
                <h2>
                  USerid:
                  {v.userId}
                </h2>
                <h4>body{v.body}</h4>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </PostsWrapper>
  );
};

export default Posts;
