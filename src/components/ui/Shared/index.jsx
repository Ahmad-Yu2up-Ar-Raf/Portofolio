import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"



const Container = forwardRef((
  {
    id,
    children,
    className,
    maxW = false,
    role,
    ariaLabel,
    dataTestId,
    sectionName,
   
    ...props
  }, 
  ref
) => {
 

  return (
    <section
    // style={{
    //   background: "radial-gradient(50% 50% at 50% 50%,#121212 0,#000000 100%)"
    // }}
      id={id}
      className={cn(
        "relative min-h-[90vh] lg:min-h-screen  mb-36 w-full content-center",
        maxW ? '' : 'p-4'
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
          "mx-auto   w-full",
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