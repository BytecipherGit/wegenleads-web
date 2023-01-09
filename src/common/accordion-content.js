import React from 'react';
import AddIcon from '../static/images/add-plus.svg';

export const AccordionContentView = ({ title, children, index, activeIndex, setActiveIndex }) => {

    const handleSetIndex = (index) => (activeIndex !== index) ? setActiveIndex(index) : setActiveIndex(0);
    return (
        <>
            <div className="accordion_bx" onClick={() => handleSetIndex(index)}>

                {(activeIndex === index) ? (
                    <>
                        <div className="accordion-heading active cursor-pointer">
                            {title}
                            <span><img src={AddIcon} alt="" /></span>
                        </div>
                        <div className="accordion-content" style={{ display: "block" }}>
                            {children}
                        </div>
                    </>
                ) :
                    <div className="accordion-heading cursor-pointer">
                        {title}
                        <span><img src={AddIcon} alt="" /></span>
                    </div>

                }

            </div>
        </>
    );
};