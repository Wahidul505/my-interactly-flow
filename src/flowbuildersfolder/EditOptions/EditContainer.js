import React from 'react';
import './EditContainer.css';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { BiBold } from 'react-icons/bi';
import { BiItalic } from 'react-icons/bi';
import { MdFormatUnderlined } from 'react-icons/md';
import { HiLink } from 'react-icons/hi';
import SingleChoice from './Options/SingleChoice';

const EditContainer = () => {
    return (
        <div className='edit-container'>
            <header>
                <div className='heading'>Single Choice</div>
                <button className='close-btn'><IoCloseSharp /></button>
            </header>
            <div className='textarea-container'>
                <div className='textarea-edits'>
                    <span>
                        <select name="" id="">
                            <option defaultChecked>Size</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </span>
                    <span>Line Breaker</span>
                    <span><BiBold /></span>
                    <span><BiItalic /></span>
                    <span><MdFormatUnderlined /></span>
                    <span><HiLink /></span>
                    <span><AiOutlineAlignCenter /></span>
                    <span><AiOutlineAlignLeft /></span>
                    <span><AiOutlineAlignRight /></span>
                </div>
                <textarea name="" id="" placeholder='Ex: Can you please select from one of these' />
            </div>
            <div>
                <SingleChoice />
            </div>
        </div>
    );
};

export default EditContainer;