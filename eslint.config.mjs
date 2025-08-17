import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ),
  {
    rules: {
      // Possible Errors
      'no-console': 'warn',
      'no-debugger': 'error',

      // Best Practices
      'eqeqeq': ['error', 'always'],
      'curly': 'error',

      // Stylistic
      'semi': ['error', 'always'],
      'quotes': ['error', 'double', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      // React
      'react/react-in-jsx-scope': 'off', // Not needed for Next.js
      'react/prop-types': 'off', // Using TypeScript

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Accessibility
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },
];

export default eslintConfig;
