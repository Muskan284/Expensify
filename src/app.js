import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import './styles/style.scss' ;
import  Approuter,{history} from './routes/Approuter.js';
import Config from './store/config';
import {setenddate,settextfilter,setstartdate,sortbydate,sortbyamount} from './action/filter';
import {addexpense,removeexpense,editexpense,startsetexpense} from './action/expense';
import {login,logout} from './action/auth'
import getvisibleexpense from './selectors/expense';
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';



const store= Config();
/*store.subscribe(()=>{
    const state=store.getState();
    const visibleexpense=getvisibleexpense(state.expense,state.filter);
    console.log(visibleexpense);
});
store.dispatch(addexpense({description:'this is my first rent',
                                     note:'rent',
                                     amount:100,
                                     createdat:10000}));
store.dispatch(addexpense({description:'this is my water bill',
                                     note:'water bill',
                                     amount:500,
                                     createdat:6000}));
store.dispatch(settextfilter('i'));*/


const jsx= (
    <Provider store={store}>
        <Approuter /> 
    </Provider>
)

let hasrender=false;
const renderapp =() => {
    if(!hasrender){
        store.dispatch(startsetexpense());
        ReactDOM.render(jsx, document.getElementById('root'));
        hasrender=true;
    }
}

/*store.dispatch(startsetexpense());
ReactDOM.render(jsx, document.getElementById('root'));*/

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
       store.dispatch(login(user.uid));
       renderapp();
       if(history.location.pathname==='/')
       history.push('dashboard');
    }
    else{
       store.dispatch(logout());
       renderapp();
       history.push('/');
    }
})


