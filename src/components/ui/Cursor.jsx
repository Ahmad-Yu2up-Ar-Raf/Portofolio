'use client';
import useSpotlightEffect from '../hook/useSpotlightEffect';
const SpotlightCursor = ({ config = {}, className, ...rest }) => {
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: '#ffffff',
    smoothing: 0.1,
    ...config,
  };
  const canvasRef = useSpotlightEffect(spotlightConfig);
  return (
    <canvas
      ref={canvasRef}
      className={`fixed  top-0 left-0 pointer-events-none z-[10] w-full h-full ${className}`}
      {...rest}
    />
  );
};
export default SpotlightCursor;
