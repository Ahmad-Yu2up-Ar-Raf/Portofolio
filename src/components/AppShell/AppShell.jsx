import Header from "@/components/ui/Header";
import SpotlightCard from "../ui/combine/CPU";

export default function AppShell(props) {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
