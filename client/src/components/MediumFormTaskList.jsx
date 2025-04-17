import { useState } from 'react';

function Task({ task, onChange, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);
  let taskContent; // Would like feedback if this should be 'const' instead of 'let'
  
  if (isEditing) {

    taskContent = (

      <section id='medium-form-edit-task' className='flex'>
        <input
          className='w-30 p-1'
          value={task.content}
          onChange={e => {
            onChange({
              ...task,
              content: e.target.value
            });
          }} />
        <button className='border-l bg-green-600 hover:bg-green-500 p-1 w-[44px]' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </section>
    );

  } else {
    
    taskContent = (
      
      <section id='medium-form-view-task' className='flex'>
        <p className='w-30 overflow-scroll p-1'>{task.content}</p>
        <button className='border-l flex-2 p-1 bg-blue-500 hover:bg-blue-400 w-[44px]' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </section>
    );

  };
  
  return (
    
    <section className='flex flex-cols w-[245px]'>
      
      <section id='medium-form-task' className='flex-1 border-1 w-60'>
        {taskContent}
      </section>
      
      <section id='medium-form-delete' className='flex-2'>
        <button className='border-1 p-1 bg-red-500 hover:bg-red-400' onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </section>
      
      <section id='medium-form-edit' className='p-1 flex-2 flex border-1 border-l-0'>
        <input
          className='flex self-center'
          type="checkbox"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
      </section>

    </section>
  );
};

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}){
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))};
    </ul>
  );
};