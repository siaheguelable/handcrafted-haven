"use client"

import React from "react"
import { cn } from "../../lib/utils"

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "default", ...props },
  ref
) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = {
    default: "bg-gray-600 text-white hover:bg-gray-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-gray-600 underline-offset-4 hover:underline",
    cta: "bg-indigo-600 text-white hover:bg-indigo-700 font-medium",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    />
  )
})