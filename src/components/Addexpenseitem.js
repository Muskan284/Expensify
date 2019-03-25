import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {startaddexpense} from '../action/expense';
//import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates';
import {history} from '../routes/Approuter'


class Addexpenseitem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:'',
            note:'',
            amount:0,
            createdat:234,
            focused:false,
            error:undefined
        };
    }
    ondeschange= (e) => {
        const des=e.target.value;
        this.setState(()=>({
            description:des
        }))
    }
    onnotechange = (e) => {
        e.persist();
        this.setState(()=>({
            note:e.target.value
        }))
    }
    onamountchange = (e) => {
        e.persist();
        this.setState(()=>({
            amount:e.target.value
        }))
    }
    onDateChange =(createdat)=>{
       this.setState(()=>({createdat}))
    }
    onFocusChange =({focused})=>{
        this.setState(()=>({focused}))
    }
    onadd=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
          this.setState(()=>({
              error:'enter value first'
          }))
        }else{
            this.setState(()=>({
                error:''
            }))
            this.props.dispatch(startaddexpense({
                description:this.state.description,
                note:this.state.note,
                amount:Number(this.state.amount),
                createdat:this.state.createdat
            }));
            history.push('/dashboard');
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onadd}>
                {this.state.error  && <p>{this.state.error}</p>}
                <input type='text'
                       placeholder='Description' 
                       value={this.state.description}
                       onChange={this.ondeschange}>
                </input>
                <textarea type='text' 
                          placeholder='Note'
                          value={this.state.note}
                          onChange={this.onnotechange}>
                </textarea>
                <input type='number'
                       placeholder='Amount'
                       value={this.state.amount}
                       onChange={this.onamountchange}>
                </input>
                <button>Add expense</button>
                </form>
          </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        expenses:state.expense
    }
}

export default connect(mapStateToProps)(Addexpenseitem);

