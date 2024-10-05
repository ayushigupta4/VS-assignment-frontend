// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const submitPipeline = async () => {
        const pipeline = {
            nodes: nodes.map((node) => ({
                id: node.id,
                type: node.type,
                data: node.data
            })),
            edges: edges.map((edge) => ({
                id: edge.id,
                source: edge.source,
                target: edge.target,
                label: edge.label||""
            }))
        };

        const formData = new FormData();
        formData.append('pipeline', JSON.stringify(pipeline));

        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log("pipeline submitted", result);

            const {num_nodes, num_edges, is_dag } = result;
            alert(
                `Pipeline creation successful
                 No. of nodes: ${num_nodes}
                 No. of edges: ${num_edges}
                 DAG: ${is_dag?'Yes':'No'}`
            );

        } catch(error) {
            console.error("Error submitting pipeline: ", error);
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button 
            style={{ backgroundColor: '#857daf',
                color: '#fff',
                height: '40px',
                width: '100px',
                border: '1px solid #a79ddd',
                cursor: 'pointer',
                borderRadius: '5px'
            }} 
            onClick={submitPipeline} 
            type="submit">Submit</button>
        </div>
    );
}
