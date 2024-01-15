import formatDate from '@/helpers/formatDate';
import { describe, it, expect } from 'vitest';

describe('formatDate', () => {
  it('should return a string in the format "DD.MM" when given a valid Unix timestamp in seconds', () => {
    const unixDateSeconds = 1705266000000; // Jan 14, 2024 22:00:00 UTC
    const result = formatDate(unixDateSeconds);
    expect(result).toBe('14.01');
  });

  it('should return the correct date in the correct format for different valid Unix timestamps', () => {
    const unixDateSeconds1 = 1705266000; // Jan 14, 2024 22:00:00 UTC
    const unixDateSeconds2 = 1577836800; // Jan 1, 2020 00:00:00 UTC
    const result1 = formatDate(unixDateSeconds1);
    const result2 = formatDate(unixDateSeconds2);
    expect(result1).toBe('14.01');
    expect(result2).toBe('01.01');
  });

  it('should return the same date format for Unix timestamps with different precisions', () => {
    const unixDateSeconds = 1705266000; // Jan 14, 2024 22:00:00 UTC
    const unixDateMilliseconds = 1705266000000; // Jan 14, 2024 22:00:00 UTC
    const resultSeconds = formatDate(unixDateSeconds);
    const resultMilliseconds = formatDate(unixDateMilliseconds);
    expect(resultSeconds).toBe('14.01');
    expect(resultMilliseconds).toBe('14.01');
  });
});
