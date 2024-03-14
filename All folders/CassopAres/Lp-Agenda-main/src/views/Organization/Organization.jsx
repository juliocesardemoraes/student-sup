import Header from '../../components/Header'
import Container from '../../components/Container'

import './index.scss'
import Input_Organization from '../../components/Inputs/Input_Organization'

const Organization = () => {
  return (
    <div className='organization'>
      <Header/>
      <Container>
           <h1>Coloque lembretes, observações,  ......</h1>
           <Input_Organization/>         
      </Container>
    </div>
  )
}

export default Organization