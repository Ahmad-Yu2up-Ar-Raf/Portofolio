
import Header from '@/components/Header';


export default function AppShell (props) {
 const {children} = props
     return (
 <main>
 <Header />
 {children}
   
 </main>
     );
}