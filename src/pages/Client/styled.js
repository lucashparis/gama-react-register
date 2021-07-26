import styled from "styled-components";
import SectionTwoBg from "../../images/background/section-two-background.png";

export const SectionOne = styled.section`
height: 100vh;
display: flex;
align-items: center;
background-image: url('${ SectionTwoBg }');
background-size: cover;



@media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
}

@media (max-width: 600px) {
    width: 100%;
    margin 0;
    height: 100%;

    & img.logo {
        height: auto;
    }
}
`
export const Form = styled.form`
    width: 900px;
    align-items: center;
    margin: 0 auto;
    
    & label{
        font-size: 20px;
        margin-right: 10px;
    }
    & legend{
        font-weight: 700;
        font-size: 20px;
        margin-right: 10px;
    }

    & input{
        width: 100px;
        height: 25px;
        margin-right: 25px;
        padding: 3px;
        border-radius: 5px;
        box-shadow: 0 0 0 0;
        border: 3px;
        outline: 0;
    }

    & h1{
        text-align: center;
        color: #333;
        font-size: 35px;
    
    }
    & button{
        width: 100px;
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #75ac90;
        color: white;
        font-size: 20px;
        font-weight: 500;
        margin-top: 15px;
    }
`