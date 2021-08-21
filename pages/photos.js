import Dashboard from "../containers/dashboard";
import PhotosData from "../containers/Photos/Photos";

const Photos = () => {
  return (
    <div>
      <Dashboard menu={"photos"}>
        <PhotosData />
      </Dashboard>
    </div>
  );
};

export default Photos;
