"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";

import { useClickOutside } from "@/hooks/useClickOuside";

import { Button } from "@/components/common";
import { ButtonSize, ButtonStyle } from "@/components/common/Button/Button";

import styles from "./DeleteConfirmationModal.module.scss";
import CloseIcon from "@icons/close.svg";

interface DeleteConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
}

export function DeleteConfirmationModal({
  show,
  onClose,
  onAccept,
  onReject,
}: DeleteConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  if (!show) return null;

  return createPortal(
    <div className={styles.wrapper}>
      <div ref={modalRef} className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Удаление билета</h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <p className={styles.description}>
          Вы уверены, что хотите удалить билет?
        </p>

        <div className={styles.btn_container}>
          <Button
            onClick={onAccept}
            size={ButtonSize.big}
            styleType={ButtonStyle.filled}
          >
            Да
          </Button>

          <Button
            onClick={onReject}
            size={ButtonSize.big}
            styleType={ButtonStyle.outlined}
          >
            Нет
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
