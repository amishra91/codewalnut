import React from 'react';

interface Props {
  onCancel?: () => void;
  onSubmit?: () => void;
  isSubmitDisabled: boolean;
  submitLabel: string;
  type?: 'submit' | undefined;
}

export const Button: React.FC<Props> = ({
  onCancel,
  onSubmit,
  isSubmitDisabled,
  submitLabel,
  type,
}) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t">
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      >
        Cancel
      </button>
      <button
        type={type == 'submit' ? 'submit' : 'button'}
        onClick={onSubmit}
        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
          isSubmitDisabled
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={isSubmitDisabled}
      >
        {submitLabel}
      </button>
    </div>
  );
};
