import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../graphql/mutation'

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP)

  const signUp = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    })

    return response.data.createUser
  }

  return [signUp, result]
}

export default useSignUp
