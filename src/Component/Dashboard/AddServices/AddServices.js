import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = data => {
        console.log(data)
        axios.post('https://obscure-hollows-04792.herokuapp.com/addservice' , data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added explore successfuly')
                reset()
            }
        })
    }
    return (
        <div>
            <h2>POST THE JOB CIRCUAL</h2>
        <form className='main-from ' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Job Name" /> 
      <br/><br/>
      <input type="email" {...register("email")} placeholder="HR-Mail" /><br/><br/>
      <textarea {...register("description" )} placeholder="Job-Description" /><br/><br/>
      <input type="number" {...register("salary")} placeholder="salary-$" /><br/><br/>
      <input type="text" {...register("skill")} placeholder="Need-skill" /><br/><br/>

      <input type="number" {...register("year")} placeholder="exprementce-year" /><br/><br/>
      <input {...register("img" )} placeholder="img url" /><br/><br/>


      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddServices;