function LoginBackground() {
  return (
    <div>
        <div className="bg-stone01 w-[130px] h-full absolute left-0 
        rounded-tl-[20px] rounded-tr-[15px] rounded-bl-[20px] rounded-br-[0px]"></div>
        <div className="bg-stone01 w-[130px] h-full absolute right-0 
        rounded-tl-[15px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[20px]"></div>
        <div className="bg-stone01 w-full h-[460px]
        absolute left-0 bottom-0 rounded-[20px]"></div>
        <div className="center-above-holder">
            <div className="curved-corner-bottomleft"></div>
            <div className="curved-corner-bottomright"></div>
        </div>
    </div>
  );
}

export default LoginBackground;