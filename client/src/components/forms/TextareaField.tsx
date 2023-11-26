import { Theme } from '@emotion/react';
import { FieldLabel, Textarea } from './Form.styled';

type Props = {
  label?: string;
  fieldWrapperProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  textareaProps?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  labelProps?: {
    theme?: Theme | undefined;
    as?: React.ElementType | undefined;
  } & React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
};

const TextareaField = ({
  label,
  fieldWrapperProps,
  textareaProps,
  labelProps,
}: Props) => {
  return (
    <div {...fieldWrapperProps}>
      <FieldLabel {...labelProps}>
        {label}
        <Textarea {...textareaProps} />
      </FieldLabel>
    </div>
  );
};

export default TextareaField;
