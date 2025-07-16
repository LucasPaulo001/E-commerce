import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonDefault({text, variant, type, loading, color}) {
  return <Button color={color} loading={loading} type={type} variant={variant}>{text}</Button>;
}
