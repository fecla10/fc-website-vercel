"use client"

import * as React from "react"

interface SelectContextValue {
  value: string
  onValueChange: (value: string) => void
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined)

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  return (
    <SelectContext.Provider value={{ value, onValueChange }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(SelectContext)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
        <svg
          className="h-4 w-4 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <SelectContent className="absolute top-full mt-1 z-50">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === SelectContent) {
                return React.cloneElement(child as React.ReactElement, {
                  onClose: () => setIsOpen(false),
                })
              }
              return null
            })}
          </SelectContent>
        </>
      )}
    </>
  )
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const context = React.useContext(SelectContext)
  return <span>{context?.value || placeholder}</span>
}

export function SelectContent({
  className = "",
  children,
  onClose,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }) {
  return (
    <div
      className={`min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectItem) {
          return React.cloneElement(child as React.ReactElement, {
            onSelect: onClose,
          })
        }
        return child
      })}
    </div>
  )
}

export function SelectItem({
  className = "",
  value,
  children,
  onSelect,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string; onSelect?: () => void }) {
  const context = React.useContext(SelectContext)
  return (
    <div
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={() => {
        context?.onValueChange(value)
        onSelect?.()
      }}
      {...props}
    >
      {children}
    </div>
  )
}

