import styled from "styled-components";

const PhotosWrapper = styled.div`
  .card {
    margin: 30px;
  }

  .title {
    display: flex;
    flex: 1;
    min-height: 100px;
    align-items: center;
  }

  .title small {
    background-color: blue;
    border-radius: 50%;
    height: 30px;
    width: 40px;
    justify-content: center;
    display: flex;
  }

  .title img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export default PhotosWrapper;
