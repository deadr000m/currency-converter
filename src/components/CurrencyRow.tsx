import React from 'react';
import { useAppSelector } from '../hooks/hooks';
interface RowProps {
  nameInput: string;
  nameSelect: string;
  selectedCurrency: string;
  amount: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
function CurrencyRow(props: RowProps) {
  let currencies = useAppSelector((state) => state.currencies);
  return (
    <div>
      <input
        name={props.nameInput}
        type="number"
        className="currency-input"
        value={props.amount}
        onChange={props.onChange}
      />
      <select
        value={props.selectedCurrency}
        name={props.nameSelect}
        className="currency-select"
        onChange={props.onChangeSelect}
      >
        {currencies.map((item) => {
          return (
            <option value={item.Cur_Abbreviation}>
              {item.Cur_Abbreviation}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CurrencyRow;
