import React from "react";
import { useRouter } from "next/router";
import records from '../../data.json';    

export default function Demo() {
    // console.log(records)

    const router = useRouter();
    const { params = [] } = router.query;

   if(params.length === 2) {
    const minBudget = params[0];
    const maxBudget = params[1];

    const newArray = records.filter((element, index) => {
        return (element.price  >= minBudget && element.price <= maxBudget)
    }).map((element) => element)     

    console.log("New array: ",newArray);


    }   
    return(
        <div>
            this is a page
    
        </div>
    );
}