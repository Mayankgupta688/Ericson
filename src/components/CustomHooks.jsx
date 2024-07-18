import { useState, useEffect, useContext } from "react";
import Axios from "axios"

export function useStock(stockName) {
    var [price, setSetPrice] = useState(0);
    
    useEffect(() => {
        setInterval(() => {
            setCurrentTime();
        }, 1000)
    }, [])
    
    function setCurrentTime() {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/" + stockName).then((response) => {
            setSetPrice(response.data.data.pricecurrent)
        })
    }
    
    return [price];
}

export function useMyTimer() {
    var [timer, setTime] = useState(setCurrentTime());
    
    
    useEffect(() => {
        setInterval(() => {
            setTime(setCurrentTime());
        }, 1000)
    }, [])
    
    function setCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }
    
    return [timer];
}


export default function ShowTimer() {
    var [currentTime] = useMyTimer();
    var [price] = useStock("SBI");
    
    return (
        <>
            <h1>Current Time is {currentTime}</h1><hr />
            <h5>Stock Price: {price}</h5>
            <OtherComponent></OtherComponent>
        </>
    )
}

function OtherComponent() {
    var [currentTime] = useMyTimer();
    
    return (
        <>
            <h2>Current Time is {currentTime}</h2>
            <h3>This is another Timer</h3>
        </>
    )
}