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

export default getvisibleexpense;