'use client';
import React, { useId } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
interface Props {
  onChange: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  const id = useId();
  return (
    <AddressSuggestions
      token='ebee392e7afb76ddbbfee17817cf7380b23fc508'
      onChange={(data) => onChange?.(data?.value)}
      uid={id}
    />
  );
};
