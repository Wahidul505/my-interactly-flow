import React from 'react';
import './Options.css';
import { TbHandClick } from 'react-icons/tb';
import { HiOutlineLink } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';

const SingleChoice = () => {
    return (
        <div>
            <div className='button-align'>
                <div className="heading">Show Buttons</div>
                <select name="" id="" className='custom-select' style={{ width: '50%' }}>
                    <option value="vertically">Vertically</option>
                    <option value="horizontally">Horizontally</option>
                </select>
            </div>
            <div>
                <div className="heading">Buttons</div>
                <div className='button-edit'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className='button-icon'><TbHandClick /></span>
                        <span>Button 1</span>
                    </div>
                    <span><IoMdTrash style={{ color: '#FB5E5E' , fontSize: '20px'}} /></span>
                </div>
                <div className='button-edit'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className='button-icon'><HiOutlineLink /></span>
                        <span>Button 1</span>
                    </div>
                    <span><IoMdTrash style={{ color: '#FB5E5E' , fontSize: '20px'}} /></span>
                </div>
            </div>
        </div>
    );
};

export default SingleChoice;