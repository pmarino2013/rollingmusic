import React from "react";
import { teamMembers } from "../data/about";
import "../css/about.css";

function AboutScreen() {
  return (
    <div className="about-container">
      <h1>Acerca de Nosotros</h1>
      <p className="team-quote">
        "Un equipo apasionado por crear experiencias digitales que marcan la
        diferencia."
      </p>

      <div className="team-gallery">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.avatar} alt={member.name} className="avatar" />
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutScreen;
