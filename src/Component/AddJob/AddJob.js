import { TextField ,Input ,Button} from '@mui/material';
import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddJob.css';

const AddJob = () => {

    const {serviceId} =useParams();

    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://obscure-hollows-04792.herokuapp.com/addservice`)
        .then(res => res.json())
        .then(data => setDetails(data))
        // .then(data => console.log(data))
  
    },[])
    const users = details?.find(use => use._id === serviceId);



    const [fristName , setFristName] = useState('')
    const [lastName , setlastName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [country , setCountry] = useState('')
    const [resume , setResume] = useState(null)

    const handleSubmit = e => {
        console.log('test')
        e.preventDefault();
        // if (!resume){
        //     return;
        // }
        const formData = new FormData();
        console.log('okasjdfa');
        formData.append('fristName' , fristName)
        formData.append('lastName' , lastName)
        formData.append('email' , email)
        formData.append('phone' , phone)
        formData.append('country' , country)
        formData.append('resume' , resume)
        console.log(formData.entries);
        fetch('https://obscure-hollows-04792.herokuapp.com/applys', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
 if(data.insertedId){
    alert('applyed successfully')
 }
})
.catch(error => {
  console.error('Error:', error);
});



    }





    return (
       <div>
         <div className='job-des-main'>
            <h1>{users?.name}</h1>
            <p>job description : {users?.description}</p>
            <h5> Our expected salary: {users?.salary}$</h5>
            <h5> Skill: {users?.skill}</h5>
            <h5>experimentce year: {users?.year}</h5>
         </div>


        <form className='job-des-main'  onSubmit={e => handleSubmit(e)}>
        <TextField
        sx={{width: '50%'}}
        label="fristName"
        variant="standard" 
        onChange={e => setFristName(e.target.value)}
        required
        />
            <br />
        <TextField
        sx={{width: '50%'}}
        label="lastName"
        variant="standard" 
        onChange={e => setlastName(e.target.value)}
        required
        />
        <br />
        <TextField
        sx={{width: '50%' }}
        label="Email"
        type='email'
        onChange={e => setEmail(e.target.value)}
        variant="standard" 
        required
        />    <br />
        <TextField
        sx={{width: '50%' }}
        label="phone"
        type='number'
        variant="standard" 
        onChange={e => setPhone(e.target.value)}
        required
        /> <br />
        <TextField
        sx={{width: '50%' }}
        label="country"
        type='text'
        onChange={e => setCountry(e.target.value)}
        variant="standard" 
        required
        />
        <br />
        <label htmlFor="Upload Resume">Upload your Resume :  </label>
        <Input   
        multiple 
        type="file"
        onChange={e =>setResume(e.target.files[0])}
        />
        <br /> <br />
        <Button type="submit">
            applyed
        </Button>
            
        </form>
       </div>
    );
};

export default AddJob;