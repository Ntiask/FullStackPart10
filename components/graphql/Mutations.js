import { gql } from "@apollo/client";

/* query needs:

{
  "credentials": {
    "username": null,
    "password": null
  }
}

*/

export const LOGIN = gql`
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

/* requires:
{
  "user": {
    "username": null,
    "password": null
  }
}*/

export const createUse = gql`

mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      username
      createdAt
    }
  }

`