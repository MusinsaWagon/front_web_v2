import Title from './Title';
import WebSearchBar from './web/WebSearchBar';
import ActionMenu from './web/ActionMenu';
import WebNavbar from './web/WebNavbar';

function WebHeader() {
  return (
    <header className="bg-white px-4 w-full mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-[95px] px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <Title />
        <WebSearchBar />
        <ActionMenu />
      </div>
      <WebNavbar />
    </header>
  );
}

export default WebHeader;
