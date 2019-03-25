import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import {startremoveexpense} from '../action/expense';

const Expenseitem =(props)=> (
  <div>
      
        <h3>{props.item.note}</h3>
        <p>{props.item.description}-{props.item.amount}</p> 
        <button onClick={()=>{
            props.dispatch(startremoveexpense(props.item.id))
        }}>Remove</button>
        <NavLink to={`/edit/${props.item.id}`}>edit this expense</NavLink>
  </div>
)

const mapStateToProps = (state) => {
    return {
        expense:state.expense
    }
}

export default connect(mapStateToProps)(Expenseitem);

