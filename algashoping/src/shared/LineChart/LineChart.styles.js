import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column ;
        
    span {
        font-size: 12px;
        color: #616161;
    }

`
export const ProgressBar = styled.div `
    height: 14px;
    border-radius: 3px;
    background-color: ${props => props.color ? props.color : '#004D61'};
    width: ${props => props.percentage ? props.percentage : 0}%;


`
