import React, {useState} from 'react';
import ReactFlow, {Controls, MiniMap} from 'react-flow-renderer';

const intialState = [
    {id: '1', type: 'input', data: {label: 'Node 1'}, position: {x: 250, y: 500}},
    {id: '2', data: {label: <div>Node2</div>}, position: {x: 100, y: 100}},
    {id: '3', data: {label: <div>Node2</div>}, position: {x: 100, y: 100}},
    {id: '4', data: {label: <div>Node2</div>}, position: {x: 100, y: 100}},
    {id: 'e1-2', source: '1', target: '2', animated: true},
]

// const initialNodes = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'Input Node' },
//       position: { x: 250, y: 25 },
//     },
  
//     {
//       id: '2',
//       // you can also pass a React component as a label
//       data: { label: <div>Default Node</div> },
//       position: { x: 100, y: 125 },
//     },
//     {
//       id: '3',
//       type: 'output',
//       data: { label: 'Output Node' },
//       position: { x: 250, y: 250 },
//     },
// ];

// const initialEdges = [
//     { id: 'e1-2', source: '1', target: '2' },
//     { id: 'e2-3', source: '2', target: '3', animated: true },
// ];

const ReactFlowBuilderApp = () => {

    const [elements, setElements] = useState(intialState);

    // const [nodes, setNodes] = useState(initialNodes);
    // const [edges, setEdges] = useState(initialEdges);
// const ReactFlowBuilderApp = () => <ReactFlow elements={elements}/>
    return (
        // <div style={{width:'100%',height:'100vh'}}>
        <div>
            {/* eslint-disable-next-line */}
            <div style={{width:'100%', height:'100vh'}}>
                <ReactFlow elements={elements} fitView>
                {/* <ReactFlow nodes={nodes} edges={edges} fitView> */}
                    <MiniMap />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    )
}

export default ReactFlowBuilderApp;