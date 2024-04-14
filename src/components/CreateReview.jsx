import { useState } from 'react'
import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useCreateReview from '../hooks/useCreateReview'
import theme from '../theme'

const CreateReviewContainer = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('repository owner name is required'),
    repoName: yup.string().required('repository name is required'),
    rating: yup
      .number()
      .positive()
      .integer()
      .lessThan(101)
      .required('rating is required'),
    review: yup.string(),
  })

  const initialValues = {
    ownerName: 'jaredpalmer',
    repoName: 'formik',
    rating: 99,
    review: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View>
      <TextInput
        placeholder="Repository owner name"
        style={theme.inputText}
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={theme.inputError}>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        placeholder="Repository name"
        style={theme.inputText}
        value={formik.values.repoName}
        onChangeText={formik.handleChange('repoName')}
      />
      {formik.touched.repoName && formik.errors.repoName && (
        <Text style={theme.inputError}>{formik.errors.repoName}</Text>
      )}

      <TextInput
        placeholder="Rating between 0 and 100"
        style={theme.inputText}
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={theme.inputError}>{formik.errors.rating}</Text>
      )}

      <TextInput
        multiline
        placeholder="review"
        style={theme.inputText}
        value={formik.values.review}
        onChangeText={formik.handleChange('review')}
      />

      <Pressable style={theme.button} onPress={formik.handleSubmit}>
        <Text style={{ color: '#ffffff' }}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const CreateReview = () => {
  const [createReview] = useCreateReview()
  const [error, setError] = useState('')

  const onSubmit = async (values) => {
    try {
      const { data } = await createReview({ ...values })
      console.log(data)
    } catch (e) {
      setError(e)
      setTimeout(() => {
        setError('')
      }, 5 * 1000)
      console.log(e)
    }
  }

  return (
    <View>
      <CreateReviewContainer onSubmit={onSubmit} />
      <View>
        <Text style={theme.inputError}>{error.message}</Text>
      </View>
    </View>
  )
}

export default CreateReview
