"use client";

import { useState } from "react";

import { Button } from "@/components/common";

import styles from "./Counter.module.scss";
import PlusIcon from "@icons/plus.svg";
import MinusIcon from "@icons/minus.svg";

interface CounterProps {
  initialValue: number;
  onChange: (count: number) => void;
}

export function Counter({ initialValue, onChange }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div className={styles.container}>
      <Button
        disabled={count <= 0}
        onClick={() => {
          onChange(count - 1);
          setCount((prev) => prev - 1);
        }}
      >
        <MinusIcon />
      </Button>

      <p className={styles.text}>{count}</p>

      <Button
        disabled={count >= 30}
        onClick={() => {
          onChange(count + 1);
          setCount((prev) => prev + 1);
        }}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
