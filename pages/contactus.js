import React, { useState } from "react";
import { useRouter } from 'next/router';

const  Contactus = () => {

    const router = useRouter();

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [desc, setdesc] = useState("")

    const hendelSubmit = (e) => {
        e.preventDefault()
        const data = { name, email, phone, desc };
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                setname('')
                setemail('')
                setphone('')
                setdesc('')
                router.push({
                    pathname: '/',
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const hendelChange = (e) => {
        if (e.target.name == "name") {
            setname(e.target.value)
        } else if (e.target.name == "email") {
            setemail(e.target.value)
        } else if (e.target.name == "phone") {
            setphone(e.target.value)
        } else if (e.target.name == "desc") {
            setdesc(e.target.value)
        }
    }

    return (
        <>
            <form onSubmit={hendelSubmit} className="form">
                <div className="inputform">
                    <label className="inputlabel" htmlFor="name">Enter Your Name</label>
                    <input className="input" type="text" id="name" onChange={hendelChange} name="name" value={name} required/>
                </div>
                <div className="inputform">
                    <label className="inputlabel" htmlFor="email">Enter Your Email</label>
                    <input className="input" type="email" id="email" name="email" value={email} onChange={hendelChange} required/>
                </div>
                <div className="inputform">
                    <label className="inputlabel" htmlFor="phone">Enter Your Phone No</label>
                    <input className="input" type="number" id="phone" name="phone" value={phone} onChange={hendelChange} required/>
                </div>
                <div className="inputform">
                    <label className="inputlabel" htmlFor="desc">Enter Your Comment</label>
                    <textarea className="input textarea"  type="text" id="desc" name="desc" value={desc} onChange={hendelChange} required/>
                </div>
                <div className="btndiv"><input className="btn" type="submit" /></div>
            </form>
        </>
    )

};

export default Contactus;