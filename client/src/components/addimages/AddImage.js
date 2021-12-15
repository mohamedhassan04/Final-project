import React, { useEffect, useState } from "react";
import "./addimage.css";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { imageGet } from "../../JS/userSlice/ImageSlice";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const AddImage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(imageGet());
  }, []);

  const images = useSelector((state) => state.image.images);

  return (
    <div>
      <div className="photo-add-gl">
        <div className="body-image-add">
          <Modal />
        </div>
        <div className="img-slice">
          {images?.map((el) => (
            <Zoom zoomMargin={40} overlayBgColorEnd={"rgba(26, 26, 26, 0.7)"}>
              <img
                src={`http://localhost:5000${el.url}`}
                alt="diefoi"
                width="300"
              />
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImage;
