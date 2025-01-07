import Title from './Title';
import WebSearchBar from './web/WebSearchBar';
import ActionMenu from './web/ActionMenu';
import WebNavbar from './web/WebNavbar';

function WebHeader() {
  return (
    <>
      <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-[95px] px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
        <WebSearchBar />
        <ActionMenu />
      </div>
      <WebNavbar />
    </>
  );
}

export default WebHeader;
