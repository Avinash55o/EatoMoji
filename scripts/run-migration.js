import sql from '../DB/index.js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigration() {
  try {
    console.log('🚀 Running migration...');
    
    // Check this path - should match your actual file structure
    const migrationPath = join(__dirname, '../DB/migrations/001_init.sql');
    console.log('Migration path:', migrationPath);
    
    // Check if file exists
    const migrationSQL = readFileSync(migrationPath, 'utf8');
    console.log('SQL file loaded, length:', migrationSQL.length);
    
    // Split and execute statements
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log('Found', statements.length, 'SQL statements');
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        console.log(`Executing statement ${i + 1}: ${statement.substring(0, 50)}...`);
        await sql.unsafe(statement);
        console.log(`✅ Statement ${i + 1} completed`);
      }
    }
    
    console.log('✅ Migration completed successfully!');
    await sql.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.error('Error details:', error.message);
    await sql.end();
    process.exit(1);
  }
}

runMigration();