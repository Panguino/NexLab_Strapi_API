const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the current Git branch name
  const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

  // Retrieve the connection URI for the Neon branch
  const connectionUri = execSync(`neon connection-string --branch ${branchName}`).toString();


  if (!connectionUri) {
    throw new Error('❌ Could not retrieve connection URI.');
  }

  console.log(`🔗 Retrieved DATABASE_URL for branch '${branchName}'\n${connectionUri}`);

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
