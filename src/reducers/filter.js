

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

export default filterreducer;