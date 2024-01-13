import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function Error() {
  const error = useAppSelector((state) => state.error);
  return (
    <div>
      <h1> There are some network error: {error.message}</h1>
      <h1>Try to refresh page!</h1>
    </div>
  );
}

export default Error;
