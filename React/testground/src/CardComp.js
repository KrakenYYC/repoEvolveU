import React from 'react';

    const CardComp = (props) => ( 
        // { console.log('error for div',props.account)}
        <div className="Carddesign" id={props.account.id}>
            <h3> Welcome to your account {props.account.name} </h3> 
            <h3> This is your current account balance: ${props.account.balance} </h3>
            <input type = 'text' id = {'dollarAmount' + props.account.id}/>
            <br></br> 
            <button id="depositButton" onClick={ props.depAcc }> Deposit </button>
            <button id="withdrawlButton" onClick={ props.witAcc }> Withdrawl </button>
            <button id="deleteButton" onClick={ props.delAcc }> Delete Account </button>
            <br></br>
        </div>
    )

export default CardComp


