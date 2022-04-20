import React from 'react'
import bgimg from '../assets/img1.jpg'
import { Link } from 'react-router-dom'

function SignInComplete() {
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Project</h2>
                <span>Login and enjoy the service</span>
                <br/><br/>

                <Link to="/">
                    <button className='btn'>LogIn</button>
                </Link>
            </div>
            <div className='col-2'>
                <img src={bgimg} atl=""/>
            </div>
        </div>
    </section>
  )
}

export default SignInComplete