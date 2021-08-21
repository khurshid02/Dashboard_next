import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../redux/actions";
import PhotosWrapper from "./PhotosWrapper";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPhotos(dispatch);
  }, []);

  const data = useSelector((state) => state.users);
  console.log(data);

  return (
    <PhotosWrapper>
      <h1>Photos</h1>
      <div className="row">
        {data.map((v) => (
          <div className="col-sm-6 col-md-4">
            <div className="card ">
              <div className="title">
                <img src={v.thumbnailUrl} alt="logo" />
                <h5>{v.title}</h5>
                <small>
                  <h5>{v.id}</h5>
                </small>
                <small>
                  <h5>{v.id}</h5>
                </small>
              </div>
              <img src={v.url} alt="" />
            </div>
          </div>
        ))}
      </div>
    </PhotosWrapper>
  );
};

export default Photos;
