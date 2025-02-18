// /context/SessionStateContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Inisialisasi context dengan nilai default
const SessionStateContext = createContext({
  isFirstVisit: true,
});

// Buat provider
export function SessionStateProvider({ children }) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const router = useRouter();
  
  // Inisialisasi state dari sessionStorage ketika komponen dimuat
  useEffect(() => {
    // Kode ini akan dijalankan hanya di client-side
    if (typeof window !== 'undefined') {
      // Membaca dari sessionStorage
      const storedValue = sessionStorage.getItem('isFirstVisit');
      
      // Jika nilai sudah ada di sessionStorage (berarti sudah pernah diubah dalam session ini)
      if (storedValue !== null) {
        setIsFirstVisit(JSON.parse(storedValue));
      }
    }
  }, []);
  
  // Effect untuk mengubah nilai ketika user berpindah halaman
  useEffect(() => {
    // Hanya ubah jika masih true dan user tidak di halaman index
    if (isFirstVisit && router.pathname !== '/') {
      setIsFirstVisit(false);
      // Simpan ke sessionStorage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('isFirstVisit', 'false');
      }
    }
  }, [router.pathname, isFirstVisit]);

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