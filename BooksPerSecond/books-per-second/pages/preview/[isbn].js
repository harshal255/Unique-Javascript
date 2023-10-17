import React, { useState, useEffect, useContext } from "react";
import layerabi from "../../contracts/Layer.json";
import axios from "axios";
import { useRouter } from "next/router";
import Timer from "@/components/timer";
import { GlobalContext } from "@/context/GlobalContext";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { ethers } from "ethers";

import { useTimer } from "use-timer";
import { formatEther } from "ethers/lib/utils.js";

const Preview = (props) => {
  const { address, isConnected } = useAccount();

  const { reset } = useTimer();
  const handleReset = () => {
    // * used after transaction completion
    reset();
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("time");
      handleSetIsStarted(false);
    }
  };
  const router = useRouter();
  const { handleSetIsStarted, isStarted, endTime } = useContext(GlobalContext);
  console.log(endTime);

  const isbn = router.query.isbn;
  const { config } = usePrepareContractWrite({
    address: "0x9Ca2f5ACCaa491C34337a2c28D1794c4aA2388D4",
    abi: layerabi.abi,
    functionName: "transfer",
    args: ["0xC1b38d568D9de9562261ae9af37c55BFdB0cFFD0", endTime],
  });
  let { error, data, isSuccess, write } = useContractWrite(config);
  // useEffect(
  //   () => {
  //     localStorage.setItem("isbn", JSON.stringify(props.isbn));
  //     // setCurrentIsbn(isbn);
  //   },
  //   [router.isReady],
  //   []
  // );
  useEffect(() => {
    handleSetIsStarted(false);
  }, []);



  if (isSuccess) {
    console.log("Paid");
    // handleReset();
    localStorage.removeItem("time")
    location.href = "/"
  
    
  } else {
    console.log(error);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      {props.bookUrl && (
        //! remove scrolls (exploit)
        <div
          className={isStarted ? "" : "hidden"}
          style={{ width: "100%", height: "800px" }}
        >
          <iframe
            src={props.bookUrl}
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
            className="overscroll-none"
          ></iframe>
        </div>
      )}
      <div
        className={`w-full h-[650px] xl:h-[800px] flex flex-col justify-center items-center bg-black ${
          isStarted ? "hidden" : ""
        }`}
      >
        <h1 className="font-Lato text-white text-5xl">
          Total Amount:{formatEther(endTime)}
        </h1>
        {(formatEther(endTime)>0) && (
  <div className=" mt-10 flex mb-8 bg-white rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
    <button
      onClick={() => write?.()}
      className="font-bold font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-white  group-hover:bg-black"
    >
      Pay
    </button>
  </div>
)}

      </div>
      <Timer />
    </div>
  );
};



export default Preview;

export async function getServerSideProps(context) {
  const isbn = context.query.isbn;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    );
    const data = response.data.items[0].volumeInfo.previewLink;
    const bookUrl = `${data}&output=embed`;
    const title = response.data.items[0].volumeInfo.title;
    return {
      props: { bookUrl, title, isbn }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      // todo : redirect to an error handling page that says that the book is not valid/available
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}
