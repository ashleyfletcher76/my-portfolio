'use client';

import type { MouseEvent, PropsWithChildren } from 'react';

type ModalContainerProps = PropsWithChildren<{
  onClose: () => void;
}>;

export function ModalContainer({ onClose, children }: ModalContainerProps) {
  const handBackdropClick = () => {
    onClose();
  };

  const handleDialogClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 sm:px-6"
      onClick={handBackdropClick}
    >
      <div
        className="border-border shaodw-lg max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border bg-white p-4 sm:p-6"
        onClick={handleDialogClick}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
}
