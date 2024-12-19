import React from 'react';
import { useTimerStore } from '../store/useTimerStore';
import { TimerModal } from './TimerModal';
import { Timer } from '../types/timer';

export const EditTimerModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  timer: Timer;
}> = ({ isOpen, onClose, timer }) => {
  const { editTimer } = useTimerStore();

  return (
    <TimerModal
      isOpen={isOpen}
      onClose={onClose}
      initialData={timer}
      onSubmit={(data) => editTimer(timer.id, data)}
      submitLabel="Save Changes"
    />
  );
};
