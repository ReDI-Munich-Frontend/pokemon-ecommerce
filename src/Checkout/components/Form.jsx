import React, {useState}  from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {setCustomerDetail} from "../../common/customerInfo"

const FormWrapper = styled.div`
    margin-bottom: 2rem;
    max-width: 1000px;
    margin: auto;
    background-color: black;
    color: white;
    justify-content: centre;
    align-item: center;
`;
const PanelStyle = styled.div`
  margin: 2rem;
  background-color: white;
  padding: 2rem;
  display: block;
`;
const FormLayout = styled.form`
    display: block;
    margin: 2px;
`;
const Label = styled.label`
    font-weight: 20px;
    color: black;
    display: block;
`;
const Input = styled.input`
    width: 100px;
    height: 15px;
`;
const Address = styled.textarea`
width: 100px;
    height: 15px
`;
const SubmitButton = styled.button`
    width : 60px;
    height: 30px;
    display: block;
    margin: 5px;
`;


function Form() {
  const [customer, setCustomer] = useState();
  const history = useHistory();
    const handleChange = (e)=>{
        const name=e.target.value;
        setCustomer(name);
        setCustomerDetail(name);
    }
const handleSubmit = () =>{
    history.push(`/order-completed`);
}

    return (
        <FormWrapper>
            <h1>CHECKOUT</h1>
            <PanelStyle>
                <FormLayout onSubmit={handleSubmit}>
                    <Label>NAME</Label>
                    <Input type="text" maxLength="20" minLength="3" value={customer} onChange={(e)=>handleChange(e)}/>
                    <Label>EMAIL</Label>
                    <Input type="email" />
                    <Label>CITY</Label>
                    <Input type="text-area" />
                    <Label>ADDRESS</Label>
                    <Address />
                    <Label>CARD</Label>
                    <Input type="number"/>
                    <SubmitButton>SUBMIT</SubmitButton>
                </FormLayout>
            </PanelStyle>
        </FormWrapper>
    )
}
export default Form

