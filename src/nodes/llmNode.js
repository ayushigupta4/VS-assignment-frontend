// llmNode.js

import {Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      title={"LLM"}
      handles={[
        {id: `${id}-system`, type: 'target', position: Position.Left, style: {top: `${100/3}%`}},
        {id: `${id}-prompt`, type: 'target', position: Position.Left, style: {top: `${200/3}%`}},
        {id: `${id}-response`, type: 'source', position: Position.Right}
      ]}
    >
      <div>
         <span>This is a LLM.</span>
       </div>
    </BaseNode>
  );
}
