import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const LazyComponent = (importFunc) => {
  const LazyCom = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading /> || '加载中...'}>
      <LazyCom {...props} />
    </Suspense>
  );
};

export default LazyComponent;
