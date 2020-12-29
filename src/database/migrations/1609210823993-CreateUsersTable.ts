import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1609210823993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'analysisId',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'fullName',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'analyzedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
    await queryRunner.query('DROP EXTENSION "uuid-ossp');
  }
}
