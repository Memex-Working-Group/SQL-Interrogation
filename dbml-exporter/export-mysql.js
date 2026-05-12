#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const { program } = require('commander');
const { connector } = require('@dbml/connector');
const { importer } = require('@dbml/core');

program
  .name('export-dbml')
  .description('Export MySQL schema to DBML using @dbml/connector')
  .version('1.0.0')
  .option('-c, --connection <string>', 'MySQL connection string', 'mysql://root:wordpress@127.0.0.1:3307/wordpress')
  .option('-o, --output <path>', 'Output DBML file path', 'schema.dbml')
  .option('-s, --schemas <schemas>', 'Comma-separated schemas (overrides connection string)', '')
  .parse();

const options = program.opts();

async function exportSchema() {
  let connectionString = options.connection;

  if (options.schemas) {
    const separator = connectionString.includes('?') ? '&' : '?';
    connectionString += `${separator}schemas=${options.schemas}`;
  }

  console.log('🔌 Connecting to MySQL...');
  console.log(`   Connection: ${connectionString.replace(/:[^:@]+@/, ':****@')}`);

  try {
    const schemaJson = await connector.fetchSchemaJson(connectionString, 'mysql');

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
