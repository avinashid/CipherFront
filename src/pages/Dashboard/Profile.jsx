import React from "react";
import { useSelector } from "react-redux";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const profile = useSelector((state) => state.user);

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileLeft">
          <div className="profileImage">
            <div className="imageContainer"> </div>
            <div className="edit">
              <FaUserEdit />
            </div>
          </div>
          <div className="profileInfo">
            <div className="hello">Hello,</div>
            <div className="profileName">
              {profile.firstname + " " + profile.lastname}
            </div>
            <div className="email">{profile.email}</div>
          </div>
        </div>
        <div className="followers">0 Followers</div>
      </div>
    </div>
  );
};

export default Profile;
