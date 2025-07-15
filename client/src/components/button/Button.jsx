import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonDefault({text, variant, type}) {
  return <Button type={type} variant={variant}>{text}</Button>;
}
