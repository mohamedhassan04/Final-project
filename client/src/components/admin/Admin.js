import React, { useEffect, useState } from "react";
import "./admin.css";
import { useDispatch, useSelector } from "react-redux";
import { eventapprouved, eventDel } from "../../JS/userSlice/eventSlice";
import { postGet } from "../../JS/userSlice/postSlice";
import { userDel } from "../../JS/userSlice/userSlice";
const Admin = ({ ping, setping }) => {
  const events = useSelector((state) => state.event.event);
  const users = useSelector((state) => state.user.users);
  const posts = useSelector((state) => state.post.post);

  const dispatch = useDispatch();
  const [evupdated, setevupdated] = useState({
    isApprouved: true,
  });

  useEffect(() => {
    dispatch(postGet());
  }, []);
  return (
    <div>
      <div className="admin-global">
        <div className="admin-body">
          <div className="side-menu">
            <div className="brand-name">
              <h1>We Run</h1>
            </div>
            <ul>
              <li>
                <i class="fas fa-columns"></i> &nbsp; <span>Dashboard</span>
              </li>

              <li>
                <i class="fas fa-question-circle"></i>&nbsp; <span>Help</span>
              </li>
              <li>
                <i class="fas fa-sliders-h"></i>&nbsp; <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="container-admin">
            <div className="header-admin">
              <div className="nav">
                <div className="search-admin">
                  <input type="text" placeholder="Search.." />
                  <button type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="content-admin">
              <div className="cards-admin">
                <div className="card-admin">
                  <div className="box-admin">
                    <h1>{users?.length}</h1>
                    <h3>Users</h3>
                  </div>
                  <div className="icon-user">
                    <i class="fal fa-address-book"></i>
                  </div>
                </div>
                <div className="card-admin">
                  <div className="box-admin">
                    <h1>{posts?.length}</h1>
                    <h3>Post</h3>
                  </div>
                  <div className="icon-user">
                    <i class="fal fa-running"></i>
                  </div>
                </div>
                <div className="card-admin">
                  <div className="box-admin">
                    <h1>
                      <tr>{events?.length}</tr>
                    </h1>
                    <h3>Event</h3>
                  </div>
                  <div className="icon-user">
                    <i class="far fa-calendar-alt"></i>
                  </div>
                </div>
              </div>
              <div className="content-2-admin">
                <div className="event-admin">
                  <div className="title-admin">
                    <h2>Event manager</h2>
                  </div>
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Creator</th>
                      <th>Status</th>
                    </tr>
                    {events
                      ?.filter((el) => !el.isApprouved)
                      .map((el) => (
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.creator?.name}</td>
                          <td>
                            <button
                              className="app-admin-btn"
                              onClick={() => {
                                dispatch(
                                  eventapprouved({
                                    id: el._id,
                                    evupdated,
                                  })
                                );
                                setping(!ping);
                              }}
                            >
                              Approuver
                            </button>
                            <button
                              className="dec-admin-btn"
                              onClick={() => {
                                dispatch(eventDel(el._id));
                                setping(!ping);
                              }}
                            >
                              Decline
                            </button>
                          </td>
                        </tr>
                      ))}
                  </table>
                </div>
                <div className="user-dash-admin">
                  <div className="title-admin">
                    <h2>Users</h2>
                  </div>
                  <table>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                    </tr>
                    {users?.map((el) => (
                      <tr>
                        <td>{el.name}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                        <td>
                          <div className="btn-rem-ad">
                            <button
                              onClick={() => {
                                dispatch(userDel(el?._id));
                                setping(!ping);
                              }}
                            >
                              <i class="fas fa-user-minus"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
