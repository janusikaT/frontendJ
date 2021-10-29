import React from "react";
import { Form, FormLabel } from "react-bootstrap";
import Footer from '../components/Footer'


const AddRestaurants = ()=> {
    return(
        <Form>
            <FormLabel>Name</FormLabel>
            <input type='text' value='name'/>
            <FormLabel>Address</FormLabel>
            <input type='text' value='name'/>
            <FormLabel>Name</FormLabel>
            <input type='text' value='name'/>
            <FormLabel>Name</FormLabel>
            <input type='text' value='name'/>
            <FormLabel>Name</FormLabel>
            <input type='text' value='name'/>
        </Form>
    )
}
<Footer/>

export default AddRestaurants