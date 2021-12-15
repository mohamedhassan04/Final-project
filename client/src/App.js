import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent, usersget } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home page/Home";
import FormOrg from "./components/form-org/FormOrg";
import FormPar from "./components/form-par/FormPar";
import EventCard from "./components/Eventcard/EventCard";
import EventInfo from "./components/eventblog/EventInfo";
import Calender from "./components/calender/Calender";
import { eventGet } from "./JS/userSlice/eventSlice";
import ContactUs from "./components/Contactus/ContactUs";
import AddImage from "./components/addimages/AddImage";
import Loader from "./components/loader/Loader";
import Post from "./components/publier/Post";
import Admin from "./components/admin/Admin";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
      dispatch(usersget());
    }
    dispatch(eventGet());
  }, [ping]);

  const eventss = useSelector((state) => state.event.event);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/formorg"
          element={<FormOrg ping={ping} setping={setping} />}
        />
        <Route
          path="/formpar/:id"
          element={<FormPar ping={ping} setping={setping} />}
        />
        <Route
          path="/cardevent"
          element={<EventCard ping={ping} setping={setping} />}
        />
        <Route path="/eventinfo" element={<EventInfo />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/photo" element={<AddImage />} />
        <Route path="/loader" element={<Loader />} />
        <Route
          path="/admin"
          element={<Admin ping={ping} setping={setping} />}
        />
        <Route path="/profil/post" element={<Post />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
