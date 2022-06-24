import React, { useEffect, useState } from "react";
import JobSections from "../JobSections/JobSections";
import './JobSecation.css'


const JobSecation = () => {
  const [jobsection , setjobsection] = useState([])

  useEffect( () => {
    fetch('https://obscure-hollows-04792.herokuapp.com/addservice')
    .then(res => res.json())
    .then(data => setjobsection(data))



  } , [] )
  return (
    <div>
      <div>
        <h1 style={{marginBottom:'50px'}} ><ul>OUR JOB CIRCUAL</ul></h1>
      </div>
      <div className="job-container">
        {
          jobsection.map(service => <JobSections
            key={service._id}
            service={service}
          ></JobSections>)
        }
      </div>
    </div>
  );
};

export default JobSecation;
