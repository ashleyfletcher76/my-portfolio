'use client';

import { useState, useEffect } from 'react';

import { useAriaHideSiblings } from '@/hooks/useAriaHideSiblings';
import { useScrollLock } from '@/hooks/useScrollLock';

import { ModalContainer } from './certificates/ModalContainer';
import { ModalHeader } from './certificates/ModalHeader';
import { ModalNavigation } from './certificates/ModalNavigation';
import { ModalViewer } from './certificates/ModalViewer';
import { CERTIFICATES } from './educationTimelineConfig';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function CertificatesModal({ isOpen, onClose }: Props) {
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setActiveCertIndex(0);
  }, [isOpen]);

  useScrollLock(isOpen);
  useAriaHideSiblings(isOpen, 'data-modal-root');

  if (!isOpen) return null;

  const next = () => setActiveCertIndex((i) => (i + 1) % CERTIFICATES.length);
  const prev = () => setActiveCertIndex((i) => (i === 0 ? CERTIFICATES.length - 1 : i - 1));

  return (
    <ModalContainer onClose={onClose}>
      <ModalHeader onClose={onClose} />

      <div className="mt-4 space-y-4">
        <ModalNavigation activeCertIndex={activeCertIndex} onPrev={prev} onNext={next} />

        <ModalViewer activeCertIndex={activeCertIndex} />
      </div>
    </ModalContainer>
  );
}
