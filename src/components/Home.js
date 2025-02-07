import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        {/* Left Side - Name & Title */}
        <div className="text-content">
          <h1 className="name">Khushi Singh</h1>
          <p className="title">Java Developer</p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="image-content">
          <img src="/assets/profile.jpg" alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;