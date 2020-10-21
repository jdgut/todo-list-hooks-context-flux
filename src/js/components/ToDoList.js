import React from 'react';

import AddTask from './AddTask';
import HeadingList from './HeadingList';
import UnordereredList from './UnorderedLists';


const TodDoList = () => {
  return (
    <div>
      <AddTask />
      <HeadingList />
      <UnordereredList />
    </div>
  );
}

export {TodDoList as default};