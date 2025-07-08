import { useState, useEffect } from "react";
import { Clock, TrendingUp } from "lucide-react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-4 text-center">
          <Clock className="h-5 w-5 animate-pulse" />
          <div className="flex items-center space-x-2">
            <span className="font-medium">🔥 OFERTA ESPECIAL EXPIRA EM:</span>
            <div className="flex space-x-1 font-mono font-bold text-lg">
              <span className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="bg-white/20 px-2 py-1 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">+127 pessoas compraram hoje</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;