import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../store/appContext';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const {store, actions } = useContext(Context);
  useEffect(() => {
    console.log('loading AddTask')
  }, [] );



  return (

      <div className="input-group mb-3 mt-3" style={{ width : '75%'}}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add Task" 
          onChange={e => setNewTask(e.target.value.trim())}
          value={newTask}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2" onClick={(e) => {
            actions.addTask(newTask);
            setNewTask('');
          }}>Button</button>
        </div>
      </div>
  );
}

export {AddTask as default};