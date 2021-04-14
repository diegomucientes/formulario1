import React, {useState} from 'react';

//Cree una forma como la siguiente estructura metálica con un componente React y ganchos. 
//Luego, muestre en tiempo real los datos que se ingresan en el siguiente formulario
const userForm = (props) => {

    const {inputs,setInputs} = props;
    const createUser = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });

    };
    
    return( 
        <form className ="formulario" onSubmit = {createUser}>
             <div className = "formbox">
                <label htmlFor="firstName"> First Name: </label> 
                <input onChange = {createUser} type="text" name="firstName"/>
            </div>
            <div  className = "formbox">
                <label htmlFor="lastName">Last Name: </label> 
                <input onChange = {createUser} type="text" name="lastName"/>
            </div>

            <div  className = "formbox">
                <label htmlFor="eMail">Email Address: </label> 
                <input onChange = {createUser} type="text" name="eMail"/>
            </div>
            <div  className = "formbox">
                <label htmlFor="password">Password: </label>
                <input onChange = {createUser} type="password" name="password"/>
            </div>
            <div  className = "formbox">
                <label htmlFor="confirmation">Confirm Password: </label>
                <input onChange = {createUser} type="password"name="confirmation"/>
            </div>

        </form>
       
    );

};
export default userForm ; 