import styled from "styled-components";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  label: string;
  required?: boolean;
  istextarea?: boolean;
  id?: string;
}

const InputStyles = {
  padding: "1rem",
  margin: "8px",
  fontSize: "1rem",
  borderRadius: "1.5rem",
  width: "-webkit-fill-available",
  border: "1px solid #ccc",
  outline: "none",
  height: "fit-content",
};

const Label = styled.label`
  margin-left: 8px;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  ${InputStyles}
`;

const StyledTextArea = styled.textarea`
  ${InputStyles}
`;

const Input = ({
  value,
  onChange,
  type,
  label,
  id,
  istextarea = false,
  ...props
}: InputProps) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {istextarea ? (
        <StyledTextArea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      ) : (
        <StyledInput
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
