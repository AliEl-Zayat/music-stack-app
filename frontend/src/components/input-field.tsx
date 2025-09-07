import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TInputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
};

export default function InputField({
  name,
  label,
  placeholder,
  type,
  required = false,
}: TInputFieldProps) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
