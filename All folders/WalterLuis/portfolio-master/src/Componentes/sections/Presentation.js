import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div className={styles.presentation} id='presentantion' >
            <h4><strong> Bem-vindo ao meu portfólio </strong></h4>
            <h1>Oi, eu sou o Walter!</h1>
            <p>Sou apaixonado por tecnologia, por tudo que envolva aplicações<br/>
                que facilitam o nosso dia-a-dia. Visto que isso é o que eu amo,<br/>
                migrei para area de programação para poder criar e inovar tudo<br/>
                que possa facilitar a vida das pessoas e torna-las melhores seres-humanos.<br/>
                Acredito que a fusão entre homem e maquina é a proxima evolução natural da espécie,<br/>
                Porem é necessario que nosso lado emocional seja a maior parte dessa fusão
            </p>

            <ButtonA link='https://github.com/Wallterr' text='Conect-se comigo'/>
            

        </div>
    )
}

export default Presentation