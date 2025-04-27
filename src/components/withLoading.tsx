// src/components/withLoading.tsx

import React, { ComponentType, useState, useEffect, JSX } from 'react';

// Higher-Order Component withLoading
function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  return function WithLoadingWrapper(props: P) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading process (e.g., fetching data)
      const timer = setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer when the component is unmounted
    }, []);

    // Show loading message while data is loading
    if (loading) {
      return <h2>Loading...</h2>;
    }

    // Render the wrapped component once loading is done
    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
