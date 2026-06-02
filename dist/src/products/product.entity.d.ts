import { Category } from '../categories/category.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    isActive: boolean;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
