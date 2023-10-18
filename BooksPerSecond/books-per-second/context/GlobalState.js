import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BigNumber } from "ethers"; 
const GlobalState = (props) => {
  const [currentIsbn, setCurrentIsbn] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [endTime, setEndTime] = useState(BigNumber.from(0));

  useEffect(() => {
    const storedIsStarted = localStorage.getItem("isStarted");
    if (storedIsStarted !== null) {
      setIsStarted(JSON.parse(storedIsStarted));
    }
  }, []);

  const handleSetIsStarted = (value) => {
    localStorage.setItem("isStarted", JSON.stringify(value));
    setIsStarted(value);
  };
  return (
    <GlobalContext.Provider
      value={{
        currentIsbn,
        setCurrentIsbn,
        isStarted,
        handleSetIsStarted,
        endTime,
        setEndTime,
      }}
    >
      {props.children} 
    </GlobalContext.Provider>
  );
};

export default GlobalState;
