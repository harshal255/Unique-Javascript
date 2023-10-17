import { use, useState } from "react"
import {ConnectKitButton} from "connectkit"

export default function Navbar(){
    const [logotext,setLogoText] = useState("Books per Second")
    function logo(){
        const logos = ["Books per Second","Books/Second","புத்தகங்கள்/வினாடி","Libros por segundo","本/秒",
        "किताबें प्रति सेकंड","ਕਿਤਾਬਾਂ ਪ੍ਰਤੀ ਸਕਿੰਟ","libri al secondo","böcker per sekund","livres par seconde","Bücher pro Sekunde",
        "βιβλία ανά δευτερόλεπτο","boeken per seconde","每秒书籍","초당 책","ספרים לשנייה","প্ৰতি চেকেণ্ডত কিতাপ","సెకనుకు పుస్తకాలు",
        "Книг в секунду","كتب في الثانية","Počet knih za sekundu","പുസ്തകങ്ങൾ/രണ്ടാം","Boeke/Tweede","Llyfrau yr Eiliad","หนังสือต่อวินาที"]
        let number = Math.floor(Math.random() * 25);
        setLogoText(logos[number])
    }

    return(
        <div className="items-center justify-between flex w-full h-24 top-0 sticky bg-black">
                       
            <div className="select-none group flex cursor-pointer" onClick={logo}>
                        <h1 className="text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mx-5 md:mx-10 group-hover:scale-105">{logotext}</h1>
            </div>     
            <div className="mr-8">
            <ConnectKitButton/>    
            </div>
        </div>
    )
}