const primary = '#0366d6'
const danger = '#d73a4a'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: primary,
    danger: danger,
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  button: {
    backgroundColor: '#0366d6',
    color: '#ffffff',
    alignItems: 'center',
    flexGrow: 1,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  inputText: {
    flexGrow: 1,
    padding: 15,
    margin: 15,
    borderWidth: 2,
    borderColor: primary,
    borderRadius: 5,
  },
  inputError: {
    color: danger,
    marginLeft: '30px',
  },
  rating: {
    borderColor: primary,
    width: '50px',
    height: '50px',
    borderWidth: 2,
    borderRadius: 25,
    marginTop: '10px',
    marginHorizontal: '20px',
    padding: '11px',
    alignItems: 'center',
  },
  separator: {
    height: 10,
    backgroundColor: '#e1e5e8',
  },
}

export default theme
