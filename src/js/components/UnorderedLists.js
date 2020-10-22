import React, {useContext } from 'react';
import {Context} from '../store/appContext';

const UnorderedLists = () => {
   //this is how we get access to the Context ( store and actions)
  const {store, actions} = useContext(Context);

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