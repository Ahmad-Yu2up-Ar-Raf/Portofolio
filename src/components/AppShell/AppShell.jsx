import Header from "@/components/Header";
import SpotlightCard from "../combine/CPU";

export default function AppShell(props) {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
