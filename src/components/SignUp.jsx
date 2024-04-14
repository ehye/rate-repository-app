import { useState } from 'react'
import { Text, TextInput, Pressable, View } from 'react-native'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'

export const SignUpContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    username: yup.string().required('username is required').min(5).max(30),
    password: yup.string().required('password is required').min(5).max(50),
    passwordConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'password confirm is required'),
  })

  const initialValues = {
    username: 'test3',
    password: 'password',
    passwordConfirm: 'password3',
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
        <Text style={theme.inputError}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        style={theme.inputText}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={theme.inputError}>{formik.errors.password}</Text>
      )}
      <TextInput
        placeholder="Password confirmation"
        style={theme.inputText}
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange('passwordConfirm')}
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={theme.inputError}>{formik.errors.passwordConfirm}</Text>
      )}
      <Pressable style={theme.button} onPress={formik.handleSubmit}>
        <Text style={{ color: '#ffffff' }}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp()
  const navigate = useNavigate()
  const [signIn] = useSignIn()
  const [error, setError] = useState('')

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp({ username, password })
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
      <SignUpContainer onSubmit={onSubmit} />
      <View>
        <Text style={theme.inputError}>{error.message}</Text>
      </View>
    </View>
  )
}

export default SignUp
