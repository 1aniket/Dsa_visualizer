import React from "react";
import toast from "react-hot-toast";
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
const updateBoxProperty= async (nums , setNums , setBtnState , target)=>{


    let start=0;
    let end =nums.length-1;
    let mid =0;
    let midId=0;
    


    while(start<=end)
    {
        //Setting Box Property 
        mid = Math.floor((start+end)/2);
        let midId=nums[mid]?.id
        let startId= nums[start]?.id
        let endId= nums[end]?.id

        delay(200)
        let prevNums =[];

        console.log("Start " +start+ " middle " +  mid +" end "+ end)

        for(let i=0;i<nums.length;i++)
        {
            if(midId==nums[i]?.id)
            {
                prevNums.push({id:nums[i]?.id ,number:nums[i]?.number, property:"wrong"})
            }else if(endId==nums[i]?.id)
            {
                prevNums.push({id:nums[i]?.id ,number:nums[i]?.number, property:"selected"})
            }else if(startId==nums[i]?.id){
                    prevNums.push({id:nums[i]?.id ,number:nums[i]?.number, property:"selected"})
            }else
            {
                prevNums.push(nums[i])
            }
            

            
        }

        setNums(prevNums)
        
        await delay(1500);

       if(nums[mid]?.number==target)
       {
            setNums((prevNums)=>
                prevNums?.map((box )=>{
                    //console.log(midId + "------------"+ box.id +"------------------------ "+ (midId === box.id))
                    return midId===box.id  ? {...box , property:"succeess"} : {...box,property:"dim"}  
                }
                )
            )


            toast.success("Number Found" , {position:'top-center' , icon:"🎊"});

            return
       }else if(nums[mid]?.number > target)
       {
        end=mid-1;
       }else
       {
        start=mid+1;
       }
       
       
       setNums((prevNums)=>
        prevNums?.map((box )=>{
            //console.log(midId + "------------"+ box.id +"------------------------ "+ (midId === box.id))
            return {...box , property:"normal"}  
        }
        )
    )
    
    setNums((prevNums)=>
        prevNums?.map((box )=>{
            //console.log(midId + "------------"+ box.id +"------------------------ "+ (midId === box.id))
            return {...box , property:"wrong"}  
        }
        )
    )
    
    }
    
    toast.error("Not Found" , {position:"top-center"})
return ;

}

const BinarySearch=(nums , setNums , setBtnState , target)=>{
    
    
    let sortedarray = nums;

    
    

    for(let i=0;i<sortedarray.length;i++)
    {
        for(let j=0;j<sortedarray.length-i;j++)
        {
            if(sortedarray[j]?.number>sortedarray[j+1]?.number)
            {
                let temp = sortedarray[j];
                sortedarray[j]=sortedarray[j+1];
                sortedarray[j+1]=temp;
            }
        }
    }


   setNums(sortedarray)

    updateBoxProperty(nums , setNums , setBtnState , target);

    

    



}

export default BinarySearch;