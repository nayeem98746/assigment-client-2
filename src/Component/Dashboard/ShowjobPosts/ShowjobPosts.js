import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


const ShowjobPosts = ({jb}) => {
    const {fristName,lastName ,email , phone ,country,resume} = jb

    const [pdfFile, setPdfFile]=useState(null);

 
    return (
        <div>
            
           <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>country</th>
      <th>resume</th>
    </tr>
  </thead>
  {
    <tbody>
    <tr>
      
      <td>{fristName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{country}</td>
      <td>{resume}</td>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
    
    <Viewer>

    </Viewer>
      </Worker>
    </tr>
  
   
  </tbody>}
</Table>
        </div>
    );
};

export default ShowjobPosts;