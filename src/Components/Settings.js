import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { getUserData } from "../api/ProjectsApi";

const Settings = ({ save }) => {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    try {
      const response = await getUserData({
        email: localStorage.getItem("email"),
      });
      setUserData(response);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="settings-container">
      <h1 style={{ color: "#7E22CE" }}>Account Settings</h1>
      <div className="settings-div">
        <img
          src="images/settingicon.svg"
          alt="icon"
          style={{ height: "10rem", width: "10rem", borderRadius: "50%" }}
        />
        <InputField
          name={"userName"}
          type={"text"}
          value={localStorage.getItem("username")}
        />
        <InputField
          name={"email"}
          type={"text"}
          value={localStorage.getItem("email")}
        />
      </div>
    </div>
  );
};

export default Settings;
