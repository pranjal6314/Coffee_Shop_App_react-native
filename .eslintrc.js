module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended', // Add TypeScript support
  ],
  rules: {
    // Customize specific rules here
    '@typescript-eslint/no-unused-vars': 'off', // Disable the unused variable rule
    indent: ['error', 2], // Set your preferred indentation (e.g., 2 spaces)
    // Add other rules or override existing ones as needed
  },
};
