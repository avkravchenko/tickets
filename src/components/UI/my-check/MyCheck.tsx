import React, { useEffect, useState } from "react";
import "./my-check.scss";
import { useSearchParams } from "react-router-dom";

type CheckboxState = {
  [key: string]: boolean;
};

const MyCheck = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const newObj: CheckboxState = {};
  const [obj, setObj] = useState<CheckboxState>({
    all: false,
    "0": false,
    "1": false,
    "2": false,
    "3": false,
  });

  useEffect(() => {
    for (let key in obj) {
      if (obj[key]) {
        setSearchParams((searchParams) => {
          searchParams.set(key, String(obj[key]));
          return searchParams;
        });
      } else {
        setSearchParams((searchParams) => {
          searchParams.delete(key);
          return searchParams;
        });
      }
    }
  }, [obj]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      for (let key in obj) {
        newObj[key] = true;
      }
      setObj(newObj);
    } else {
      for (let key in obj) {
        newObj[key] = false;
      }
      setObj(newObj);
    }
  };

  return (
    <form className="check-form">
      <div className="check-form__row">
        <input
          type="checkbox"
          name="all"
          id="check1"
          onChange={handleAllChange}
          checked={obj.all}
        />
        <label htmlFor="check1">Все</label>
      </div>
      <div className="check-form__row">
        <input
          onChange={handleChange}
          type="checkbox"
          name="0"
          id="check2"
          checked={obj[0]}
        />
        <label htmlFor="check2">Без пересадок</label>
      </div>
      <div className="check-form__row">
        <input
          onChange={handleChange}
          type="checkbox"
          name="1"
          id="check3"
          checked={obj[1]}
        />
        <label htmlFor="check3">1 пересадка</label>
      </div>
      <div className="check-form__row">
        <input
          onChange={handleChange}
          type="checkbox"
          name="2"
          id="check4"
          checked={obj[2]}
        />
        <label htmlFor="check4">2 пересадки</label>
      </div>
      <div className="check-form__row">
        <input
          onChange={handleChange}
          type="checkbox"
          name="3"
          id="check5"
          checked={obj[3]}
        />
        <label htmlFor="check5">3 пересадки</label>
      </div>
    </form>
  );
};

export default MyCheck;
