import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function CurrenciesRate() {
  let currencies = useAppSelector((state) => state.currencies);
  return (
    <div>
      {currencies.map((item) => {
        return (
          <div className="currency-table">
            <div className="currency-table-item">
              {item.Cur_Scale + ' ' + item.Cur_Abbreviation}
            </div>
            <div className="currency-table-item">{item.Cur_OfficialRate}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CurrenciesRate;
