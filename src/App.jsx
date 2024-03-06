import React, { useState } from "react";
// Adjusted import path to "../images/icoon-arrow.svg" assuming 'images' is one level up
import logo from "./assets/images/icon-arrow.svg";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  addYears,
  addMonths,
} from "date-fns";

const App = () => {
  const fullYear = new Date().getFullYear();
  console.log(fullYear, "fy");

  const today = new Date();

  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [color, setColor] = useState(false);
  console.log(color, "color");

  const birthDate = new Date(years, months - 1, days);
  console.log(birthDate, "bd");

  const differenceYear = differenceInYears(today, birthDate);
  console.log(differenceYear, "dy");
  const adjustedBirthDateForYears = addYears(birthDate, differenceYear);

  const differenceMonths = differenceInMonths(today, birthDate) % 12;
  const adjustedBirthDateForMonths = addMonths(
    adjustedBirthDateForYears,
    differenceMonths
  );
  const differenceDays = differenceInDays(today, adjustedBirthDateForMonths);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!days) {
      setColor(true);
      setFormSubmitted(false);
    } else {
      setColor(false);
      setFormSubmitted(true);
    }
    // setDays("");
    // setMonths("");
    // setYears("");
  };
  // const errorClass = (input) =>
  //   formSubmitted || !input ? "text-lightRed" : "";

  return (
    <main className=" bg-white">
      <div>
        <form onSubmit={handleFormSubmit} action="">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-20 lg:w-40">
              <label
                className={color ? "text-lightRed" : "text-slate-900"}
                htmlFor="number"
              >
                DAY
              </label>
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
              {color && !days && (
                <p className={color ? "text-lightRed pt-2" : "text-slate-900"}>
                  This field is requird
                </p>
              )}
            </div>
            <div className="flex flex-col w-20 lg:w-40">
              <label
                className={color ? "text-lightRed" : "text-slate-900"}
                htmlFor="number"
              >
                MONTH
              </label>
              <input
                type="number"
                name=""
                value={months}
                min={1}
                max={12}
                maxLength={2}
                id="number"
                // required
                onChange={(e) => setMonths(e.target.value)}
                placeholder="MM"
              />
              {color && !months && (
                <p className={color ? "text-lightRed pt-2" : "text-slate-900"}>
                  This field is requird
                </p>
              )}
            </div>
            <div className="flex flex-col w-20 lg:w-40">
              <label
                className={color ? "text-lightRed" : "text-slate-900"}
                htmlFor="number"
              >
                YEAR
              </label>
              <input
                type="number"
                name=""
                id="number"
                value={years}
                min={1800}
                max={fullYear}
                maxLength={4}
                // required
                onChange={(e) => setYears(e.target.value)}
                placeholder="YYYY"
              />
              {color && !years && (
                <p className={color ? "text-lightRed pt-2" : "text-slate-900"}>
                  This field is requird
                </p>
              )}
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
              <ul className="px-3 leading-11">
                <li className="text-4xl italic font-extrabold">
                  <span className="  text-purple">
                    {formSubmitted ? `${differenceYear}` : "- - "}{" "}
                  </span>{" "}
                  years
                </li>
                <li className="text-4xl italic font-extrabold">
                  <span className=" text-purple">
                    {formSubmitted ? `${differenceMonths}` : "- - "}{" "}
                  </span>{" "}
                  months
                </li>
                <li className="text-4xl italic font-extrabold">
                  <span className=" text-purple">
                    {formSubmitted ? `${differenceDays}` : "- - "}{" "}
                  </span>{" "}
                  days
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
