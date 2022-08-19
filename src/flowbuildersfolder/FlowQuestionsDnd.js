import React from "react";
import './Dnd.css';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { AiFillCheckSquare } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { BsFiles } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';


const types = {
    question: 'question',
    singleChoice: 'single-choice',
    multipleChoice: 'multiple-choice',
    carousel: 'carousel',
    form: 'form'
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
                    <span
                        style={{ display: 'inline-block', marginRight: '8px' }}
                        className="add-btn">
                        <BiPlus />
                    </span>
                    <span className="question-types-heading">Question types</span>
                </div>
                <div className="tips">Drag & Drop or click to add to the flow</div>
                <div className="CustomScrollBar-QuestionType">

                    <div className="search-type">
                        <input type="text" placeholder="Search here for question types"/>
                    </div>

                    <div
                        id={types.question}
                        className="type"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.question)}
                        draggable>
                        Input
                    </div>

                    <div
                        id={types.singleChoice}
                        className="type"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.singleChoice)}
                        draggable>
                        Single Choice
                    </div>

                    <div
                        id={types.multipleChoice}
                        className="type"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.multipleChoice)}
                        draggable>
                        Multiple Choice
                    </div>


                    <div
                        id={types.carousel}
                        className="type"
                        onClick={createNodeOnClick}
                        onDragStart={(event) => onDragStart(event, types.carousel)}
                        draggable>
                        Carousel
                    </div>

                    <div
                        id={types.form}
                        className="type"
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