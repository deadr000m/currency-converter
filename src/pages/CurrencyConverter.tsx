import React from 'react';
import CurrencyRow from '../components/CurrencyRow';
import { useState } from 'react';
import { useAppSelector } from '../hooks/hooks';

function CurrencyConverter() {
  let currencies = useAppSelector((state) => state.currencies);
  let error = useAppSelector((state) => state.error);

  console.log();
  const [firstCurrency, setFirstCurrency] = useState<string>('');
  const [firstSelect, setFirstSelect] = useState<string>('USD');
  const [secondCurrency, setSecondCurrency] = useState<string>('');
  const [secondSelect, setSecondSelect] = useState<string>('RUB');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'input1') {
      setFirstCurrency(e.target.value);
    } else {
      setSecondCurrency(e.target.value);
    }

    const firstCurObj = currencies.find((item) => {
      return item.Cur_Abbreviation === firstSelect;
    });
    const secondCurObj = currencies.find((item) => {
      return item.Cur_Abbreviation === secondSelect;
    });

    let firstRate: number;
    let secondRate: number;
    if (
      firstCurObj?.Cur_OfficialRate !== undefined &&
      firstCurObj?.Cur_Scale !== undefined
    ) {
      firstRate = firstCurObj?.Cur_OfficialRate / firstCurObj?.Cur_Scale;
      if (
        secondCurObj?.Cur_OfficialRate !== undefined &&
        secondCurObj?.Cur_Scale !== undefined
      ) {
        secondRate = secondCurObj?.Cur_OfficialRate / secondCurObj?.Cur_Scale;
        if (e.target.name === 'input1') {
          setSecondCurrency(
            String((firstRate / secondRate) * Number(e.target.value))
          );
        } else {
          setFirstCurrency(
            String((secondRate / firstRate) * Number(e.target.value))
          );
        }
      }
    }
  };
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let firstCurObj: any;
    let secondCurObj: any;
    if (e.target.name === 'select1') {
      setFirstSelect(e.target.value);
      firstCurObj = currencies.find((item) => {
        return item.Cur_Abbreviation === e.target.value;
      });
      secondCurObj = currencies.find((item) => {
        return item.Cur_Abbreviation === secondSelect;
      });
    } else {
      setSecondSelect(e.target.value);
      firstCurObj = currencies.find((item) => {
        return item.Cur_Abbreviation === firstSelect;
      });
      secondCurObj = currencies.find((item) => {
        return item.Cur_Abbreviation === e.target.value;
      });
    }
    let firstRate: number;
    let secondRate: number;
    if (
      firstCurObj?.Cur_OfficialRate !== undefined &&
      firstCurObj?.Cur_Scale !== undefined
    ) {
      firstRate = firstCurObj?.Cur_OfficialRate / firstCurObj?.Cur_Scale;
      if (
        secondCurObj?.Cur_OfficialRate !== undefined &&
        secondCurObj?.Cur_Scale !== undefined
      ) {
        secondRate = secondCurObj?.Cur_OfficialRate / secondCurObj?.Cur_Scale;
        if (e.target.name === 'select1') {
          setSecondCurrency(
            String((firstRate / secondRate) * Number(firstCurrency))
          );
        } else {
          setFirstCurrency(
            String((secondRate / firstRate) * Number(secondCurrency))
          );
        }
      }
    }
  };

  //   const onChange = (
  //     e: React.ChangeEvent<HTMLSelectElement>,
  //     fn: React.Dispatch<React.SetStateAction<string>>
  //   ) => {
  //     fn(e.target.value);
  //   };
  return (
    <div>
      <div className="app-converter-board">
        <CurrencyRow
          nameInput="input1"
          nameSelect="select1"
          amount={firstCurrency}
          selectedCurrency={firstSelect}
          onChange={onChangeInput}
          onChangeSelect={onChangeSelect}
        ></CurrencyRow>
        <div className="equals">=</div>
        <CurrencyRow
          onChangeSelect={onChangeSelect}
          nameSelect="select2"
          nameInput="input2"
          amount={secondCurrency}
          selectedCurrency={secondSelect}
          onChange={onChangeInput}
        ></CurrencyRow>
      </div>
    </div>
  );
}

export default CurrencyConverter;
