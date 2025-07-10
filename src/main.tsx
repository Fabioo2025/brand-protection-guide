import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalResources } from './utils/performance'

// Preload recursos críticos
preloadCriticalResources();

createRoot(document.getElementById("root")!).render(<App />);
