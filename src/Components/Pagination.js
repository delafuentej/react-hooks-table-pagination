import React, { useState, useEffect } from "react";
import "./components.css";
const Pagination = ({ totalPages, setPage }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "...";
    let dotsRight = "...";

    if (pages.length < 6) {
      tempNumberOfPages = pages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pages.length];
    } else if (currentButton === 4) {
      const sliced = pages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pages.length];
    } else if (currentButton > 4 && currentButton < pages.length - 2) {
      const sliced1 = pages.slice(currentButton - 2, currentButton);
      const sliced2 = pages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [1, dotsLeft,...sliced1,...sliced2, dotsRight,pages.length];
    } else if (currentButton > pages.length - 3) {
      const sliced = pages.slice(pages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    }else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }else if(currentButton === dotsRight){
        setCurrentButton(arrOfCurrButtons[3]+2)
    }
    setPage(currentButton);
    setArrOfButtons(tempNumberOfPages);
  }, [currentButton]);

  return (
    <>
      <div className="pagination-container mt-3">
        <a
          href="!#"
          className={`${currentButton === 1 ? "disabled" : ""}`}
          style={{backgroundColor:"honeydew"}}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          {"<"}
        </a>

        {arrOfCurrButtons.map((page, index) => {
          return (
            <a
              key={index}
              onClick={() => setCurrentButton(page)}
              style={{backgroundColor:"rgb(214, 208, 208)"}}
              href="!#"
              className={currentButton === page ? "active" : ""} 
            >
              {page}
            </a>
          );
        })}
        <a
          href="!#"
          className={`${currentButton === totalPages ? "disabled" : ""}`}
            style={{backgroundColor:"honeydew"}}
          onClick={() =>
            setCurrentButton((prev) => (prev === totalPages ? prev : prev + 1))
          }
        >
          {">"}
        </a>

        
      </div>
    </>
  );
};

export default Pagination;
