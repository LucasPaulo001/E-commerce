import TextField from "@mui/material/TextField";

export const InputDefault = ({ label, value, onChange, type, required, error, fullWidth }) => {
    
  return (
    
    <TextField 
        label={label} 
        variant="filled" 
        onChange={onChange}
        value={value}
        type={type}
        required={required}
        error={error}
        fullWidth={fullWidth}
    />
  );
};
