import sql from '../DB/index.js';

async function test() {
  try {
    console.log('Testing database connection...');
    const result = await sql`SELECT 1 as test`;
    console.log('✅ Database works:', result);
    
    // Test a simple table creation
    console.log('Testing table creation...');
    await sql`CREATE TABLE IF NOT EXISTS test_table (id SERIAL PRIMARY KEY, name TEXT)`;
    console.log('✅ Table creation works');
    
    // Clean up
    await sql`DROP TABLE IF EXISTS test_table`;
    console.log('✅ Cleanup works');
    
    await sql.end();
    console.log('All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    await sql.end();
  }
}

test();