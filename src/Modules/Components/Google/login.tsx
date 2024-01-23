import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "954375066737-krhrae3rkpqu67iotu782jkn8bb0h1qv.apps.googleusercontent.com";

const LoginLogoutComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const onSuccessLogin = (res: any) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setProfilePic(res.profileObj.imageUrl);
    setIsLoggedIn(true);
  };

  const onFailureLogin = (res: any) => {
    console.error("LOGIN FAILED! res:", res);
  };

  const onLogoutSuccess = () => {
    console.log("LOGOUT SUCCESSFUL");
    setIsLoggedIn(false);
    setProfilePic("");
  };

  return (
    <div className="signbutton">
      {isLoggedIn ? (
        <div
          id="signOutButton"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className="googleLogIn"

          />
          {profilePic && (
            <img className="google__acc_image" src={profilePic} alt="Profile" />
          )}
        </div>
      ) : (
        <div
          id="signInButton"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={"single_host_origin"}
            scope="https://www.googleapis.com/auth/userinfo.profile"
            isSignedIn={true}
            style={{ borderRadius: "20px !important" }}
            className="googleLogIn"
          />
        </div>
      )}
    </div>
  );
};

export default LoginLogoutComponent;
