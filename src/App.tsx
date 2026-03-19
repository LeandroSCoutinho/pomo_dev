import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css'
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

 export function App(){
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
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
            <button>Iniciar</button>
          </div>

        </form>
      </Container>

    </>
  );
}

