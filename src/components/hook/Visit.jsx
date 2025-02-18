
import { useSessionState } from '@/context/StateContext';
import { usePathname } from 'next/navigation';

export function useFirstVisitHome() {
    const pathname = usePathname();
    const { isFirstVisit } = useSessionState();
    return isFirstVisit && pathname === '/';
  }
