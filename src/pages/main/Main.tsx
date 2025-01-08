import BestProductsList from './components/BestProductList';
import MainBanner from './components/MainBanner';

function Main() {
  return (
    <div className="p-4 h-full">
      <MainBanner />
      <BestProductsList />
      {/* <DivideLine /> */}
      {/* <UpdatedProductList /> */}
    </div>
  );
}

export default Main;
