"use client";

import { useState, forwardRef } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "./button";
import { Mail } from "lucide-react";

interface EnhancedEmailInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidChange?: (isValid: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export const EnhancedEmailInput = forwardRef<
  HTMLInputElement,
  EnhancedEmailInputProps
>(
  (
    {
      value,
      onChange,
      onValidChange,
      placeholder = "Enter your email",
      disabled,
      error,
    },
    ref
  ) => {
    const handleGmailClick = () => {
      if (!value.includes("@") && value.trim()) {
        const newValue = `${value}@gmail.com`;
        onChange(newValue);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue);

      // Basic email validation
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
      onValidChange?.(isValid);
    };

    const showGmailButton = value.trim() && !value.includes("@");

    return (
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300 h-4 w-4" />
            <Input
              ref={ref}
              type="email"
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
              disabled={disabled}
              className={`pl-10 bg-white/20 border border-white/30 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                error ? "border-red-300 focus:ring-red-400" : ""
              }`}
            />
          </div>

          {showGmailButton && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleGmailClick}
              disabled={disabled}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 px-3 py-2 text-sm whitespace-nowrap"
            >
              @gmail.com
            </Button>
          )}
        </div>

        {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

EnhancedEmailInput.displayName = "EnhancedEmailInput";
