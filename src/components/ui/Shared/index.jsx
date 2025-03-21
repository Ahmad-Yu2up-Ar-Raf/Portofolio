import { cn } from "@/lib/utils"
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
    containerclasName = "relative min-h-[90vh] overflow-x-hidden  lg:overflow-visible   lg:min-h-screen  mb-36 w-full content-center",
    ...props
  }, 
  ref
) => {
 

  return (
    <section
    
   
      id={id}
      className={cn(
        
        maxW ? '' : 'p-4',
        bg ? '' : 'bg-[radial-gradient(50%_50%_at_50%_50%,#121212_0,#000000_100%)]',
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
          "m-auto   w-full",
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