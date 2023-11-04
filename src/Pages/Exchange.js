import { getCurency, changeCurency } from "../Fetch/exchange";
import { useState, useEffect } from "react";

const Exchange = () => {
    const [curency, setCurency] = useState([]);
    const [from, setFrom] = useState([]);
    const [curencyFrom, setCurencyFrom] = useState([]);
    const [curencyTo, setCurencyTo] = useState([]);
    const [result, setResult] = useState([]);
    const fetchCurency = async () => {
        const response = await getCurency()
        setCurency(response);
    }

const getResult = async () => {
    const response = await changeCurency(curencyFrom, curencyTo, from)
}

    useEffect(()=>{
        fetchCurency()
    }, [])

    return (
        <main className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="d-flex my-3">
                <input className="form-control"onChange={(e)=>{setFrom(e.target.value)}}></input>
                <select className="form-control" onChange={(e)=>{setCurencyFrom(e.target.value)}}>{curency.map((curency) => (
                    <option value={curency}>
                        {curency}
                    </option>
                ))}
                </select>
            </div>

            <div className="d-flex my-3">
                <input className="form-control" disabled></input>
                <select className="form-control" onChange={(e)=>{setCurencyTo(e.target.value)}}>{curency.map((curency) => (
                    <option value={curency}>
                        {curency}
                    </option>
                ))}
                </select>
            </div>
            <button className="btn btn-success my-3" onClick={getResult}>Exchange</button>
        </main>
    )
};

export default Exchange