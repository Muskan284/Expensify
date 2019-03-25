
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
           if(item.id===action.id){
           return {
               ...item,
               ...action.update
           }}
           else
           return item;
     })
     case 'SET_EXPENSE':
     return action.expense;
     default :
        return state;
   }
}


export default expensereducer;
