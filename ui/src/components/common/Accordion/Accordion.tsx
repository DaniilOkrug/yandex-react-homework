"use client";

import { PropsWithChildren, useState } from "react";
import cn from "classnames";

import styles from "./Accordion.module.scss";
import ArrowIcon from "@icons/arrow.svg";

export function Accordion({ children }: PropsWithChildren) {
  return <section className={styles.accordion}>{children}</section>;
}

interface AccordionItemProps {
  title: string;
}

Accordion.Item = function AccordionItem({
  title,
  children,
}: PropsWithChildren<AccordionItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <details
      className={styles.item}
      onToggle={() => setIsOpen((prev) => !prev)}
    >
      <summary>
        <h2>{title}</h2>
        <ArrowIcon
          className={cn({
            [styles.arrow_rotated]: isOpen,
          })}
        />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};
