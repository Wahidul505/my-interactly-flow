import React from "react";
import './Dnd.css';

const types = {
    singleChoice: 'Single-choice',
    multipleChoice: 'Multiple-choice',
    questions: 'Questions',
    carousel: 'Carousel',
    form: 'Form'
}

const FlowQuestionDnD = ({ createNodeOnClick }) => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
        // console.log(event, 'dbd')
    };

    return (
        <aside className="DndHeight_100">
            <div className="DndHeight_100">
                <div>
                    <div className="description">Drag and Drop the Question</div>
                </div>
                <div className="CustomScrollBar_Questiontypes">

                    <div
                        id={types.singleChoice}
                        className="dndnode Dnd-Question-Types Dnd-Flex"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.singleChoice)}
                        draggable>
                        Single Choice
                    </div>

                    <div
                        id={types.multipleChoice}
                        className="dndnode Dnd-Question-Types Dnd-Flex"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.multipleChoice)}
                        draggable>
                        Multiple Choice
                    </div>

                    <div
                        id={types.questions}
                        className="dndnode Dnd-Question-Types Dnd-Flex"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.questions)}
                        draggable>
                        Questions
                    </div>

                    <div
                        id={types.carousel}
                        className="dndnode Dnd-Question-Types Dnd-Flex"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.carousel)}
                        draggable>
                        Carousel
                    </div>

                    <div
                        id={types.form}
                        className="dndnode Dnd-Question-Types Dnd-Flex"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.form)}
                        draggable>
                        Form
                    </div>

                </div>
            </div>
        </aside>
    )
}

export default FlowQuestionDnD;