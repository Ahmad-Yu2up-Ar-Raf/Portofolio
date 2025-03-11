import Header from "../ui/layout/Header";
import Cursors from "../ui/Cursor";
import Footer from "../ui/layout/Footer";

export default function AppShell(props) {
  const { children, cla } = props;
  return (
    <div 
    
    id="AppShell"
    role="wrapper"
    className={`${cla} relative w-full h-full`}>

 <Header/>
      <main>
      {children}
        <Cursors />
      </main>
      {/* <Footer/> */}
      
    </div>
  );
}
