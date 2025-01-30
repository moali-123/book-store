import React from 'react';
import { useSelector } from 'react-redux';
import IMAGES from '@assets/images/images';

interface RootState {
  mainLoader: {
    isLoading: boolean;
  };
}

interface MainLoaderProps {
  className?: string; 
}

const MainLoader: React.FC<MainLoaderProps> = ({ className }) => {
  const isLoading = useSelector((state: RootState) => state.mainLoader.isLoading);

  return isLoading ? (
    <div className={`${className}`}>
      {/* <BounceLoader
          color="#004EFF"
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
      /> */}
      <img src={IMAGES.loader_gif} alt="loader" className="w-[80px]" />
    </div>
  ) : null;
};

export default MainLoader;
