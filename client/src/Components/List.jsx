import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Item from './Item.jsx';
import * as queries from '../../../server/GraphQL/queries.js';


const List = () => {
  console.log(queries, 'here');
  const { loading, error, data } = useQuery(queries.getWholeList);
  
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