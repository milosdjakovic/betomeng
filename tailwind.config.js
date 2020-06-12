module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'facebok-blue': '#1876f2',
        'youtube-red': '#f80703',
        'soundcloud-orange': '#f95502',
        'mixcloud-purple': '#5000ff'
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      },
      height: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
