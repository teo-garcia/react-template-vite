module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'npx prettier --write',
    'npm run lint:js --fix',
    'npm run test:unit',
  ],
  '**/*.css': ['npm run lint:css --fix'],
}
