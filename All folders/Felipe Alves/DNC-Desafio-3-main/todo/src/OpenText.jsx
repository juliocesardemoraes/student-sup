import { useState, useRef, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import './App.scss';
import SavedTasksDisplay  from './SavedTasksDisplay'

function OpenTextInput({displayOnly, addSavedText  }){
    const [isInputVisible, setInputVisible] = useState(false);
    const [displayText, setDisplayText] = useState([]);
    const [inputText, setInputText] = useState('');

    
    const handleIconClick = () => {
        if(!displayOnly){
            setInputVisible(true);
        }
        
    }

    const handleInputChange = (Event) =>{
        setInputText(Event.target.value)
    }

    const handleSaveClick = () =>{
        if(inputText.trim() !== '' ){
        setDisplayText(prevDisplayText => [...prevDisplayText, inputText]);
        setInputText('');
        setInputVisible(false);
        }

    }


    const inputRef = useRef(null);

    const handleClickOutside = (Event) =>{
        if(inputRef.current && !inputRef.current.contains(Event.target)){
            setInputVisible(false)
        }
    }

    useEffect(() => {
         const handleInputMouseDown = (event) => {
        event.stopPropagation();
    };

    if (inputRef.current) {
        inputRef.current.addEventListener('mousedown', handleInputMouseDown);
    }

    return () => {
        if (inputRef.current) {
            inputRef.current.removeEventListener('mousedown', handleInputMouseDown);
        }
    };
    }, [])

    const handleSubmit = (Event) => {
        Event.preventDefault();
        if(inputText.trim() !== ''){
            addSavedText(inputText);             
            setDisplayText([...displayText, inputText]);
            setInputText('')
        }

        setInputVisible(false)
    }



    return (
        <div>
            <SavedTasksDisplay savedTasks={displayText} />

            {(!displayOnly && isInputVisible) ?(
                <div className='input-style'>
                    <form onSubmit={handleSubmit}>
                     <input type="text" onChange={handleInputChange} placeholder='Digite a tarefa...' ref={inputRef}/>
                     <button onClick={handleSaveClick}>Salvar</button>
                     </form>
                </div>
                
               
            ):(
            <div>
                {(!displayOnly) && (<button className='transparent-button' onClick={handleIconClick}>
                    <IoMdAdd  className='icon-style'></IoMdAdd>
                </button>)}
            </div>
            )}
        </div>
        
    )
    
}













export default OpenTextInput;







