 import './styles/theme.css'
 import './styles/global.css';
import { Heading } from './components/Heanding';
import {Timer} from 'lucide-react';

 export function App(){
  return (
    <div>
      <Heading>
        Ola Mundo1 !
        <button>
          <Timer />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reprehenderit, cumque nulla quae eaque quo quia omnis 
        placeat ullam nobis harum saepe alias corrupti dolores unde 
        explicabo vel cum minima laboriosam.</p>
    </div>
  );
}

