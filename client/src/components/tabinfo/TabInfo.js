import React from "react";
import "./TabInfo.css";
import { useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ParticipantList from "../partlist/ParticipantList";

const TabInfo = () => {
  const location = useLocation();
  const { event } = location.state;
  return (
    <div>
      <Tabs className="tab-gl">
        <TabList>
          <div className="title-tab">
            <Tab>Intelligence</Tab>
            <Tab>List Participants </Tab>
            <Tab>Ask a question</Tab>
          </div>
        </TabList>
        <div className="tab-content">
          <TabPanel>
            <h2>{event.intelligence}</h2>
          </TabPanel>
          <TabPanel>
            <div className="part-list">
              <h1>Number of participants({event?.participant?.length})</h1>
              <ParticipantList participants={event?.participant} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="body-ask">
              <section className="contact">
                <div className="content">
                  <h2>Ask your question</h2>
                  <p> Welcome to our events</p>
                </div>
                <div className="container">
                  <div className="contactInfo">
                    <div className="box">
                      <div className="icon">
                        <i class="fas fa-map-marker-smile"></i>
                      </div>
                      <div className="text">
                        <h3>Adress</h3>
                        <p>{event.adress}</p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="icon">
                        <i class="fas fa-phone-alt"></i>
                      </div>
                      <div className="text">
                        <h3>Phone</h3>
                        <p>{event.phone}</p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div className="text">
                        <h3>Email</h3>
                        <p> marathon@comar.tn</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-form">
                    <form>
                      <h2>Send Message</h2>
                      <div className="inputbox">
                        <input type="text" name="" required="required" />
                        <span>Full Name</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name="" required="required" />
                        <span>Email</span>
                      </div>
                      <div className="inputbox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                      </div>
                      <div className="inputbox">
                        <input type="submit" name="" value="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabInfo;
