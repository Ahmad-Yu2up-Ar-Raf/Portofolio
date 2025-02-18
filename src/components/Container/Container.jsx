export default function Container(props){
  const{children, container = "min-h-screen content-center", variant = "px-5  max-w-6xl m-auto"  } = props
 return(
  <section className={`${container}`}>
    <div className={`${variant}`}>
  {children}
    </div>
  </section>
 )
}