import React from 'react';
import {connect} from 'react-redux';
import Expenseitem from './Expenseitem';
import getvisibleexpense from '../selectors/expense';
import {settextfilter,sortbyamount,sortbydate} from '../action/filter';

const Expensepage = (props) => (
    <div>
       <h1>Expenses List</h1>
       <input type='text' value={props.filters.text} onChange={(e)=>{
             props.dispatch(settextfilter(e.target.value))
       }}></input>
       <select value={props.filters.sortby}
           onChange={(e)=>{
           if(e.target.value=='date'){
               props.dispatch(sortbydate());
           }else if(e.target.value=='amount'){
               props.dispatch(sortbyamount());
           }
       }}>
           <option value='date'>Date</option>
           <option value='amount'>Amount</option>
       </select>
       {
           props.expenses.map((item)=>{
               return <Expenseitem item={item}/>
           })
       }
    </div>
)

const mapStatetoProps = (state)=> {
    return {
        expenses:getvisibleexpense(state.expense,state.filter),
        filters:state.filter
    }
}

export default connect(mapStatetoProps)(Expensepage);