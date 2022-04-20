import React, { useContext } from 'react'
import bgimg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form'
import Signin from './signin';
import { LoginContext } from '../Contexts/LoginContext';
import { Link } from 'react-router-dom';

function Login() {
    const {setUsername} = useContext(LoginContext);

    const{register, handleSubmit, watch, formState:{errors}} = useForm();
    const onSubmit = (data) => {
        setUsername(data.username);
    }

  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Login</h2>
                <span>Login and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username'/>
                    <input type="password" {...register("password")}placeholder='password'/>
                    {errors.username?.type === "required"}
                    {errors.password?.type === "required"}
                    <button className='btn'>LogIn</button>
                    <Link to="/signin">Create a new Acount ?</Link>
                </form>
            </div>
            <div className='col-2'>
                <img src={bgimg} atl=""/>
            </div>
        </div>
    </section>
  )
}

export default Login