import { useRouter } from "next/router";
import layerabi from "../contracts/Layer.json"
import { Suspense } from 'react';
import { useState } from "react";
import { usePrepareContractWrite,useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
import { BigNumber } from "ethers";
import { parseEther, formatEther } from "ethers/lib/utils.js";

const Landing = () => {
  // wei
  const [search, setSearch] = useState(parseEther('1'));
  const handleSearch = (e) => {
    // converting to wei
    const searchBN = parseEther(e.target.value)
    setSearch(searchBN);
  };
    const router = useRouter();
    const goToList = () => {
        router.push('/searchpage')
    }
const { address, isConnected} = useAccount()
  const { config, error } = usePrepareContractWrite({
    address: '0x9Ca2f5ACCaa491C34337a2c28D1794c4aA2388D4',
    abi: layerabi.abi,
    functionName: 'mint',
    args:[address,search],
  })
  const { write } = useContractWrite(config)
  return (  
    <div className="my-10 flex flex-col justify-center">
      <h1 className="lg:text-8xl md:text-6xl sm:text-6xl mx-10 font-extrabold font-Lato text-4xl">
        Pay for your time,
      </h1>
      <h1 className="lg:text-7xl md:text-5xl sm:text-5xl mx-10 font-Lato text-3xl my-1">
        Not for the book
      </h1>
      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-Chivo mx-10 my-10">
        Have you ever bought a book at full price and half way through you think
        to yourself, "This book is trash lmao".
        <br></br>
        Well don't worry cause we've got you covered<br></br>
        ٩(＾◡＾)۶
        <br></br>
        <b>Pay for the time you have read the book</b>. If you don't like it,
        <br></br> at least you saved yourself from buying the book at full price
        <br></br>
        ƪ(=ｘωｘ=ƪ)
      </h2>
      <div className="flex bg-black rounded-full h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button onClick={goToList} className="font-bold font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white">Browse our Books</button>
      </div>
            {
              
            <>
            <div className='flex flex-row justify-center items-center mt-10'>
              <input value={parseFloat(formatEther(search))} onChange={handleSearch} autoComplete='off' className=' lg:text-4xl md:text-3xl sm:text-2xl text-xl xl:w-[250px] lg:w-[600px] md:w-[500px] sm:w-96 w-56 pl-6 py-3 border-black placeholder:text-black px-3 rounded-full border-4' type='text'></input>
              <div className="flex bg-black rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
                <button disabled={!write} onClick={() => write?.()} className="font-bold  font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white">Buy $TYM</button>
              </div>
            </div>
            </>
                
            }
    </div>
  );
};

export default Landing;
