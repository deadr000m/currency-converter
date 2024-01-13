import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useAppDispatch } from './hooks/hooks';
import { setCurrencies } from './redux/slices/currencySlice';
import { useAppSelector } from './hooks/hooks';
import CurrenciesRate from './pages/CurrenciesRate';
import CurrencyConverter from './pages/CurrencyConverter';
import { AxiosError } from 'axios';
import { setError } from './redux/slices/errorSlice';
import Error from './components/Error';
import Menu from './components/Menu';

function App() {
  const dispatch = useAppDispatch();
  let currencies = useAppSelector((state) => state.currencies);
  const error = useAppSelector((state) => state.error);
  const getCurrencyData = async () => {
    try {
      const response = await axios.get(
        'https://api.nbrb.by/exrates/rates?periodicity=0'
      );
      dispatch(setCurrencies(response.data));
    } catch (error) {
      const e = error as AxiosError;
      dispatch(setError({ isError: true, message: e.message }));
    }
  };
  useEffect(() => {
    getCurrencyData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <Menu />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              error.isError ? (
                <Error></Error>
              ) : (
                <CurrencyConverter></CurrencyConverter>
              )
            }
          ></Route>
          <Route
            path="/rates"
            element={
              error.isError ? (
                <Error></Error>
              ) : (
                <CurrenciesRate></CurrenciesRate>
              )
            }
          ></Route>
        </Routes>
        {/* {currencies.map((item) => {
        return (
          <div className="currency-table">
            <div className="currency-table-item">{item.Cur_Abbreviation}</div>
            <div className="currency-table-item">{item.Cur_OfficialRate}</div>
          </div>
        );
      })} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
