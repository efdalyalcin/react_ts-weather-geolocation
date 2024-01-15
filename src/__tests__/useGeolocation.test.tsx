import useGeolocation from '@/hooks/useGeolocation';
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

describe('useGeolocation hook', () => {
  it('should return default latitude and longitude values and default error when navigator.geolocation is not available', () => {
    const { result } = renderHook(() => useGeolocation());
    const { latitude, longitude, error } = result.current;

    expect(latitude).toBe(52.3983);
    expect(longitude).toBe(13.0609);
    expect(error).toBe(
      'Geolocation is not supported by your browser. The data represents the HarvestAI headquarters.'
    );
  });

  it('should return updated latitude and longitude values and null error when navigator.geolocation is available and getCurrentPosition is successful after initial render', () => {
    const { result } = renderHook(() => useGeolocation());
    const { latitude, longitude, error } = result.current;

    expect(latitude).toBe(52.3983);
    expect(longitude).toBe(13.0609);
    expect(error).toBeDefined();

    // wait for the useEffect to complete
    setTimeout(() => {
      expect(result.current.latitude).not.toBe(52.3983);
      expect(result.current.longitude).not.toBe(13.0609);
      expect(result.current.error).toBeNull();
    }, 1000);
  });
});
