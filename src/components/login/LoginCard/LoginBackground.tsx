function LoginBackground() {
  return (
    <div className="relative w-full h-full">
      <div className="bg-stone01 w-[26%] h-full absolute left-0 
      rounded-tl-[2rem] rounded-tr-[1.5rem] rounded-bl-[2rem] rounded-br-0"></div>
      <div className="bg-stone01 w-[26%] h-full absolute right-0 
      rounded-tl-[1.5rem] rounded-tr-[2rem] rounded-bl-0 rounded-br-[2rem]"></div>
      <div className="bg-stone01 w-full h-[84%] min-h-[400px] max-h-[460px]
      absolute left-0 bottom-0 rounded-[20px]"></div>
      <div className="curved-corner-bottomleft absolute -translate-x-full left-1/2 bottom-[84%]"></div>
      <div className="curved-corner-bottomright absolute  left-1/2 bottom-[84%]"></div>
    </div>

    // <div>
    //     <div className="bg-stone01 w-[130px] h-full absolute left-0 
    //     rounded-tl-[20px] rounded-tr-[15px] rounded-bl-[20px] rounded-br-[0px]"></div>
    //     <div className="bg-stone01 w-[130px] h-full absolute right-0 
    //     rounded-tl-[15px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[20px]"></div>
    //     <div className="bg-stone01 w-full h-[460px]
    //     absolute left-0 bottom-0 rounded-[20px]"></div>
    //     <div className="curved-boxes-holder">
    //         <div className="curved-corner-bottomleft"></div>
    //         <div className="curved-corner-bottomright"></div>
    //     </div>
    // </div>
  );
}

export default LoginBackground;