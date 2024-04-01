'use client';
import React, { useEffect, useState } from 'react';

interface Props {
  visible: boolean;
  onClose?: () => void;
}

const MockPage: React.FC<React.PropsWithChildren<Props>> = ({ visible: customVisible, onClose, children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (customVisible !== undefined) {
      setVisible(customVisible);
    }
  }, [customVisible]);

  const clickHandler = () => {
    setVisible(false);
    onClose && onClose();
  };
  return (
    <section onClick={clickHandler} className={visible ? 'active' : ''}>
      {children}
      <style jsx>{`
        section {
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: var(--color-background-1000);
          z-index: 5000;
          top: -5000px;
          left: -5000px;
          display: none;
        }

        .active {
          top: 0;
          left: 0;
          bottom: 0;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default MockPage;
