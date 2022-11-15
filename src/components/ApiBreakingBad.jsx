import React from 'react'
import {useFetch} from './hooks/index'
import Data from './Data'
import { LoadingQuote } from './LoadingQuote'

export const ApiBreakingBad=()=>{
    const {data,isLoading,hasError,previousQuote,nextQuote,handlerChange}=useFetch("https://www.breakingbadapi.com/api/quotes/")
    
    return(
        <>
            <h1>api breaking bad</h1>
            <hr></hr>
            {isLoading===false && <Data datos={data} change={handlerChange} siguiente={nextQuote} anterior={previousQuote}></Data>}
            {isLoading && <LoadingQuote></LoadingQuote>}
            <hr></hr>
        </>
    )
}
export default ApiBreakingBad