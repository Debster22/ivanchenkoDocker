import { Product } from '../products/product.entity';
export declare class Category {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    products: Product[];
}
