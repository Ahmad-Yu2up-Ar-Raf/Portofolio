import Header from "@/components/ui/layout/Header";
import SpotlightCard from "../ui/Animated/CPU";
import Footer from "../ui/layout/Footer";

export default function AppShell(props) {
  const { children } = props;
  return (
    <main>

      <Header />
      {children}
      {/* <Footer/> */}
      
    </main>
  );
}
