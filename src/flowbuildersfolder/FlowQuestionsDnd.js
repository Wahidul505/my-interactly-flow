import React from "react";
import './Dnd.css';


const FlowQuestionDnD = () => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
        // console.log(event, 'dbd')
    };

    return (
        <aside>
            <div className="description">Drag and Drop the Question</div>
            <div className="dndnode input Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'What is your name?', './logo192.png')} draggable>
                {/* <img src='./logo192.png' /> */}
                Question
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Choose a Input')} draggable>
                Input
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Single Choice')} draggable>
                Single Choice
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Choose a Multiple Choice')} draggable>
                Multiple Choice
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Calender')} draggable>
                Calender
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Location')} draggable>
                Location
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Corousel')} draggable>
                Corousel
            </div>
            <div className="dndnode Dnd-Question-Types" onDragStart={(event) => onDragStart(event, 'Form')} draggable>
                Form
            </div>
            {/* <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div> */}
        </aside>
    )
}

export default FlowQuestionDnD;