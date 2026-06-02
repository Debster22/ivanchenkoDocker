import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductsService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(data: any): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<Product>;
}
