'use client';

import { useEscape } from '@/hooks/useEscape';

import type { MouseEvent, PropsWithChildren } from 'react';

type ModalContainerProps = PropsWithChildren<{
  onClose: () => void;
}>;

export function ModalContainer({ onClose, children }: ModalContainerProps) {
  useEscape(onClose);
  const handleBackdropClick = () => {
    onClose();
  };

  const handleDialogClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      data-modal-root
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 sm:px-6"
      onClick={handleBackdropClick}
    >
      <div
        className="border-border max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border bg-white p-4 text-black shadow-lg sm:p-6"
        onClick={handleDialogClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certs-modal-title"
      >
        {children}
      </div>
    </div>
  );
}
