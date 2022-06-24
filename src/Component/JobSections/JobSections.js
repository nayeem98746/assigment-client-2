import React from 'react';
import './JobSections.css'
import { Link, NavLink } from 'react-router-dom';

const JobSections = ({service}) => {
    const {_id, name, email, description, salary ,skill ,year , img}= service
    return (
        <div>
           <div className='card-container'>
            <div className='img-container'>
                <img src={img} alt="" />

            </div>
            <div className='card-content'>
            <div className='card-title'>
                <h3>{name}</h3>
            </div>
            <div className='card-body'>
                <p> Need skill:  {skill}</p>
            </div>
            <div className='card-body'>
                <p>experimentce minimum : {year} year</p>
            </div>
            <div className='card-body'>
                <p>salary: {salary}$</p>
            </div>
            </div>
           
            <div className='job-section-btn'>
               <Link to={`/addjob/${_id}`}>
               <button>
                    View More
                </button>
               </Link>
            </div>

           </div>
        </div>
    );
};

export default JobSections;