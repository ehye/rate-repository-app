import { useState } from 'react'
import { Text, TextInput, Pressable, View } from 'react-native'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'

export const SignInContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
  })

  const initialValues = {
    username: 'kalle',
    password: 'password',
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View>
      <TextInput
        placeholder="Username"
        style={theme.inputText}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        style={theme.inputText}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
      )}
      <Pressable style={theme.button} onPress={formik.handleSubmit}>
        <Text style={{ color: '#ffffff' }}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
      setError(e)
      setTimeout(() => {
        setError('')
      }, 5 * 1000)
    }
  }

  return (
    <View>
      <SignInContainer onSubmit={onSubmit} />
      <View>
        <Text style={theme.inputError}>{error.message}</Text>
      </View>
    </View>
  )
}

export default SignIn
