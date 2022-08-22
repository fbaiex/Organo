import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from "react"
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Front-End II',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End I',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Modelagem de Dados',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
  ]

  // Cores primarias #DB6EBF #FFBA05 #FF8A29
  //Cores secundarias #FAE9F5 #FFF5D9 #FFEEDF

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        /> )}
      <Rodape />
    </div>
  );
}

export default App;
