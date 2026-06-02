import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoriesService {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    create(data: Partial<Category>): Promise<Category>;
    update(id: number, data: Partial<Category>): Promise<Category>;
    remove(id: number): Promise<void>;
}
