import { useNavigate } from 'react-router-dom';
import { getShopBaseUrl } from '../../utils/baseURL';
import { FaStar, FaHeart } from 'react-icons/fa';
import { GoBell } from 'react-icons/go';

import { ArrowUpIcon, ArrowDownIcon, BellPlus } from 'lucide-react';
import { ProductDto } from '../../dto/response/productDto';

// product 예시
// {
//   productNumber: 2697813,
//   name: 'PRDA DENIM PATCH CREWNECK SHIRT',
//   brand: '프렌다',
//   starScore: 4.8,
//   reviewCount: 3543,
//   likeCount: 0,
//   imgUrl:
//     '/images/goods_img/20220804/2697813/2697813_16759892051756_500.jpg',
//   shopType: 'MUSINSA',
//   currentPrice: 24150,
//   previousPrice: 39900,
// },

interface ProductCardProps {
  product: ProductDto;
  className?: string;
}

function ProductCard({ product, className }: ProductCardProps) {
  const navigate = useNavigate();

  const formatNumber = (num: number) => {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  const getPriceChange = (current: number, previous: number) => {
    const diff = current - previous;
    const percentage = ((diff / previous) * 100).toFixed(1);
    return { diff, percentage };
  };

  const handleProductClick = () => {
    navigate(
      `/${product.shopType.toLowerCase()}/products/${product.productNumber}`
    );
  };

  const baseImageUrl = getShopBaseUrl(product.shopType);
  const fullImageUrl = `${baseImageUrl}${product.imgUrl}`;

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg ${className}`}
      onClick={handleProductClick}
    >
      <div className="relative">
        <img
          src={fullImageUrl}
          alt={product.name}
          className="w-full h-36 sm:h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white px-2 py-1 text-xs sm:text-sm rounded-br-lg">
          {product.brand}
        </div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-9rem)] sm:h-[calc(100%-12rem)]">
        <h2 className="text-base font-semibold mb-2 leading-tight h-12 sm:h-14 overflow-hidden">
          <span className="line-clamp-2">{product.name}</span>
        </h2>
        <div className="flex flex-col justify-between mb-2 flex-grow ">
          <span className="text-lg font-bold">
            {product.currentPrice.toLocaleString()}원
          </span>
          <span
            className={`flex items-center text-x ${
              product.currentPrice > product.previousPrice
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {product.currentPrice > product.previousPrice ? (
              <ArrowUpIcon strokeWidth={3} className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownIcon strokeWidth={3} className="w-4 h-4 mr-1" />
            )}
            <span className="text-sm lg:text-sm">
              {' '}
              {Math.abs(
                getPriceChange(product.currentPrice, product.previousPrice).diff
              ).toLocaleString()}
              원
            </span>
            <span className="text-sm lg:text-sm">
              {' '}
              (
              {
                getPriceChange(product.currentPrice, product.previousPrice)
                  .percentage
              }
              %)
            </span>
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-2">
          이전 가격: {product.previousPrice.toLocaleString()}원
        </div>
        <div className="flex items-center mb-3 text-xs">
          <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 font-semibold">
            {product.starScore.toFixed(1)}
          </span>
          <span className="ml-1">({formatNumber(product.reviewCount)})</span>
          <div className="flex items-center ml-2">
            <FaHeart className="w-4 h-4 text-red-500" />
            <span className="ml-1">{formatNumber(product.likeCount)}</span>
          </div>
          <div className="flex items-center ml-2">
            <GoBell className="w-4 h-4 text-blue-500" />
            <span className="ml-1">{10}</span>
          </div>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center text-xs mt-auto">
          <BellPlus className="w-4 h-4 mr-2" />
          알림 등록하기
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
