import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config';
import NavBar from './navBar';
import FooterCar from './FooterCar';
import { GetBannerMargin } from "./functions";
const SignUp = () => {
    const banM = GetBannerMargin();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showErr, setShowErr] = useState('');          
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setErrors({
            name: '',
            email: '',
            phone: '',
            password: '',
        });
        setShowErr('');
    };
    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validate Name
        if (!name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else {
            newErrors.name = '';
        }

        // Validate Phone
        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must have 10 digits';
            valid = false;
        } else {
            newErrors.phone = '';
        }

        // Validate Email
        if (!email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        } else {
            newErrors.email = '';
        }

        // Validate Password
        if (!password.trim()) {
            newErrors.password = 'Password is required';
            valid = false;
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        // API Call
        const response = await fetch(``, {             //${API_URL}/api/auth/register
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
   
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowErr(error.msg);
                }
            } else {
                setShowErr(json.error);
            }
        }
    };
    return(
        <>
        <NavBar/>
         <section className= "sign-up" style={{marginTop:banM}}>
            <Container>
                <form method="POST" onSubmit={register}>
            
                    <h1>Sign Up</h1>
                    <p> Already a member? <span><Link to="/Login" style={{ color: '#169a59' }}> Login</Link></span></p>
                    
                    <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showErr && <div className="err" style={{ color: 'red' }}>{showErr}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>

                    <div className="btn-group">
                        <button className='first-but' type="submit" >Submit</button>
                    </div>

                    <div className="btn-group">
                        <button className='last-but' type="submit" onClick={resetForm}>Reset</button>
                    </div>
                        {errors.name && <div className="err" style={{ color: 'red' }}>{errors.name}</div>}
                        {errors.phone && <div className="err" style={{ color: 'red' }}>{errors.phone}</div>}
                        {errors.email && <div className="err" style={{ color: 'red' }}>{errors.email}</div>}
                        {errors.password && <div className="err" style={{ color: 'red' }}>{errors.password}</div>}
                </form>
            </Container>
        </section>
        <FooterCar/>
        </>
       
            );
}
export default SignUp;