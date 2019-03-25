import {createStore,combineReducers,applyMiddleware} from 'redux' ;
import  expensereducer from '../reducers/expense';
import  filterreducer from '../reducers/filter';
import  authreducer from '../reducers/auth';
import  thunk from 'redux-thunk';

export default ()=>{
    const store=createStore(
        combineReducers({
                expense:expensereducer,
                filter:filterreducer,
                auth:authreducer
            }),
        applyMiddleware(thunk)  
    );
    return store;
}

