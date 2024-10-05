// textNode.js

import { useRef, useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';
import { useAutosizeTextArea } from './custom-hooks/useAutosizeTextArea';

const curlyBracketRegex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const textAreaRef = useRef(null);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  useAutosizeTextArea(textAreaRef.current, currText);
  const [variableNames, setVariableName] = useState([]);

  useEffect(() => {
    const matches = [...currText.matchAll(curlyBracketRegex)];
    if(matches.length) {
      const variables = matches.map((match) => match[1]);
      setVariableName(variables);
    } else {
      setVariableName([]);
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      title={"Text"}
      handles={[
        {id: `${id}-output`, type: 'source', position: Position.Right},
        ...variableNames.map((variable, index) => ({
          id: `${id}-input-${variable}`,
          type: 'target',
          position: Position.Left,
          style: { top: `${index*10 + 20}px`}
        }))
      ]}
    >
      <label>
           Text:
           <textarea
             ref={textAreaRef}
             id='textarea-id'  
             value={currText} 
             onChange={handleTextChange} 
             rows={3}
           />
      </label>
    </BaseNode>
    
    
  );
}
