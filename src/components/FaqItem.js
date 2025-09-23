import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <button className={`faq-question ${isOpen ? 'active' : ''}`} onClick={toggleOpen}>
                <span>{question}</span>
                <ChevronDown />
            </button>
            <div className="faq-answer" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                {children}
            </div>
        </div>
    );
};

export default FaqItem;