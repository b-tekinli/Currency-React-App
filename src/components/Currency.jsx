import React, { useState } from "react";
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let TOKEN = "fca_live_zJXcuXPVfDSrfYPrcXG4vRSsEKgqOmlyTk4sdbPu";

function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?apikey=${TOKEN}&base_currency=${fromCurrency}`);
            const result = (response.data.data[toCurrency] * amount).toFixed(2);
            setResult(result);
        }
        catch (err) {
            console.log(`Error: ${err}`);
        }
    };

  return (
    <div className="currency-div">
        <div>
            <h2 style={{marginBottom: '60px', padding: '15px', borderRadius: '12px', fontFamily: 'arial', backgroundColor: '#000000', color: '#ffffff'}}>DÖVİZ KURU UYGULAMASI
            </h2>
        </div>

        <div>
            <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number" className="amount" 
            />
            
            <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaRegArrowAltCircleRight style={{fontSize: '25px', marginRight: '20px'}} />

            <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <input value={result} onChange={(e) => setResult(e.target.value)} type="text" className="result" />

        </div>

        <div>
            <button onClick={exchange} className="btn">Çevir</button>
        </div>
    </div>
  );
}

export default Currency;
