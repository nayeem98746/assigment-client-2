import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ShowjobPosts from '../ShowjobPosts/ShowjobPosts';

const ShowjobPost = () => {
    const [showjobpost, setShowjobpost]  = useState([])

    useEffect( () => {
        fetch('https://obscure-hollows-04792.herokuapp.com/applys')
        .then(res => res.json())
        .then(data => setShowjobpost(data))
    } , [])



    return (
        <div>
           <h2>Our Job Post interest: {showjobpost.length}</h2>
     
           <Container>
            <div>
              {
                showjobpost.map(jb => <ShowjobPosts
                  key={jb._id}
                  jb = {jb}
                ></ShowjobPosts>)
              }
            </div>
           </Container>


        </div>
    );
};

export default ShowjobPost;