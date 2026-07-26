import { useEffect, useRef } from 'react';

const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
const DOMAIN = 'gardqv-rg.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '31c157b58a60afc538c5e33a8eb6865c';

let sdkPromise = null;
function loadShopifyBuySdk() {
  if (window.ShopifyBuy && window.ShopifyBuy.UI) return Promise.resolve(window.ShopifyBuy);
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = SDK_URL;
      script.onload = () => resolve(window.ShopifyBuy);
      script.onerror = reject;
      document.head.appendChild(script);
    }).catch((err) => {
      sdkPromise = null; // allow a future mount to retry instead of caching the failure forever
      throw err;
    });
  }
  return sdkPromise;
}

// Renders a Shopify Buy Button product embed. `productId` and `options` come
// from the snippet generated in Shopify Admin (Online Store > Buy Button).
export default function ShopifyBuyButton({ productId, options }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadShopifyBuySdk()
      .then((ShopifyBuy) => {
        if (cancelled || !nodeRef.current) return;
        const client = ShopifyBuy.buildClient({ domain: DOMAIN, storefrontAccessToken: STOREFRONT_ACCESS_TOKEN });
        return ShopifyBuy.UI.onReady(client).then((ui) => {
          if (cancelled || !nodeRef.current) return;
          ui.createComponent('product', {
            id: productId,
            node: nodeRef.current,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options,
          });
        });
      })
      .catch((err) => {
        console.error('Shopify Buy Button failed to load', err);
      });
    return () => {
      cancelled = true;
      if (nodeRef.current) nodeRef.current.innerHTML = '';
    };
  }, [productId, options]);

  return <div ref={nodeRef} />;
}
