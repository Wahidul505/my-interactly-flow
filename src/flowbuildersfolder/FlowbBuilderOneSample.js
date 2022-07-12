import React, {useCallback, useState, useRef} from 'react';
import ReactFlow, { Background, Controls, MiniMap, addEdge, useNodesState, useEdgesState, applyNodeChanges, applyEdgeChanges, ReactFlowProvider } from 'react-flow-renderer';
import FlowQuestionDnD from './FlowQuestionsDnd';
import './Dnd.css';


// const styleForIcon = {width: '75px'}

const initialNodes = [
    {
      id: 'ewb-1',
      type: 'input',
      data: { label: <div><img src='./only logoooooooooo@2x.png' /></div> },
      position: { x: 288, y: 0 },
      style: {width:'75px', boxShadow: '0px 3px 6px #857EEE3D', border: '0px solid #fff', borderRadius: '12px'}
    },
    { id: 'ewb-2', 
        data: { label: 'Whats is Your Name?' }, 
        position: { x: 250, y: 120 },
        style: {boxShadow: '0px 3px 6px #857EEE3D', border: '2px solid #AAC8F9', borderRadius: '25px'}
    },
    { id: 'ewb-3', 
        data: { label: 'What is your Email' }, 
        position: { x: 250, y: 220 },
        style: {boxShadow: '0px 3px 6px #857EEE3D', border: '2px solid #AAC8F9', borderRadius: '25px'}
    },
  ];
  
  const initialEdges = [
    {
      id: 'edge-1-2',
      source: 'ewb-1',
      target: 'ewb-2',
      type: 'buttonedge',
      animated: true
    },
    {
      id: 'edge-2-3',
      source: 'ewb-2',
      target: 'ewb-3',
      type: 'buttonedge',
      animated: true
    },
  ];

  // Drag and Drop List
  let id = 0;
  const getId = () => `dndnode_${id++}`;

const FlowBuilderOneSample = () => {

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance, imgsetFlowInstance] = useState(null);
    // const [nodeHidden, setNodeHidden] = useState(false);

    // Connect the Line Animated 
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


    // DND

    const onDragOver = useCallback((event) => {
      event.preventDefault();
      // console.log(event, 'shankar');
      event.dataTransfer.dropEffect = 'move';
    }, []);


    // Click Event
    // const onElementClick = (event, element) => event.dataTransfer.getData("click", element);

    const onElementClick = useCallback (
      (event) => {  
        // console.log(event, 'click');
        // event.preventDefault();
        event.dataTransfer.onClick = 'click'

      }
    )

    const onClick = useCallback( (event, FlowQuestionDnD) => {
    // const onClick = useCallback( (event: MouseEvent, element: Node | edge) => {

      console.log(event, 'Gouri')
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      // const type = event.dataTransfer.getData("move", FlowQuestionDnD);

      if (typeof type === 'undefined' || !type) {
        return;
      }

      // if (typeof img === 'undefined' || !img) {
      //   return;
      // }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
      console.log(newNode);
    },
    [reactFlowInstance])

    const onDrop = useCallback(
      (event) => {
        console.log(event, 'shanka')
        event.preventDefault();
  
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const img = event.dataTransfer.getData('application/reactflow');
        
  
        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
          return;
        }

        if (typeof img === 'undefined' || !img) {
          return;
        }
        event.dataTransfer.getData('click', event);

  
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
          id: getId(),
          type,
          img,
          position,
          data: { label: `${type}`, icon: `${img}` },
        };
  
        setNodes((nds) => nds.concat(newNode));
        console.log(newNode);
      },
      [reactFlowInstance]
    );

    // End

    // Connected Lines in Animated true
    const edgeOptions = {
      animated: true,
      style: {
        stroke: 'b1b1b7',
      },
    };

    // Connection Line UI
    const connectionLineStyle = { stroke: 'b1b1b7' };

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
      );

    return (
        <div>
            <div style={{width:'100%', height:'100vh', background: '#F6F9FF'}} ref={reactFlowWrapper}>
              <ReactFlowProvider>
              <ReactFlow fitView
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // Animated Lines Purpose
                defaultEdgeOptions={edgeOptions}
                onConnect= {onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                connectionLineStyle={connectionLineStyle}
                onDragOver={onDragOver}
                onClick={onClick}
                onElementClick={onElementClick}
                // onClickAd={onClickAd}
                // onClickAdd={onClickAdd}
                >
                  <Controls />
                  <MiniMap />
                  <Background />
                  <div className='DisplayQuestionType_Canvas'>
                    <FlowQuestionDnD />
                  </div>
                </ReactFlow>
                {/* <FlowQuestionDnD /> */}
              </ReactFlowProvider>
            </div>
        </div>
    )
}

export default FlowBuilderOneSample;