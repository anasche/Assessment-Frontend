/**
 * Capitalize the first letter of a string
 * @param text - The text to capitalize
 * @returns Text with first letter capitalized
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Get the first name from a full name
 * @param fullName - The full name string
 * @returns The first name only
 */
export const getFirstName = (fullName: string): string => {
  if (!fullName) return '';
  return fullName.split(' ')[0];
};

/**
 * Split a title into two lines intelligently
 * @param title - The title to split
 * @returns Object with line1 and line2
 */
export const splitTitle = (title: string): { line1: string; line2: string } => {
  if (!title) return { line1: '', line2: '' };
  
  // For long titles, try to split at a logical point
  if (title.includes('UAE President')) {
    const parts = title.split('UAE President');
    return {
      line1: capitalizeFirstLetter(parts[0].trim()),
      line2: 'UAE President' + (parts[1] || '')
    };
  }
  
  // For other titles, split at roughly the middle
  const words = title.split(' ');
  const midPoint = Math.ceil(words.length / 2);
  
  return {
    line1: capitalizeFirstLetter(words.slice(0, midPoint).join(' ')),
    line2: words.slice(midPoint).join(' ')
  };
};

/**
 * Create an excerpt from HTML content
 * @param content - HTML content string
 * @param maxLength - Maximum length of excerpt
 * @returns Clean text excerpt
 */
export const createExcerpt = (content: string, maxLength = 150): string => {
  if (!content) return '';
  
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, '');
  if (textContent.length <= maxLength) return textContent;
  return textContent.substring(0, maxLength) + '...';
};