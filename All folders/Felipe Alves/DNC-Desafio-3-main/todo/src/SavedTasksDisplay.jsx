import React from 'react';
import styles from './SavedTasksDisplay.module.css'
function SavedTasksDisplay({savedTasks}){
  return (
    <div className={styles.savedtext}>
    {savedTasks.map((text, index) =>(
      <div  key={index}  className="saved-text">
          {index + 1}: {text}
  
      </div>
      
  ))}
  </div>
  ) 
  }

  export default SavedTasksDisplay;
  