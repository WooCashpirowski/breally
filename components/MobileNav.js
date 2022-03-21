import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Button from "./Button"

const MobileNav = ({links}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <Navbar>
                <Link href='/'>
                    <a>
                    <Image src={logo} alt='breally logo'/>
                    </a>
                </Link>
                <button className={isExpanded ? 'lines' : ''} type="button" onClick={() => setIsExpanded(!isExpanded)}>
                    <div></div>
                    <div></div>
                </button>
            </Navbar>
            <Navigation className={isExpanded ? 'expanded' : ''}>
                <ul>
                    {
                        links.filter(link => link.url.substring(1) !== '').map(link => (
                            <li key={link.id}>
                                <Link href={link.url}>
                                    <a>{link.url.substring(1)}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Button type="button" text="Contact us"/>
            </Navigation>
        </>
    )
}

const Navbar = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    position: fixed;
    width: 100%;
    z-index: 3;
    padding: 0.5rem 2rem;

    button {
        background: none;
        border: none;
        position: relative;
        width: 32px;
        height: 32px;
        div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background: ${({theme}) => theme.colors.dark};
            transition: transform 0.3s ease;
        }
        &.lines {
            div:first-of-type {
                transform: rotate(45deg);
            }
            div:last-of-type {
                transform: rotate(-45deg);
            }
        }
    }

    @media (max-width: 820px) {
        display: flex;
    }
`

const Navigation = styled.nav`
    height: 100vh;
    background: #fff;
    color: black;
    position: fixed;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    ul {
        list-style: none;
        text-align: center;
        li {
            margin: 2rem 0;
            a {
                text-decoration: none;
                color: ${({theme}) => theme.colors.dark};
                font-size: 3rem;
            }
        }
    }
    &.expanded {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
`

export default MobileNav