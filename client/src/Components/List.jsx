import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Item from './Item.jsx';

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

const List = () => {
  const { loading, error, data } = useQuery(getWholeList);

  if (loading) return 'Loading!!';
  if (error) return `Error!! ${error}`;

  return (
    <div>
      {data.list.map(item => {
        return <Item 
                  Title={item.Title}
                  Location={item.Location}
                  TimeInterval={item.TimeInterval}
                  Note={item.Note}
                  key={item.id}/>
      })}
    </div>
  )
}

export default List;