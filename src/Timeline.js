import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS/Timeline.css'; // Import your custom CSS file
import Modal from 'react-modal'; // For modals

const timelineData = [
  {
    type: "Education",
    title: "BBA - Bachelor of Business Administration",
    date: "June 2018 - May 2021",
    institution: "C.P.A College, Bodinayakanur",
    details: "Details about the education.",
    icon: "fa-school"
  },
  {
    type: "Education",
    title: "Full Stack Developer",
    date: "Feb 2024 - June 2024",
    institution: "Alpha Fly Institute, Theni",
    details: "Details about the course.",
    icon: "fa-graduation-cap"
  },
  {
    type: "Experience",
    title: "Executive",
    date: "2021-2022",
    company: "Sealand Knit Wears",
    details: "Details about the job.",
    icon: "fa-briefcase"
  },
  {
    type: "Experience",
    title: "Graphics Designer",
    date: "2022-2024",
    company: "Classic Cards",
    details: "Details about the job.",
    icon: "fa-thin fa-palette"
  },
  // Add more entries as needed
];

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  const filteredData = filter === "All" ? timelineData : timelineData.filter(item => item.type === filter);

  return (
    <div className="portfolio">
      <h1 className="head3">PORTFOLIO</h1>

      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Education">Education</option>
          <option value="Experience">Experience</option>
        </select>
      </div>

      <div id="timeline">
        <span className="hscroll-line"></span>
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos="flip-up"
            data-aos-offset="1"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            onClick={() => openModal(item)}
          >
            <div className="content">
              <h1 className="head6">
                <i className={`fa ${item.icon}`}></i> {item.type}
              </h1>
              <h2>
                <i className={`fa ${item.icon}`}></i> {item.title}
              </h2>
              <p>{item.date}</p>
              <h3>
                <i className="fa fa-building-columns"></i> {item.institution || item.company}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="More Info Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {modalContent && (
          <div>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Timeline;
