import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'
import theme from '../theme'

const onSubmit = (values) => {
  console.log(values)
}

const initialValues = {
  username: '',
  password: '',
}

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <View style={{ alignSelf: 'center' }}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text
          style={{
            backgroundColor: theme.colors.primary,
            color: '#ffffff',
            borderRadius: 4,
            padding: '0 4px 2px 4px',
          }}
        >
          Sign In
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
