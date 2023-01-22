import React from "react";
import { BsCamera } from "react-icons/bs";
import "./InputImageBox.css";

const ImageInputBox = ({ name, value,onChange,disabled = false, }) => {
  return (
    <div className="image-upload-wrap">
      <input className="file-upload-input" type="file" value={value} name={name} onChange={onChange} disabled={disabled} />
      <div className="drag-text">
        <center>
          <BsCamera />
        </center>
        <h3>Upload Photo</h3>
      </div>
    </div>
  );
};

export default ImageInputBox;
