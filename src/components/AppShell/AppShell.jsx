
import Header from '@/components/Header';
import SpotlightCard from '../other/Spotligth';

export default function AppShell (props) {
 const {children} = props
     return (
 <main>
 <Header />
 {children}
   
 </main>
     );
}