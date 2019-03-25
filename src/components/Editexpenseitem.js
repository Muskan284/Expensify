import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {starteditexpense} from '../action/expense';

class Editexpenseitem extends React.Component{
    constructor(props){
        super(props);
        this.ondeschange=this.ondeschange.bind(this);
        this.onnotechange=this.onnotechange.bind(this);
        this.onamountchange=this.onamountchange.bind(this);
        this.onadd=this.onadd.bind(this);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?props.expense.amount:0,
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
            const id=this.props.match.params.id;
            this.props.dispatch(starteditexpense(id,{
                description:this.state.description,
                note:this.state.note,
                amount:Number(this.state.amount),
                createdat:this.state.createdat
            }));
            this.props.history.push('/dashboard');
    }
   render() {
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
        <button>Edit expense</button>
        </form>
  </div>
       )
   }
}

const mapStateToProps = (state,props)=>{
    return {
        expense:state.expense.find((item)=>{
            return item.id===props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(Editexpenseitem);