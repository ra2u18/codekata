"use client";

import { ChangeEvent, forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { FormErrors } from "./form-errors";

type FormInputProps = {
  id: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      value,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onChange,
      defaultValue = "",
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2">
        <fieldset className="space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}

          <Input
            onBlur={onBlur}
            defaultValue={defaultValue}
            ref={ref}
            required={required}
            name={id}
            id={id}
            value={value}
            type={type}
            disabled={pending || disabled}
            placeholder={placeholder}
            onChange={onChange}
            className={cn("text-sm px-2 py-1 h-7", className)}
            aria-describedby={`${id}-error`}
          />
        </fieldset>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);
