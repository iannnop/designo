import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "uppercase flex font-medium items-center tracking-wide justify-center min-h-[56px] px-5 py-4 rounded-lg transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-peach hover:bg-light-peach":
            variant === "primary",
          "text-[#333136] bg-white hover:text-white hover:bg-light-peach":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
