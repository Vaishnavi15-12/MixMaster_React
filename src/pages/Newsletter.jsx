import axios from 'axios';
import React from 'react'
import { Form,redirect,useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try{
    const response = await axios.post(newsletterUrl,data);
    // console.log(response);
    toast.success(response.data.msg);
    return redirect('/');

  } catch(error){
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};


const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className='form' method='POST' >
      <h4 style={{textAlign:'center',marginBottom:'2rem'}}>Our newsletter</h4>
      <div className="form-row">
        <label htmlFor='name' className='form-label'>Name</label>
        <input type='text' className='form-input'  name='name' id='name' required></input>
      </div>
      <div className="form-row">
        <label htmlFor='lastName' className='form-label'>Last Name</label>
        <input type='text' className='form-input'  name='lastName' id='lastName' required></input>
      </div>
      <div className="form-row">
        <label htmlFor='email' className='form-label'>email</label>
        <input type='email' className='form-input'  name='email' id='email' required defaultValue="test@test.com"></input>
      </div>
      <button className='btn btn-block' style={{marginTop:'1rem'}} disabled={isSubmitting} type='submit'>{isSubmitting?'submitting':'submit'}</button>
    </Form>
  )
}

export default Newsletter
