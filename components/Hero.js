import styled from "styled-components"
import Image from 'next/image'
import 'animate.css';

const Hero = ({data}) => {
    return (
        <Section>
            <h1 className="animate__animated animate__fadeInUp">{data.text}</h1>
            <div>
                <Image src={data.img} alt='hero image' layout="fill" objectFit='cover' crossOrigin='true'/>
            </div>
        </Section>
    )
}

const Section = styled.section`
    height: 80vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    h1, div {
        flex: 1;
    }
    h1 {
        font-size: 4rem;
        font-weight: 500;
        margin-right: 2rem;
    }
    div {
        margin-left: 2rem;
        width: 100%;
        height: 70%;
        overflow: hidden;
        position: relative;
    }
    @media (max-width: 820px) {
        width: 100vw;
        height: 100vh;
        display: block;
        position: relative;
        margin-top: 0;
        h1 {
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            z-index: 1;
            height: 100%;
            color: ${({theme}) => theme.colors.lightGrey};
            background: rgba(0,0,0,0.5);
            padding: 50% 4rem 4rem;
        }
        div {
            margin: 0;
            height: 100%;
            z-index: 0;
        }    
    }
    @media (max-width: 480px) {
        h1 {
            font-size: 3.5rem;
        }
    }
`

export default Hero