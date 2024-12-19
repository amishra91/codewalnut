import React from 'react';
import { useTimerStore } from '../store/useTimerStore';
import { TimerModal } from './TimerModal';

export const AddTimerModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { addTimer } = useTimerStore();

  return (
    <TimerModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={addTimer}
      submitLabel="Add Timer"
    />
  );
};
