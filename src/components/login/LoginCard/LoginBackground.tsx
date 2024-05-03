function LoginBackground() {
  return (
    <div className="absolute w-full h-full">
      <div className="relative w-full h-full ">
        <div
          className="absolute left-0 w-[25%] min-w-[130px] h-full 
          rounded-[2rem] rounded-tr-[1.3rem] bg-stone01"
        ></div>
        <div
          className="absolute right-0  w-[25%] min-w-[130px] h-full
          rounded-tl-[1.3rem] rounded-[2rem] bg-stone01"
        ></div>
        <div
          className="absolute bottom-0 w-full h-full min-h-[400px] max-h-[453px]
          rounded-[2rem] bg-stone01"
        ></div>
        <div className="holding-space">
          <div className="curve-bl"></div>
          <div className="curve-br"></div>
        </div>
        {/* <div className="curved-corner-bottomleft absolute -translate-x-full top-0 left-1/2"></div>
        <div className="curved-corner-bottomright absolute top-[1.0rem] left-1/2"></div> */}
      </div>
    </div>
  );
}

export default LoginBackground;
