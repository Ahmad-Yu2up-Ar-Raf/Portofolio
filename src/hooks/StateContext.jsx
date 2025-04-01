// /context/SessionStateContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Inisialisasi context dengan nilai default
const SessionStateContext = createContext({
  isFirstVisit: true,
});

// Buat provider
export function SessionStateProvider({ children }) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  // Inisialisasi state dari sessionStorage ketika komponen dimuat
  useEffect(() => {
    // Kode ini akan dijalankan hanya di client-side
    if (typeof window !== 'undefined') {
      // Membaca dari sessionStorage
      const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');
      
      // Jika nilai sudah ada di sessionStorage (berarti sudah pernah diubah dalam session ini)
      if (hasVisitedThisSession === 'false') {
        setIsFirstVisit(false);
      }
      setIsLoading(false);
    }
  }, []);
  
  // Effect untuk mengubah nilai ketika user berpindah halaman
  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isFirstVisit) {
        sessionStorage.setItem('hasVisitedThisSession', 'false');
        setIsFirstVisit(false);
      }
    };

    // Change to routeChangeStart instead of routeChangeComplete
    router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => router.events.off('routeChangeStart', handleRouteChangeStart);
  }, [router, isFirstVisit]);

  if (isLoading) return null;

  return (
    <SessionStateContext.Provider value={{ isFirstVisit }}>
      {children}
    </SessionStateContext.Provider>
  );
}

// Custom hook untuk menggunakan state
export function useSessionState() {
  const context = useContext(SessionStateContext);
  if (context === undefined) {
    throw new Error('useSessionState must be used within a SessionStateProvider');
  }
  return context;
}