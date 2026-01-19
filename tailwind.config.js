module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'glow-cyan': 'rgba(34, 211, 238, 0.8)',
        'glow-blue': 'rgba(59, 130, 246, 0.7)',
        'glow-purple': 'rgba(168, 85, 247, 0.6)',
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'glow-radial': 'radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 60px 20px rgba(34, 211, 238, 0.5)',
        'glow-blue': '0 0 60px 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 80px 40px rgba(34, 211, 238, 0.6)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
