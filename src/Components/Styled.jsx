import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${(props)=>(props.color ? props.color:'white')};
width:190px;
margin:10px;
border-radius:5px;
height:40px;
// border:dotted black;
border:${(props)=>(props.border)};
// background-color:blue;
color:${(props)=>(props.text ? props.text:'black')};

&:hover {
    cursor:pointer;
     background-color: ${(props) => props.color}
}
`


function Styled (){
   

    return(
        <>
        <div>
            <h1>Styled Components</h1>
          <div className = "Table"><StyledButton color='blue' border='none'>Primary Button</StyledButton>
            <StyledButton color = 'white' border = '1px solid gray'>Default Button</StyledButton>
            <StyledButton border = 'dotted grey'>Secondary Button</StyledButton>
            <StyledButton border = 'none'>Dashed Button</StyledButton>
            <StyledButton border = 'none' text='skyblue'>Link Button</StyledButton>
 </div>
        </div>
        </>
    )

}
export {Styled}