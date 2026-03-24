/**
 * Format distance value for display
 * @param distance - Distance in meters
 * @returns Formatted distance string
 */
export const formatDistance = (distance: number): string => {
  if (!distance) return '';
  
  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(1)} Km`;
  }
  return `${distance} m`;
};

/**
 * Calculate race duration from start and end times
 * @param startTime - Race start time (ISO string)
 * @param endTime - Race end time (ISO string)
 * @returns Formatted duration string
 */
export const getRaceDuration = (startTime: string, endTime: string): string => {
  if (!startTime || !endTime) return '00:00';
  
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffMs = end.getTime() - start.getTime();
  
  // If negative or zero difference, return default
  if (diffMs <= 0) return '00:00';
  
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  
  if (diffHours > 0) {
    return `${diffHours.toString().padStart(2, '0')}:${diffMinutes.toString().padStart(2, '0')}:${diffSeconds.toString().padStart(2, '0')}`;
  }
  return `${diffMinutes.toString().padStart(2, '0')}:${diffSeconds.toString().padStart(2, '0')}`;
};

/**
 * Calculate days remaining until an event
 * @param startTime - Event start time (ISO string)
 * @returns Number of days remaining (0 if past)
 */
export const getDaysRemaining = (startTime: string): number => {
  if (!startTime) return 0;
  
  const now = new Date();
  const eventDate = new Date(startTime);
  const diffTime = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
};

/**
 * Format event date for display
 * @param startTime - Event start time (ISO string)
 * @returns Formatted date string (e.g., "16 Mar, 2026")
 */
export const formatEventDate = (startTime: string): string => {
  if (!startTime) return '';
  
  const date = new Date(startTime);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  
  return `${day} ${month}, ${year}`;
};

/**
 * Get month number from month name
 * @param monthName - Month name (e.g., "January", "February")
 * @returns Month number (1-12)
 */
export const getMonthNumber = (monthName: string): number => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months.indexOf(monthName) + 1;
};