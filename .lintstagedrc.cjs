module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['npx prettier --write', 'npm run lint:js --fix'],
}
