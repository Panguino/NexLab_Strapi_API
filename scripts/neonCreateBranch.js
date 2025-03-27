const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the current Git branch name
  const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

  // Create a new Neon branch and capture the JSON output
  const neonOutput = execSync(`neon branches create --name ${branchName} --parent development --output json`).toString();

  // Parse the JSON output
  const neonData = JSON.parse(neonOutput);

  // Extract the connection URI
  const connectionUri = neonData.connection_uris?.[0]?.connection_uri;

  if (!connectionUri) {
    throw new Error('❌ Could not retrieve connection URI.');
  }

  console.log(`✅ Neon branch '${branchName}' created from 'development'.`);
  console.log(`🔗 New DATABASE_URL:\n${connectionUri}`);

  // Path to the .env file
  const envPath = path.resolve(process.cwd(), '.env');

  // Read the current .env file (if exists)
  let envContent = '';
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }

  // Update or add the DATABASE_URL in .env
  const updatedEnvContent = envContent.includes('DATABASE_URL=')
    ? envContent.replace(/DATABASE_URL=.*/g, `DATABASE_URL=${connectionUri}`)
    : envContent + `\nDATABASE_URL="${connectionUri}"\n`;

  // Write back the updated .env file
  fs.writeFileSync(envPath, updatedEnvContent);

  console.log(`✅ .env file updated with new DATABASE_URL.`);
} catch (error) {
  console.error('❌ Error:', error.message);
}
