import React from "react";
import { useState } from "react";

const ImageUpload = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const changeHandler = (e) => {
    const targetFile = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const { result } = e.target;
      setFileUrl(result);
    };

    fileReader.readAsDataURL(targetFile);
  };

  return (
    <header className="upload">
      <form className="upload__form">
        <label htmlFor="image">Select image to upload</label>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={changeHandler}
        />
      </form>
      <div>
        {fileUrl && (
          <img className="upload__preview" src={fileUrl} alt="preview" />
        )}
      </div>
    </header>
  );
};

export default ImageUpload;
