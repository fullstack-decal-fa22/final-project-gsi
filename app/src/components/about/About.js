// Page for group member information and contact
import Navbar from "../shared/Navbar";
import "../../css/About.css";
import Berkeley from "../../assets/Berkeley.png";
import Image from "mui-image";


function About() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="about-heading">About</h1>
      <div className="about-container">
        <div className="about-left">
          <p className="about-text">
            RateMyGSI is UC Berkeley’s (unofficial) platform for Graduate
            Student Instructor (GSI) ratings. We wanted to create this platform
            because students are often faced with the decision of choosing a
            section—whether a discussion or a lab—without knowing much
            information at all about their choices of GSIs. Because a GSI can
            have such a big impact on the quality of a class and therefore a
            student’s quality of education here at UC Berkeley, we thought RateMyGSI 
          would be a great way to help students make these important
            decisions during enrollment season.
          </p>
          <p className="about-text">
            On RateMyGSI, Berkeley students can submit a GSI’s name, which will
            be officially verified before being uploaded to the website. Once a
            GSI’s name is uploaded, Berkeley students may submit a rating for
            that GSI and a comment, which may be upvoted or downvoted by fellow
            students. If a comment is deemed inappropriate, it may be flagged
            and inspected by one of our official moderators.
          </p>
          <p className="about-text">
            Berkeley students have added more than 200 ratings, 50 GSIs to RateMyGSI. 
            More than 500 students each month are using RateMy
            GSI – join the fun!
          </p>
        </div>
        <div className="about-right">
          <Image src={Berkeley} width="102%" height="55%"/>
          <p/>
          <p className="about-text">Contact: ratemygsi@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;
