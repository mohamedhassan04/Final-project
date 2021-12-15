import React, { useState, useEffect } from "react";
import "./FormOrg.css";
import { useDispatch, useSelector } from "react-redux";
import { eventAdd } from "../../JS/userSlice/eventSlice";
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2/dist/sweetalert2.js";

const FormOrg = ({ ping, setping }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setEvent({ ...event, creator: user?._id });
  }, []);

  const [event, setEvent] = useState({
    name: "",
    creator: "",
    date: "",
    adress: "",
    phone: "",
    duration: "",
    location: "",
    distance: [""],
    intelligence: "",
    addphotoevent: "",
    addoffcielphoto: "",
    description: "",
  });

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/addphoto/uploads",
      bodyFormData
    );
    console.log(data);
    setEvent({ ...event, addoffcielphoto: data });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(eventAdd(event));
    Swal.fire("Good job!", "event added!", "success");
    setping(!ping);
  };

  const options = [
    { value: "1Km", label: "1Km" },
    { value: "5Km", label: "5Km" },
    { value: "7Km", label: "7Km" },
    { value: "10Km", label: "10Km" },
    { value: "16Km", label: "16Km" },
    { value: "21Km", label: "21Km" },
    { value: "30Km", label: "30Km" },
    { value: "42Km", label: "42Km" },
    { value: "50Km", label: "50Km" },
    { value: "100Km", label: "100Km" },
    { value: "15Km trail", label: "15Km trail" },
  ];

  const onDropdownChange = (value) => {
    console.log(value);
    setEvent({ ...event, distance: value });
  };

  return (
    <div>
      <div className="input-org">
        <form className="org-form">
          <div className="title-org">
            <h1>welcome to space of organizer</h1>
          </div>
          <div className="input-dec">
            <label>Event Name</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                setEvent({ ...event, name: e.target.value });
              }}
            />
            <label>Adress</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                setEvent({ ...event, adress: e.target.value });
              }}
            />
            <label>Phone</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                setEvent({ ...event, phone: e.target.value });
              }}
            />
            <label>Date Event</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="1931-01-01"
              max="2030-01-01"
              onChange={(e) => {
                setEvent({ ...event, date: e.target.value });
              }}
            />
            <label>Duration</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                setEvent({ ...event, duration: e.target.value });
              }}
            />
            <label>Location</label>
            <input
              type="text"
              placeholder="Governorate and City ..."
              id="fname"
              onChange={(e) => {
                setEvent({ ...event, location: e.target.value });
              }}
            />
            <label>Distance</label>
            <div className="drop-form">
              <Select
                options={options}
                onChange={onDropdownChange}
                value={event.distance.value}
                isMulti
              />
            </div>
            <label>Add official photo</label>
            <input
              className="form-img-add"
              name="file"
              type="file"
              onChange={uploadFileHandler}
            />
            <label>Description</label>
            <textarea
              name="Intelligence"
              cols="30"
              rows="10"
              onChange={(e) => {
                setEvent({ ...event, description: e.target.value });
              }}
            ></textarea>
            <label>Intelligence</label>
            <textarea
              name="Intelligence"
              cols="30"
              rows="20"
              onChange={(e) => {
                setEvent({ ...event, intelligence: e.target.value });
              }}
            ></textarea>
            <div className="btn-add">
              <button className="add-event" onClick={handleAdd}>
                Add event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOrg;
