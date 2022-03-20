import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.svg'
import Button from "./Button"
import MobileNav from "./MobileNav"

const Header = ({links}) => {
  return (
    <>
      <Navbar>
        <div>
          <Link href='/'>
            <a>
              <Image src={logo} alt='breally logo'/>
            </a>
          </Link>
          <ul>
            {
              links.filter(link => link.url.substring(1) !== '').map(link => (
                <li key={link.id}>
                  <Link href={link.url}>
                    <a>
                      {link.url.substring(1)}
                    </a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <Button type="button" text="Contact us"/>
      </Navbar>
      <MobileNav links={links}/>
    </>
  )
}

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    border: 1px solid #F1F0F0;
    padding: 1.5rem 4rem;
    position: fixed;
    width: 100vw;
    top: 0;
    background: #fff;
    z-index: 2;
    div {
      display: flex;
      align-items: center;
      ul {
        list-style: none;
        display: flex;
        margin: 0 6rem;
        li {
          a {
            text-decoration: none;
            padding: 0 1.5rem;
            color: ${({ theme }) => theme.colors.dark};
          }
        }
      }
    }
    @media (max-width: 820px) {
      display: none;
    }
`

export default Header