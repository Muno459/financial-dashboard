const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

async function testConnection() {
    console.log('Testing database connection...');
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined in .env');
        }
        const sql = neon(process.env.DATABASE_URL);
        console.log('Querying users table...');
        const users = await sql`SELECT * FROM users LIMIT 1`;
        console.log('Successfully fetched users:', users);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

testConnection();
