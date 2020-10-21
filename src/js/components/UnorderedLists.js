import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext';

const UnorderedLists = () => {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    console.log('loading ToDoLists')
  }, [])

  return (
    <div>
      <hr width="100%" />
      <h4>Following List of Tasks is loading  from <i>UnorderedLists.js</i></h4>
      <ul>
        {store.tasks.map( (task, index) => <li key={index}>{task.label} </li>)}
      </ul>
    </div>
  )
}

export {UnorderedLists as default};