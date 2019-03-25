import uuid from 'uuid'; 
import database from '../firebase/firebase';

export const addexpense = (expense) =>(
    {
        type:'ADD_EXPENSE',
        expense
    }
)

export const startaddexpense=(expensedata={})=>{
    return (dispatch,getState)=>{
       const uid=getState().auth.uid;
       const {
        amount=undefined,
        description='',
        note='',
        createdat=undefined
       }=expensedata;
       const expense={description,note,amount,createdat};
       database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
           dispatch(addexpense({
               id:ref.key,
               ...expense
           }))
       })
    }
}


export  const removeexpense = (id)=>(
    {
        type:'REM_EXPENSE',
        expense:{
          id
        }
    }
)

export const startremoveexpense =(id)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeexpense(id))
        })
    }
}

export  const editexpense = (id,update)=>(
    {
        type:'EDIT_EXPENSE',
        id,
        update
    }
)

export const starteditexpense=(id,update)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update({
            'description':update.description,
            'note':update.note,
            'amount':update.amount,
            'createdat':update.createdat
        }).then(()=>{
            console.log(hey);
            dispatch(editexpense(id,update));
        }).catch((e)=>{
            console.log(hey1);
        })
    }
}

export const setexpense=(expense)=> ({
    type:'SET_EXPENSE',
    expense
})

export const startsetexpense =() => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        database.ref(`users/${uid}/expenses`).on('value',(snapshot)=>{
            const expense =[];
            snapshot.forEach((childSnapshot)=>{
               expense.push({
                   id:childSnapshot.key,
                   description:childSnapshot.node_.children_.root_.value.value_,
                   note:childSnapshot.node_.children_.root_.right.value.value_,
                   amount:childSnapshot.node_.children_.root_.left.left.value.value_,
                   createdat:childSnapshot.node_.children_.root_.left.value.value_
               })
            })
            dispatch(setexpense(expense));
        })
    }
}