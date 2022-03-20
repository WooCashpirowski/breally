import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messageStyle, setMessageStyle] = useState('')

    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const auth = {
        username: process.env.NEXT_PUBLIC_API_LOGIN,
        password: process.env.NEXT_PUBLIC_API_PASSWORD
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/newsletter`, { email }, { auth });
            setMessage(res.data.message);
            if (res.status === 200) {
                setMessageStyle('success')
            }
            
        } catch (error) {
            setMessage(error.response.data.message);
            setMessageStyle('error')
        }
        setEmail('');
    }

    return (
        <Section>
            <h1>Sign up for Newsletter</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Type your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button type="submit" text="Submit"/>
            </form>
            <p className={messageStyle}>{message}</p>
        </Section>
    )
}

const Section = styled.section`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 4rem;
        font-size: 2.5rem;
    }
    form {
        margin-bottom: 3rem;
        input {
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 1.5rem;
            background: ${({theme}) => theme.colors.lightGrey};
            margin-right: 1rem;
            outline: none;
            width: 320px;
            &:focus {
                box-shadow: inset 0 0 5px ${({theme}) => theme.colors.purple};
            }
        }
    }
    p {
        font-size: 14px;
        &.success {
            color: ${({theme}) => theme.colors.green};
        }
        &.error {
            color: red;
        }
    }
    @media (max-width: 580px) {
        padding: 0 4rem;
        text-align: center;
        h1 {
            font-size: 2rem;
        }
        form {
            display: flex;
            flex-direction: column;
            input {
                width: 100%;
                text-align: center;
                margin-bottom: 2rem;
            }
        }
    }
`

export default Newsletter