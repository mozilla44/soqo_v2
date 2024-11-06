// components/EcoIndexBadge.tsx
import React, { useEffect } from 'react';

const EcoIndexBadge: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ecoindex-badge"></div>;
};

export default EcoIndexBadge;
