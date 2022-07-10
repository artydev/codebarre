
export interface ModelProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ModelProducts {
    products: ModelProduct[];
    total: number;
    skip: number;
    limit: number;
    modelName: ModelProducts
}




