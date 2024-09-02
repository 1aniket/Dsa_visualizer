import toast from "react-hot-toast";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const SelectionSort = async (barProperty, setBarProperty ) => {
  console.log("hallo");
  let array = barProperty;

  console.log(array);

  for (let i = 0; i < array.length - 1; i++) {
    let min_ind = i;
    let j = i + 1;

    for (; j < array.length; j++) {

    //TO COLOR BAR THAT ARE CURRENT SELECTED
      let iId = array[i].id;
      let jId = array[j].id;
      {
        const a = array.map((bar) =>
          bar.id === iId || bar.id === jId
            ? { ...bar, color: "selected-bar" }
            : bar
        );

        setBarProperty(a);
        await delay(10);
        array = a;
      }

      {
        const a = array.map((bar)=>{return {...bar , color:"normal-bar"}})

        setBarProperty(a);
       
        array = a;
      }


      //COMPARISON

      if (array[min_ind].height > array[j].height) {
        
        min_ind = j;
      }


      //SWAP ALGO
      
    }
    {
        let swap1 = array[i].id;
        let swap2 = array[min_ind].id;
        const a = array.map((bar) =>
          bar.id === swap1 || bar.id === swap2
            ? { ...bar, color: "swapping-bar" }
            : bar
        );

        setBarProperty(a);
        array = a;
        await delay(400)

        let h1 = array[i].height;
        if(j==array.length)
        {
           j--; 
        }
        let h2 = array[min_ind].height;
        const b = array.map((bar) => {
          if (bar.id === swap1) {
            return { ...bar, height: h2 };
          } else if (bar.id === swap2) {
            return { ...bar, height: h1 };
          } else {
            return bar;
          }
        });
        setBarProperty(b);
        await delay(10);
        array = b;
      }

   
  }

 

 
  return;
};

export default SelectionSort;
