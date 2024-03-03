import React from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { mockData } from '../config/mockData';
import Popup from '../components/popUp';

function Wordsearch() {
    const [text, setText] = React.useState(mockData);
    console.log(text);

    function closePopup(): void {
        // Close the popup
        ReactDOM.unmountComponentAtNode(document.body.lastChild as Element);
    }
    
    function openPopup(selectedText: string): void {
        // Render the popup component with the selected text
        ReactDOM.render(
          <Popup message={selectedText} onClose={closePopup} />,
          document.body.appendChild(document.createElement('div'))
        );
    }
    
    function isValidTextSelected(selectedText: string): boolean {
        return selectedText.trim() !== '';
    }

    document.addEventListener('selectionchange', function() {
        const selection = window.getSelection();
        if (selection && !selection.isCollapsed) {
          const selectedText = selection.toString().trim();
          if(isValidTextSelected(selectedText)) {
            console.log('Selected text:', selectedText);
            openPopup(selectedText);
          }
        }
    });

    return (
        <div>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Wordsearch;