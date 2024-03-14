import ButtonB from '../elements/ButtonB'
import styles from './Project.module.css'
import Card from '../elements/Card'
import arquitetura from '../../Image/Projects/arquitetura.svg'
import Portfoliowalter from '../../Image/Projects/Portfoliowalter.svg'

function Project(){
    return(
        <div className={styles.project} id='projects'>
            <h1> Projetos </h1>
            <Card img={arquitetura}
            title="LP Arquitetura" 
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma landing Page para uma empresa de arquitetura"
            repo="https://github.com/Wallterr/ProjetoArquitetura"
            site="https://projetoarquitetura.netlify.app/"
            />
            <Card img={Portfoliowalter} 
            title="Portfolio" 
            tech="HTML, CSS e React"
            description="Desenvolvimento do meu portfolio"
            repo="https://github.com/Wallterr/ProjetoArquitetura"
            site="https://projetoarquitetura.netlify.app/"
            />
                   
            
            <ButtonB text='Acesse meu repositorio' link='https://github.com/Wallterr' />

        </div>
    )
}

export default Project