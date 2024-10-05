import { useEffect } from 'react';

export const useAutosizeTextArea = (textAreaRef, value) => {
   useEffect(() => {
    if(textAreaRef) {
        setTimeout(() => {
            textAreaRef.style.height = '0px';
            const scrollHeight  = textAreaRef.scrollHeight;

            textAreaRef.style.height = `${scrollHeight}px`;
        }, 0);
        
        
        
    }
   }, [textAreaRef, value]) 
}