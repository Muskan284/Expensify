export  const settextfilter= (text) => (
    {
       type:'TEXT_FILTER',
       text
    }
)

export const sortbydate = () =>(
    {
      type:'SORT_BY_DATE',
      sortby:'date'
    }
)

export const sortbyamount =() => (
    {
        type:'SORT_BY_AMOUNT',
        sortby:'amount'
    }
)

export const setstartdate = (st=undefined) =>({
    type:'SET_START',
    st
})

export const setenddate = (end=undefined) =>({
    type:'SET_END',
    end
})
