const primary = '#0366d6'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: primary,
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
    color: '#d73a4a',
    marginLeft: '30px',
  },
}

export default theme
