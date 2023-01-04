export interface Product {
    id: number;
    sku: string;
    name: string;
    price: number;
    imgUrls: string[];
    desc: string;
    productInfo: string;
    returnPolicy: string;
    shippingInfo: string;
}

export interface ProductInfo {
    sku: string;
    name: string;
    price: number;
    imgUrl: string;
}