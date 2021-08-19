import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlbums } from "../../redux/actions";
import AlbumsWrapper from "./AlbumsWrapper";
import { Slide } from "react-awesome-reveal";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.users);

  return (
    <AlbumsWrapper>
      <h1 className="mb-4">Users</h1>
      <div className="row">
        {data.map((v) => (
          <div className="col-sm-6 col-md-4">
            <Slide className="p-4 rounded shadow">
              <h2>
                <p>{v.title}</p>
                <p>{v.id}</p>
                <p>{v.userId}</p>
              </h2>
            </Slide>
          </div>
        ))}
      </div>
    </AlbumsWrapper>
  );
};

export default Albums;
