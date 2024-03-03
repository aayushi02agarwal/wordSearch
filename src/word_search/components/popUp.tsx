import React from 'react';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Popup;