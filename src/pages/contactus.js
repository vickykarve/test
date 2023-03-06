import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import img1 from '../img/img1.jpeg'
import SocialFollow from '../components/socialmedia'
const ContactUs = () => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const contactus = () => {
        if (firstName.length === 0) {
            toast.error('Enter First Name')
        } else if (lastName.length === 0) {
            toast.error('Enter Last Name')
        } else if (email.length === 0) {
            toast.error('Enter Email Id')
        } else if (title.length === 0) {
            toast.error('Enter Title')
        } else if (message.length === 0) {
            toast.error('Enter your Messsage')
        } else {
            //axios to send query to backend
        }

    }
    return (<div style={{ marginTop: 20 }}>
        <h2 style={{ textAlign: 'center', color: 'navy' }}>Contact Us</h2>
        <div className='row'>
            <div className='col'>

                <div style={styles.container} >
                    <div className='mb-3'>
                        <label>First Name</label>
                        <input
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                            className='form-control' type='text' />
                    </div>
                    <div className='mb-3'>
                        <label>Last Name</label>
                        <input
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                            className='form-control' type='text' />
                    </div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='form-control' type='email' />
                    </div>
                    <div className='mb-3'>
                        <label>Title</label>
                        <input
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className='form-control' type='text' />
                    </div>
                    <div className='mb-3'>
                        <label>Message</label>
                        <textarea
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            rows='6'
                            style={{ resize: 'none' }}
                            className='form-control'>
                        </textarea>
                    </div>
                    <div className='mb-3' style={{ marginTop: 10 }}>
                        <button onClick={contactus} style={styles.Button}>
                            Send
                        </button>

                    </div>

                </div>
            </div>
            <div className='col'>
                <div>
                    <p >
                        <p style={{ marginTop: 30, fontWeight: 700, fontFamily: 'sans-serif', fontSize: 30, fontStyle: 'italic', color: 'royalblue' }}>
                            How can we Help?
                        </p>
                        <p>
                            <img src={img1}
                                alt="contact image"
                                className="rounded mx-auto d-block"
                                style={{ height: 300, width: 550, display: 'block' }} />
                        </p>
                        <p style={{ marginTop: 15, fontSize: 20, fontFamily: 'sans-serif', fontStyle: 'inherit', color: 'dimgrey', fontWeight: 600 }}>
                            <p>Email  :  barber's_choice@gmail.com</p>
                            <p>Address: The Kamal Villa,
                                        Borivli, Mumbai,
                                        Maharashtra, India </p>
                            <p>Phone  : +91-8483826237</p>
                        </p>
                        <header />
                        <SocialFollow />

                    </p>
                </div>
            </div>
        </div>


    </div>)
}


const styles = {
    container: {
        width: 450,
        height: 600,
        padding: 20,
        position: 'relative',
        top: 0,
        left: -150,
        bottom: 20,
        margin: 'auto',
        marginTop: 20,
        borderColor: 'navy',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    Button: {
        position: 'relative',
        width: '100%',
        height: 40,
        backgroundColor: 'navy',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
    },
}
export default ContactUs