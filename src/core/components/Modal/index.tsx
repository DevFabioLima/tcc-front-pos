/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

interface IModal {
  page: React.ComponentType
  isVisible: boolean,
}

const StyModal: React.FC<IModal> = ({ page: Page, isVisible }) => {
  const [open, setOpen] = useState(isVisible);

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown
      disablePortal
    >

      <Page />

    </Modal>
  );
};

export default StyModal;
