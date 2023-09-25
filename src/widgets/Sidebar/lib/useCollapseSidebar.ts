import { useEffect, useState } from 'react';

export const useCollapseSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onCollapse = () => {
    if (isCollapsed) {
      localStorage.setItem('sidebar', 'expanded');
    } else {
      localStorage.setItem('sidebar', 'collapsed');
    }

    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const sidebar = localStorage.getItem('sidebar');

    if (sidebar) {
      setIsCollapsed(sidebar === 'collapsed');
    }
  }, []);

  return { isCollapsed, onCollapse };
};
