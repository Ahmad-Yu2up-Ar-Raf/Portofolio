import { cn } from "@/hooks/lib/utils"
import React, { forwardRef } from "react"

const Container = forwardRef((
  {
    id,
    children,
    className,
    maxW = false,
    bg = false,
    role,
    ariaLabel,
    dataTestId,
    sectionName,
    containerclasName = "relative  min-h-[90vh]    md:min-h-screen mb-20  w-full content-center",
    ...props
  },
  ref
) => {
  // Use a consistent class for the background instead of inline gradient
  const bgClass = bg ? '' : 'container-gradient-bg';
  
  return (
    <section
      id={id}
      className={cn(
        maxW ? '' : 'p-4',
        bgClass,
        containerclasName
      )}
      role={role || "region"}
      aria-label={ariaLabel || sectionName || id}
      data-testid={dataTestId || `section-${id}`}
      data-section-name={sectionName || id}
      ref={ref}
    >
      <main
        {...props}
        className={cn(
          "m-auto w-full",
          className,
          maxW ? '' : 'max-w-7xl'
        )}
      >
        {children}
      </main>
    </section>
  )
})

export default Container;