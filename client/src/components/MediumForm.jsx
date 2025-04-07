import { useReducer, useState } from 'react';
import MediumFormTaskList from './MediumFormTaskList';
import MediumFormAddTask from './MediumFormAddTask';

export default function MediumForm() {
  const [nextId, setNextId] = useState(0);
  const initialTasks = [];
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(content) {
    dispatch({
      type: 'added',
      id: nextId,
      content: content
    });
    setNextId(nextId+1);
  }

  function handleChangeTask(myTask){
    dispatch({
      type: 'changed',
      task: myTask
    });
  };

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  };

  function stopRefreshEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  function tasksReducer(tasks, action) {
    switch (action.type){
      case 'added': {
        return [...tasks, {
          id: action.id,
          content: action.content,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(task => {
          if (task.id === action.task.id) {
            return action.task;
          } else {
            return task;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(task => task.id != action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  };

  return(
    <section id='medium-section' className='p-2 m-2'>
      <p className='text-2xl'>Medium Form</p>
      <MediumFormAddTask
        onAddTask={handleAddTask}
      />
      <MediumFormTaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </section>
  )
};

