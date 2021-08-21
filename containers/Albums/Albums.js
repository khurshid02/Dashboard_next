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
      <h1 className="mb-4">Albums</h1>
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
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </AlbumsWrapper>
  );
};

export default Albums;
