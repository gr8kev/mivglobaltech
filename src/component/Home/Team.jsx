import React from "react";
// Importing the images
import person1 from "./../../assets/images/person-1.jpg";
import person2 from "./../../assets/images/person-2.jpg";
import person3 from "./../../assets/images/person-3.jpg";

const Team = () => {
  const teamMembers = [
    { image: person1, name: "Jon Doe", title: "Webflow Artist" },
    { image: person2, name: "Jane Smith", title: "UI/UX Designer" },
    { image: person3, name: "Mike Johnson", title: "Frontend Developer" },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Team Members</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 text-center">
          {teamMembers.map((member, index) => (
            <div
              className="col-md-4"
              data-aos="fade-down"
              data-aos-delay={(index + 1) * 100}
              key={index}
            >
              <div className="team-member image-zoom">
                <div className="image-zoom-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-content">
                  <h4 className="text-white">{member.name}</h4>
                  <p className="mb-0 text-white">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
