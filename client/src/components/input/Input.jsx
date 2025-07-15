import TextField from "@mui/material/TextField";

export const InputDefault = ({
  label,
  value,
  onChange,
  type,
  required,
  error,
  fullWidth,
  variant,
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      onChange={onChange}
      value={value}
      type={type}
      required={required}
      error={error}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: "white", // laranja bem claro
        borderRadius: 1,
      }}
    />
  );
};
