#!/usr/bin/env node

// Thanks Grok -> https://grok.com/share/bGVnYWN5_246de356-6e7d-4e67-bac0-528dc6938c5a

const fs = require('fs/promises');
const path = require('path');
const { program } = require('commander');
const { connector } = require('@dbml/connector');
const { importer } = require('@dbml/core');

program
  .name('export-dbml')
  .description('Export PostgreSQL schema to DBML using @dbml/connector')
  .version('1.0.0')
  .option('-c, --connection <string>', 'PostgreSQL connection string', 'postgresql://postgres:postgres@localhost:5432/postgres?schemas=public')
  .option('-o, --output <path>', 'Output DBML file path', 'schema.dbml')
  .option('-s, --schemas <schemas>', 'Comma-separated schemas (overrides connection string)', '')
  .parse();

const options = program.opts();

async function exportSchema() {
  let connectionString = options.connection;

  // Append/override schemas if provided via flag
  if (options.schemas) {
    const separator = connectionString.includes('?') ? '&' : '?';
    connectionString += `${separator}schemas=${options.schemas}`;
  }

  console.log('🔌 Connecting to PostgreSQL...');
  console.log(`   Connection: ${connectionString.replace(/:[^:@]+@/, ':****@')}`); // Hide password

  try {
    const schemaJson = await connector.fetchSchemaJson(connectionString, 'postgres');

    console.log('✅ Schema fetched successfully!');

    const dbmlContent = importer.generateDbml(schemaJson);

    const outputPath = path.resolve(options.output);
    await fs.writeFile(outputPath, dbmlContent, 'utf-8');

    console.log(`🎉 DBML exported to: ${outputPath}`);
    console.log('\nOpen it at: https://dbdiagram.io');

  } catch (error) {
    console.error('❌ Error:');
    console.error(error.message || error);

    if (error.message?.includes('password authentication failed')) {
      console.log('\n💡 Tip: Check your username/password or use the --connection flag.');
    }
  }
}

exportSchema();