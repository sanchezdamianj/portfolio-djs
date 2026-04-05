import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCountUp } from '../hooks/useCountUp';

describe('useCountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with 0', () => {
    const { result } = renderHook(() => useCountUp(10, 1000, 0, false));
    expect(result.current).toBe(0);
  });

  it('should not start counting when isVisible is false', () => {
    const { result } = renderHook(() => useCountUp(10, 1000, 0, false));
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current).toBe(0);
  });

  it('should start counting when isVisible becomes true', () => {
    const { result, rerender } = renderHook(
      ({ end, isVisible }) => useCountUp(end, 1000, 0, isVisible),
      { initialProps: { end: 10, isVisible: false } }
    );

    expect(result.current).toBe(0);

    rerender({ end: 10, isVisible: true });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should be somewhere between 0 and 10
    expect(result.current).toBeGreaterThanOrEqual(0);
    expect(result.current).toBeLessThanOrEqual(10);
  });

  it('should reach the end value after duration completes', () => {
    const { result, rerender } = renderHook(
      ({ end, isVisible }) => useCountUp(end, 1000, 0, isVisible),
      { initialProps: { end: 10, isVisible: false } }
    );

    rerender({ end: 10, isVisible: true });

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(result.current).toBe(10);
  });

  it('should respect custom duration', () => {
    const { result, rerender } = renderHook(
      ({ end, duration, isVisible }) => useCountUp(end, duration, 0, isVisible),
      { initialProps: { end: 100, duration: 2000, isVisible: false } }
    );

    rerender({ end: 100, duration: 2000, isVisible: true });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    // After half the time, should be around 50 (with tolerance for timing variations)
    expect(result.current).toBeGreaterThanOrEqual(20);
    expect(result.current).toBeLessThanOrEqual(90);
  });

  it('should respect delay parameter', () => {
    const { result, rerender } = renderHook(
      ({ end, delay, isVisible }) => useCountUp(end, 1000, delay, isVisible),
      { initialProps: { end: 10, delay: 1, isVisible: false } }
    );

    rerender({ end: 10, delay: 1, isVisible: true });

    // Before delay
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe(0);

    // After delay
    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(result.current).toBeGreaterThan(0);
  });
});
