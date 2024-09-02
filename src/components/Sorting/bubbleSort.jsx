function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


const bubbleSort = async (barProperty, setBarProperty ) => {
  
  let array = barProperty;

  console.log(barProperty , array)
 let cnt =0;
  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length -i-1; j++) {

      //console.log(array)
      let firstElementId = array[j].id;
      let secondElementId = array[j + 1].id;

      let firstElementHeight = array[j].height;
      let secondElementHeight = array[j + 1].height;


      //SELECTION
      //console.log(barProperty);
        
      const a=array.map((bar) => {
          if (firstElementId === bar?.id) {
            return { ...bar, color: "selected-bar" };
          } else if (secondElementId === bar?.id) {
            return { ...bar, color: "selected-bar" };
          } else {
            return bar;
          }
        })
        array=a;
        setBarProperty(a)
        const y = array.map((bar)=>({...bar , color:"normal-bar"}))
        array=y

      
      await delay(400);
      //console.log(barProperty)
      

     

      //Traverse
      //console.log(barProperty +"\n");
      if (firstElementHeight > secondElementHeight) {
        
        
          const temp = array.map((bar) => {
            if (firstElementId == bar?.id) {
                
              return {
                ...bar,
                
                height: Number(secondElementHeight),
              };
            } else if (secondElementId == bar?.id) {
                
              return {
                ...bar,
                
                height: Number(firstElementHeight),
              };
            }

            return { ...bar };
          })

          
         

          //console.log("Swapped\n")
          //console.log(temp);

          
          array=temp
          setBarProperty(temp);
          
          
        
        
       
        
      }
      
      
      const z = array.map((bar , index)=>{
        
        
            return {...bar , color:"normal-bar"}
    })
      
      setBarProperty(z)
    await delay(400);
    }
  }

  

};

export default bubbleSort;
