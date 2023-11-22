import { Theme } from '@emotion/react';
import { FieldLabel, Input } from './Form.styled';

type Props = {
  label?: string;
  fieldWrapperProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelProps?: {
    theme?: Theme | undefined;
    as?: React.ElementType | undefined;
  } & React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
};

const InputField = ({
  label,
  fieldWrapperProps,
  inputProps,
  labelProps,
}: Props) => {
  return (
    <div {...fieldWrapperProps}>
      <FieldLabel {...labelProps}>
        {label}
        <Input {...inputProps} />
      </FieldLabel>
    </div>
  );
};

export default InputField;
