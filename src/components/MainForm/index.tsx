import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm(){
  
    return (
        <form  className='form'>
          <div className='formRow'>
            <DefaultInput 
              type="text"
              labelText="task:" 
              id="inputTask"
              placeholder='Digite o texto...' 
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