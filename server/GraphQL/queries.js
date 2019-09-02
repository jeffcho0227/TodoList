import gql from 'graphql-tag';

export const getWholeList = gql`
  query {
    list {
      Title
      Location
      TimeInterval
      Note
      id
    }
  }
`;

export const addItem = () => gql`
  mutation addList() {
    Title: test,
  }
`