import React from 'react';
import Product from '../../components/Product/Product';

function MainPage() {
  const products = [
    {
      id: 1,
      name: '도호 간절기 여성 H라인 스커트',
      price: '65,000원',
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 2,
      name: 'S 아베크롬비 원피스 상태A',
      price: '20,000원',
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 3,
      name: '아디다스 스웻반바지 해외라지',
      price: '20,000원',
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 4,
      name: '기타 상품',
      price: '20,000원',
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
    },
    {
      id: 5,
      name: '도호 간절기 여성 H라인 스커트',
      price: '65,000원',
      date: '1일 전',
      img: 'https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_500.jpg',
    },
    {
      id: 6,
      name: 'S 아베크롬비 원피스 상태A',
      price: '20,000원',
      date: '10일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210825/2086653/2086653_17048764754484_500.jpg',
    },
    {
      id: 7,
      name: '아디다스 스웻반바지 해외라지',
      price: '20,000원',
      date: '2일 전',
      img: 'https://image.msscdn.net/images/goods_img/20210928/2149254/2149254_17138588137724_500.jpg',
    },
    {
      id: 8,
      name: '기타 상품',
      price: '20,000원',
      date: '3일 전',
      img: 'https://image.msscdn.net/images/goods_img/20240422/4074847/4074847_17205019513135_500.jpg',
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;