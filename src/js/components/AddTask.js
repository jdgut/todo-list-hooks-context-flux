import React, {useState, useContext} from 'react';
import { Context } from '../store/appContext';

const AddTask = () => {

  //this is where we initialize our state for newTask
  const [newTask, setNewTask] = useState('');

   //this is how we get access to the Context ( store and actions) - but we'll onl need actions - so no need to get access to store
  const { actions } = useContext(Context);

  return (

      <div className="input-group mb-3 mt-3" style={{ width : '75%'}}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add Task" 
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2" 
          onClick={(e) => {
            actions.addTask(newTask);
            setNewTask('');
          }}>Button</button>
        </div>
      </div>
  );
}

export {AddTask as default};