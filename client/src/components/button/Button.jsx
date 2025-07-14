import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonDefault({text, variant}) {
  return <Button variant={variant}>{text}</Button>;
}
