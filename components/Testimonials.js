import styled from "styled-components"
import Image from 'next/image'
import quotation_mark from '../public/quotation-mark.svg'

const Testimonials = ({data}) => {
    return (
        <Section>
            <div>
                <Image src={quotation_mark} alt='quotation-mark'/>
            </div>
            <p>{data.text}</p>
            <p>{data.author}</p>
        </Section>
    )
}

const Section = styled.section`
    padding: 5rem 10vw;
    background: ${({theme}) => theme.colors.dark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        margin-bottom: 5rem;
    }
    p {
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 300;
        &:first-of-type {
            letter-spacing: 0.5px;
            color: ${({theme}) => theme.colors.lightGrey};
            margin-bottom: 7rem;
        }
        &:last-of-type {
            color: ${({theme}) => theme.colors.grey};
        }
    }
`

export default Testimonials