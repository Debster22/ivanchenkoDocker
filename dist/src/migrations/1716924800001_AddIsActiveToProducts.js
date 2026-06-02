"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsActiveToProducts1716924800001 = void 0;
class AddIsActiveToProducts1716924800001 {
    async up(queryRunner) {
        await queryRunner.query(`
      ALTER TABLE "products"
      ADD "isActive" boolean NOT NULL DEFAULT true
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      ALTER TABLE "products"
      DROP COLUMN "isActive"
    `);
    }
}
exports.AddIsActiveToProducts1716924800001 = AddIsActiveToProducts1716924800001;
//# sourceMappingURL=1716924800001_AddIsActiveToProducts.js.map