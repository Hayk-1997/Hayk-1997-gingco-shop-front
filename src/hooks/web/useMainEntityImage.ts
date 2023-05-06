import { useMemo } from 'react';

export const useMainEntityImage = (
  images: Array<{ url: string; main: boolean }>
) => {
  return useMemo(() => {
    const main = images.find((image) => image.main);
    return main?.url || '';
  }, [images]);
};
