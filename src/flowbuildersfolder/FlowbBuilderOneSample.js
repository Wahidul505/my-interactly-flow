import React, { useCallback, useState, useRef } from 'react';
import ReactFlow, {
  Background,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowProvider,
  ConnectionLineType
} from 'react-flow-renderer';
import FlowQuestionDnD from './FlowQuestionsDnd';
import './Dnd.css';
import { FaQuestion } from 'react-icons/fa';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { AiFillCheckSquare } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdViewCarousel } from 'react-icons/md';
import { TiMinus } from 'react-icons/ti';
import EditContainer from './EditOptions/EditContainer';


const initialNodes = [
  {
    id: 'ewb-1',
    type: 'input',
    data: { label: <div><img src='./only logoooooooooo@2x.png' alt='' /></div> },
    position: { x: 288, y: 0 },
    style: { width: '75px', boxShadow: '0px 3px 6px #857EEE3D', border: '0px solid #fff', borderRadius: '12px' }
  }
];


// Drag and Drop List
let id = 0;
const getId = () => `dndnode_${id++}`;

const FlowBuilderOneSample = () => {

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [clickedType, setClickedType] = useState();


  // Connect the Line Animated
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds))
  }, []);


  // DND

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    // console.log(event, 'shankar');
    event.dataTransfer.dropEffect = 'move';
  }, []);

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
        // img,
        position,
        data: {
          label:
            <>
              <div className='icon-container'>
                {type === 'question' && <FaQuestion />}
                {type === 'single-choice' && <IoMdRadioButtonOn />}
                {type === 'multiple-choice' && <AiFillCheckSquare />}
                {type === 'carousel' && < MdViewCarousel />}
                {type === 'form' && < BsFillFileEarmarkTextFill />}
              </div>
              <button className='remove-btn'><TiMinus /></button>
            </>
        },
      };

      setNodes((nds) => nds.concat(newNode));
      console.log(newNode);
    },
    [reactFlowInstance]
  );


  const createNodeOnClick = event => {
    // const type = event.dataTransfer.getData('application/reactflow');
    const newNode = {
      id: getId(),
      type: event.target.id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label:
          <>
            <div className='icon-container'>
              {event.target.id === 'question' && <FaQuestion />}
              {event.target.id === 'single-choice' && <IoMdRadioButtonOn />}
              {event.target.id === 'multiple-choice' && <AiFillCheckSquare />}
              {event.target.id === 'carousel' && < MdViewCarousel />}
              {event.target.id === 'form' && < BsFillFileEarmarkTextFill />}
            </div>
            <button className='remove-btn'><TiMinus /></button>
          </>
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }

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

  // Style and Type
  // const onContextMenu = (e) => {
  //   e.preventDefault();
  //   setIsOpen(true);
  //   setPosition({ x: e.clientX - 20, y: e.clientY - 20 });
  // }

  // Delete
  // const deleteNode = () => {
  //   setElements((elements) => elements.filter((element) => element.id != nodeData.id));
  //   setIsOpen(false);
  // };

  // Update
  // const updateNodedata = (text, node) => {
  //   const findElementindex = elements.findIndex((items)=>items.id===node.id);
  //   if(findElementindex>-1 && elements[findElementindex]?.data?.label){
  //     elements[findElementindex].data.label = text;
  //     setElements([...elements])
  //   }
  // }

  const onNodeClick = (event, node) => {
    if (event.target.parentNode.parentNode.className === 'remove-btn' || event.target.className === 'remove-btn' || event.target.parentNode.className === 'remove-btn') {
      const rest = nodes.filter(singleNode => singleNode.id !== node.id);
      setNodes(rest);
    }
  }



  return (
    <div>
      <div style={{ width: '100%', height: '100vh', background: '#F6F9FF' }} ref={reactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow fitView
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultEdgeOptions={edgeOptions}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onNodeClick={onNodeClick}
            connectionLineStyle={connectionLineStyle}
            connectionLineType={ConnectionLineType.SmoothStep}
            onDragOver={onDragOver}
          // Context Menu Node Data
          // onNodeContextMenu={onContextMenu}
          >
            <Background />
            <div className='DisplayQuestionType_Canvas'>
              <FlowQuestionDnD createNodeOnClick={createNodeOnClick} />
            </div>
            <div>
              <EditContainer />
            </div>
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default FlowBuilderOneSample;