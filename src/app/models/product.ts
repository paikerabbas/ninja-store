export interface Product {
    id: number;
    sku: string;
    name: string;
    size: string[];
    available: number;
    price: number;
    imgUrls: string[];
    desc: string;
    productInfo: string;
    returnPolicy: string;
    shippingInfo: string;
}

export interface CartProduct {
    id: number;
    sku: string;
    name: string;
    size: string;
    qty: number;
    price: number;
    imgUrl: string;
}

export interface ProductInfo {
    sku: string;
    name: string;
    price: number;
    imgUrl: string;
}