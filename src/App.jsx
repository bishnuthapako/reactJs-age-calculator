import React, { useState } from "react";
// Adjusted import path to "../images/icoon-arrow.svg" assuming 'images' is one level up
import logo from "./assets/images/icon-arrow.svg";

const App = () => {
  const fullYear = new Date().getFullYear();

  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");

  const [errorDays, setErrorDays] = useState(false);
  const [errorMonths, setErrorMonths] = useState(false);
  const [errorYears, setErrorYears] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className=" bg-white">
      <div>
        <form onSubmit={handleFormSubmit} action="">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-20 lg:w-40">
              <label htmlFor="number">DAY</label>
              <input
                type="number"
                name="days"
                id="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                min={1}
                max={32}
                maxLength={2}
                placeholder="DD"
              />
              <p className=" text-lightRed italic">This field is requird</p>
            </div>
            <div className="flex flex-col w-20 lg:w-40">
              <label htmlFor="number">MONTH</label>
              <input
                type="number"
                name=""
                value={months}
                min={1}
                max={12}
                maxLength={2}
                id="number"
                onChange={(e) => setMonths(e.target.value)}
                placeholder="MM"
              />
              <p className=" text-lightRed italic">This field is requird</p>
            </div>
            <div className="flex flex-col w-20 lg:w-40">
              <label htmlFor="number">YEAR</label>
              <input
                type="number"
                name=""
                id="number"
                value={years}
                min={1800}
                max={fullYear}
                maxLength={4}
                onChange={(e) => setYears(e.target.value)}
                placeholder="YYYY"
              />
              <p className=" text-lightRed italic">This field is requird</p>
            </div>
          </div>
          <div className="w-full relative">
            <div className="flex-1 border-b-2 border-smokeGrey mt-11 px-7 mb-7"></div>
            <div className="absolute right-[100px] lg:right-0 top-[-30px] bg-purple rounded-full w-14 h-14">
              <button type="submit">
                <img src={logo} className="p-4" alt="Logo Icon" />
              </button>
            </div>
            <div>
              <ul className="px-3">
                <li className="text-4xl italic font-extrabold">
                  <span className="  text-purple">- - </span> years
                </li>
                <li className="text-4xl italic font-extrabold">
                  <span className=" text-purple">- - </span>
                  months
                </li>
                <li className="text-4xl italic font-extrabold">
                  <span className=" text-purple">- - </span> days
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
