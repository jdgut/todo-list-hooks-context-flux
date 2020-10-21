import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext';

const HeadingList = () => {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    console.log('loading HeadingList')
  }, []);

  return (
    <div>
      <hr width="100%" />
      <h4>Following List of Tasks is loading from <i>HeadingList.js</i></h4>
      {
        store.tasks.map((task, index) => (
          <div key={index}>
            <h5>{`This task is ${task.label}`}</h5>
          </div>
        ))
      }
    </div>
  )
}

export {HeadingList as default};