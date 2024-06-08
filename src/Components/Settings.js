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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
      >
        <img
          src="images/settingicon.svg"
          alt="icon"
          style={{ height: "10rem", width: "10rem", borderRadius: "50%" }}
        />
        <InputField name={"userName"} type={"text"} value={""} />
        <InputField />
      </div>
    </div>
  );
};

export default Settings;
