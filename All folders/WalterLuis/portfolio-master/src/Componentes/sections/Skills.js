import styles from './Skills.module.css'
import javascript from '../../Image/Skills/javascript.svg'
import html from '../../Image/Skills/html.svg'
import css from '../../Image/Skills/css.svg'
import react from '../../Image/Skills/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id='skills' >
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>

            <img src={javascript}/>
            <img src={html}/>
            <img src={css}/>
            <img src={react}/>

        </div>
        
    )
}

export default Skills