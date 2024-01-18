import React, { useEffect, useState } from "react";
import { GoogleLogout } from 'react-google-login';


const clientId =
  "954375066737-krhrae3rkpqu67iotu782jkn8bb0h1qv.apps.googleusercontent.com";

const LogOut = () => {


  const onSuccess = () => {
console.log("LOGOUT SUCCESSFULL");

  };

  return (
    <div id="signOutButton">
      <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default LogOut;
