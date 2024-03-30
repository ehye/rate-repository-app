import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'
import theme from '../theme'

const validationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
})

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
    validationSchema,
    onSubmit,
  })

  return (
    <View style={{ alignSelf: 'center' }}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
      )}
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