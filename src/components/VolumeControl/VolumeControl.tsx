import React, { ChangeEvent, useCallback, memo } from 'react';
import './VolumeControl.css';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (value: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const handleChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: ChangeEvent) => onVolumeChange(parseFloat((e.target as any).value)
  ), [onVolumeChange]);

  return (
    <div className="volumeControl">
      <label className="volume" htmlFor="volume">ГРОМКОСТЬ:</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="0.2"
        step="0.01"
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(VolumeControl);
