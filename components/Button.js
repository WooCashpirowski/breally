import styled from "styled-components";

const Button = ({type, text}) => {
  return (
    <Btn type={type}>{text}</Btn>
  )
}

const Btn = styled.button`
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.purple};
    border: none;
    padding: 0.75rem 3.5rem;
    border-radius: 1.5rem;
    cursor: pointer;
`

export default Button