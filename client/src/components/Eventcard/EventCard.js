import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardEv from "../Card/CardEv";
import "./EventCard.css";
import Loader from "../loader/Loader";
const EventCard = ({ ping, setping }) => {
  const eventss = useSelector((state) => state.event.event);
  const [text, settext] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <div className="bg-event">
        <div className="event-in">
          <input
            type="text"
            placeholder="Event name ..."
            onChange={(e) => settext(e.target.value)}
          />
          <input
            type="date"
            placeholder="Event date..."
            name="trip-start"
            min="1931-01-01"
            max="2030-01-01"
          />
          <select name="place" onChange={(e) => setLocation(e.target.value)}>
            <option value=" ">Select city...</option>
            <option value=" ">Tunis</option>
            <option value=" ">Sousse</option>
            <option value=" ">Gabés</option>
            <option value=" ">Sfax</option>
            <option value=" ">Siliana</option>
            <option value=" ">Manouba</option>
            <option value=" ">Ben Arous</option>
            <option value=" ">Mednine</option>
            <option value=" ">Nabeul</option>
            <option value=" ">Bizerte</option>
            <option value=" ">Kebeli</option>
            <option value=" ">Tozeur</option>
            <option value=" ">Gafsa</option>
            <option value=" ">Tatouine</option>
            <option value=" ">Kairouan</option>
            <option value=" ">Béja</option>
            <option value=" ">Monastir</option>
            <option value=" ">Mahdia</option>
            <option value=" ">Jendouba</option>
            <option value=" ">Kasserine</option>
            <option value=" ">Kef</option>
            <option value=" ">Sidi Bouzid</option>
            <option value=" ">Zaghouan</option>
            <option value=" ">Ariana</option>
          </select>
        </div>
      </div>
      <div className="list-eve">
        {eventss ? (
          eventss
            ?.filter(
              (el) =>
                el.name.toLowerCase().includes(text.toLowerCase()) &&
                el.isApprouved
            )
            .map((el) => <CardEv ping={ping} setping={setping} event={el} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default EventCard;
