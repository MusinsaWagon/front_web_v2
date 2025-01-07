import logo from '../../../assets/images/main-logo.png';

function MobileTopHeader() {
  return (
    <header className="fixed top-0 h-20 w-full bg-[#F1F4F6] z-10 items-center justify-between px-4 flex header-hide">
      <img alt="pricewagon" src={logo} width={42} height={42} loading="lazy" />
      <div className="flex flex-col justify-center pl-4">
        <span className="font-bold leading-5">빠르고 간편하게 비교하기</span>
        <span className="text-[12px] leading-4 text-gray-500">
          앱에서 더 쉽고 빠르게 이용해보세요!
        </span>
      </div>
      <div className="bg-green-500 text-white font-bold px-3 py-[6px] text-[12px] rounded-full">
        <span>앱 다운로드</span>
      </div>
    </header>
  );
}

export default MobileTopHeader;
