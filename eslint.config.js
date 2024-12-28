export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-var": "error", // Ejemplo: Evitar usar "var"
      "semi": ["error", "always"], // Requiere punto y coma al final
      "quotes": ["error", "double"], // Obliga el uso de comillas dobles
    },
  },
];
