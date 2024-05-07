function LoginBackground() {
  return (
    <div className="absolute w-full h-full">
      <div className="relative w-full h-full ">
        <div
          className="absolute left-0 w-[25%] min-w-[130px] h-full 
          rounded-[2rem] rounded-tr-[1.24rem] bg-stone01"
        ></div>
        <div
          className="absolute right-0  w-[25%] min-w-[130px] h-full
          rounded-tl-[1.24rem] rounded-[2rem] bg-stone01"
        ></div>
        <div
          className="absolute bottom-0 w-full h-full min-h-[400px] max-h-[453px]
          rounded-[2rem] bg-stone01"
        ></div>
        <div className="holding-space">
          <div className="curve-bl"></div>
          <div className="curve-br"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginBackground;
