import React from 'react'; 

const Results = props =>{
    const {firstName,lastName,eMail,password,confirmation} = props.data 
    return(
        <div>
            <p>First Name:{firstName}</p>
            <p>Last Name:{lastName}</p>
            <p>E-mail:{eMail}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirmation}</p>
        </div>
    );
};

export default Results;