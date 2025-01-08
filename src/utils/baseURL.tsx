export function getShopBaseUrl(shopType: string) {
  switch (shopType) {
    case 'MUSINSA':
      return 'https://image.msscdn.net';
    case 'BRANDI':
      return 'https://uniqlo.com';
    case 'NIKE':
      return 'https://nike.com';
    default:
      return 'https://defaultshop.com';
  }
}
