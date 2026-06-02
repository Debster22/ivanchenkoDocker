import { MigrationInterface, QueryRunner } from 'typeorm';

// Назва класу ТЕПЕР збігається з назвою файлу
export class AddIsActiveToProducts1716924800001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "products"
      ADD "isActive" boolean NOT NULL DEFAULT true
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "products"
      DROP COLUMN "isActive"
    `);
  }
}