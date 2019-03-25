import {createStore,combineReducers} from 'redux' ;
import uuid from 'uuid'; 


const addexpense = (
{
    amount=undefined,
    description='',
    note='',
    createdat=undefined
}
) =>(
    {
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            amount,
            description,
            note,
            createdat
        }
    }
)

const removeexpense = (id)=>(
    {
        type:'REM_EXPENSE',
        expense:{
          id
        }
    }
)

const editexpense = (id,update)=>(
    {
        type:'EDIT_EXPENSE',
        id,
        update
    }
)

const settextfilter= (text) => (
    {
       type:'TEXT_FILTER',
       text
    }
)

const sortbydate = () =>(
    {
      type:'SORT_BY_DATE',
      sortby:'date'
    }
)

const sortbyamount =() => (
    {
        type:'SORT_BY_AMOUNT',
        sortby:'amount'
    }
)

const setstartdate = (st=undefined) =>({
    type:'SET_START',
    st
})

const setenddate = (end=undefined) =>({
    type:'SET_END',
    end
})


const getvisibleexpense = (expense,{text,sortby,startdate,lastdate}) => {
    
    return expense.filter((item)=>{
        const last= typeof lastdate!=='number'  || item.createdat <= lastdate;
        const start =typeof startdate!=='number' || item.createdat >=startdate;
        const tex= item.description.toLowerCase().includes(text.toLowerCase());
        if(start && last && tex)
          return item;
    }).sort((a,b) => {
      if(sortby=='date'){
          return a.createdat <= b.createdat ? 1 :-1;
      }
      else if (sortby=='amount') {
          return a.amount <= b.amount ? 1 : -1;
      }
    });
}

const defaultexpense=[]
const expensereducer = (state=defaultexpense,action) => {
   switch (action.type) {
     case 'ADD_EXPENSE':
     return [
         ...state,
         action.expense
     ];
     case 'REM_EXPENSE':
     return state.filter((item)=>{
          if(item.id!==action.expense.id)
            return item;
     })
     case 'EDIT_EXPENSE':
     return state.map((item)=>{
           if(item.id===action.id)
           return {
               ...item,
               ...action.update
           }
           else
           return item;
     })
     default :
        return state;
   }
}

const defaultfilter={
    sortby:'',
    text:'',
    startdate:undefined,
    lastdate:undefined
}
const filterreducer= (state=defaultfilter,action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortby:'date'
        }
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortby:'amount'
        }
        case 'SET_START':
        return {
            ...state,
            startdate:action.st
        }
        case 'SET_END':
        return {
            ...state,
            lastdate:action.end
        }
        default :
           return state;
      }
}

//const store = configureStore();
const store=createStore(
     combineReducers(
         {
             expense:expensereducer,
             filter:filterreducer
         }
     )    
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleexpense=getvisibleexpense(state.expense,state.filter);
    console.log(visibleexpense);
});


const one=store.dispatch(addexpense({}));
const two=store.dispatch(addexpense({description:'this is my first rent',
                                     note:'rent',
                                     amount:100,
                                     createdat:1000}));
const three=store.dispatch(addexpense({description:'this is water pay',
                                     note:'water',
                                     amount:700,
                                     createdat:7000}))
const four=store.dispatch(addexpense({description:'this is electric pay',
                                     note:'water',
                                     amount:1000,
                                     createdat:100}))
//store.dispatch(removeexpense(one.expense.id));
store.dispatch(editexpense(two.expense.id,{amount:500}));
//store.dispatch(settextfilter('rent'));
store.dispatch(sortbyamount());
//store.dispatch(sortbydate());
store.dispatch(setstartdate(1));
store.dispatch(setenddate(10000));




const demostate={ 
    expenses:[
        {
            id:'ertyuio',
            amount:100,
            note:"",
            description:"",
            createdat:100
        }
    ],
    filters:{
        sortby:'date',
        text:"rent",
        startdate:undefined,
        lastdate:undefined
    }
}