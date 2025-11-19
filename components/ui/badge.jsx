"use client"

import React from "react"
import { cn } from "../../lib/utils"

export function Badge({ className = "", variant = "default", ...props }) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none"

  const variantClasses = {
    default: "border-transparent bg-gray-600 text-white hover:bg-gray-700",
    secondary: "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "border-gray-300 text-gray-600",
    category: "border-transparent bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  }

  const classes = cn(baseClasses, variantClasses[variant], className)

  return (
    <div className={classes} {...props} />
  )
}