import React, { useContext, useEffect, useState } from "react";
import { useTimer } from "use-timer";
import { GlobalContext } from "@/context/GlobalContext";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils.js";

// ! if this is set request payment completion first, only then can you move onto the next payment (subject to change)
const Timer = () => {
  const { handleSetIsStarted, isStarted, setEndTime } =
    useContext(GlobalContext);
  const initialTime =
    typeof localStorage !== "undefined"
      ? Number(localStorage.getItem("time")) || 0
      : 0;
  const [show, setShow] = useState(false);

  const { time, start, pause, reset, status } = useTimer({ initialTime });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("time", time);
    }
  }, [time]);

  const handleReset = () => {
    // * used after transaction completion
    reset();
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("time");
      handleSetIsStarted(false);
    }
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = [hours, minutes, seconds]
      .map((timeValue) => String(timeValue).padStart(2, "0"))
      .join(":");

    return formattedTime;
  };
  const handleStart = () => {
    localStorage.setItem("isStarted", true);
    handleSetIsStarted(true);
    start();
  };
  const handlePause = () => {
    localStorage.setItem("isStarted", false);
    handleSetIsStarted(false);
    pause();
    setEndTime(parseEther(localStorage.getItem("time")));
  };
  // console.log(isStarted); chk renders
  return (
    <>
      <div className="flex mt-5 mx-5">
        <div className="flex bg-black rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
          <button
            onClick={handleStart}
            className="font-bold  font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white"
          >
            Start
          </button>
        </div>
        <div className="flex bg-black rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
          <button
            onClick={handlePause}
            className="font-bold  font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white"
          >
            Stop
          </button>
        </div>
        <div className=" mx-1 border-2 border-black rounded-full px-5 self-center">
          {time !== 0 && mounted ? (
            <h1 className="font-Lato text-2xl">
              Elapsed time: {formatTime(time)}
            </h1>
          ) : (
            <h1 className="font-Lato text-2xl">Elapsed time:</h1>
          )}
        </div>
      </div>
      {/* <button onClick={handleReset}>Reset</button> */}
      {/* {status === "RUNNING" && <p>Running...</p>} */}
    </>
  );
};

export default Timer;
