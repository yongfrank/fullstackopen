/*
 * @Author: Frank Chu
 * @Date: 2023-01-30 22:05:02
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-04 11:14:33
 * @FilePath: /fullstackopen/part2/phonebook/src/components/Currency.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

import { useState, useEffect } from "react"
import ServiceOfCurrency from '../services/CurrencyConvert'

const Currency = () => {
    const [currency, setCurrency] = useState('')
    const [responseData, setResponseData] = useState({})

    useEffect(() => {console.log(currency)}, [currency])

    const handleSubmit = (event) => {
        event.preventDefault()
        ServiceOfCurrency
            .getAll(currency)
            .then((result) => {
                setResponseData(result.data.rates)
            })
            .catch((err) => {
                console.log('error')
            });
    }

    const Response = ({responseData}) => {
        if (responseData.USD) {
            return (
                <pre>
                    {JSON.stringify(responseData, null, 4)}
                </pre>
            )
        }
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={(event) => setCurrency(event.target.value)} />
                    <button type="submit">Convert</button>
                </form>
            </div>
            <Response responseData={responseData}/>
        </>
    )
}

export default Currency