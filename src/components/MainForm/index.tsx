import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';


export function MainForm(){
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();

    console.log(taskNameInput);
  }
    return (
        <form onSubmit={ handleCreateNewTask}  className='form'>
          <div className='formRow'>
            <DefaultInput 
              type="text"
              labelText="task:" 
              id="inputTask"
              placeholder='Digite o texto...' 
              ref={taskNameInput}
              />
          </div>

          <div className='formRow'>
            <p>Nesse ciclo foque por 25 min.</p>
          </div>

          <div className='formRow'>
            <Cycles/>
          </div>
          
          <div className='formRow'>
            <DefaultButton icon={< PlayCircleIcon />} />
          </div>

        </form>
    );
}