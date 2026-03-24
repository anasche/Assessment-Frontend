import { useQuery } from '@tanstack/react-query';
import { env } from '@/config/env';

const BASE_URL = env.API_BASE_URL;

// TypeScript interfaces for API responses
export interface NewsItem {
  _id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  image: string;
  authorName: string;
  authorNameAr: string;
  authorImage: string;
  date: string;
  events: EventItem[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewsResponse {
  message: string;
  data: {
    currentPage: number;
    totalCount: number;
    totalPages: number;
    data: NewsItem[];
  };
}

interface Horse {
  _id: string;
  name: string;
  nameAr?: string;
  owner: string;
  weight?: string;
  dob: string;
  parent?: string;
  parentAr?: string;
  breed?: string;
  sex?: string;
  yearOfBirth?: string;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Jockey {
  _id: string;
  name: string;
  nameAr: string;
  createdAt: string;
  updatedAt: string;
}

interface Trainer {
  _id: string;
  name: string;
  nameAr: string;
  createdAt: string;
  updatedAt: string;
}

interface Owner {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Country {
  _id: string;
  name: string;
  name_ar: string;
  flag: string;
  timezones: string[];
}

interface Member {
  draw: string;
  horse?: Horse;
  jockey?: Jockey;
  trainer?: Trainer;
  owner?: Owner;
  earning: number;
  horseForm: string;
  rating: number;
  rank: number | null;
  age?: number;
  _id: string;
  horseObjectId?: string | null;
  trainerObjectId?: string | null;
  jockeyObjectId?: string | null;
  horseOwnerObjectId?: string | null;
}

export interface EventItem {
  _id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  countryId: string;
  timezone: string;
  localStartTime: string;
  localEndTime: string;
  utcStartTime: string;
  utcEndTime: string;
  distance: number;
  isActive: boolean;
  members: Member[];
  createdAt: string;
  updatedAt: string;
  countryObjectId?: string;
  country?: Country;
  winner?: Member;
}

interface PastEventsResponse {
  message: string;
  data: {
    currentPage: number;
    totalCount: number;
    totalPages: number;
    data: EventItem[];
  };
}

export interface FAQItem {
  _id: string;
  question: string;
  answers: {
    text: string;
    _id: string;
    createdAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
  language: string;
}

// API service functions
const apiService = {
  getNews: async (page = 1, limit = 200): Promise<NewsItem[]> => {
    const response = await fetch(`${BASE_URL}/news?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch news');
    const result = await response.json();
    // The API returns { message, data: { currentPage, totalCount, totalPages, data: [...] } }
    // We extract the nested data array
    return result.data?.data || [];
  },

  getPastEventsWithWinners: async (): Promise<PastEventsResponse> => {
    const response = await fetch(`${BASE_URL}/events/past-events-with-winners`);
    if (!response.ok) throw new Error('Failed to fetch past events');
    return response.json();
  },

  getFAQ: async (language = 'en'): Promise<{ message: string; data: FAQItem[] }> => {
    const response = await fetch(`${BASE_URL}/faq?language=${language}`);
    if (!response.ok) throw new Error('Failed to fetch FAQ');
    return response.json();
  },

  getEventsCalendar: async (month: number, year: number, limit?: number): Promise<{ message: string; data: { currentPage: number; totalCount: number; totalPages: number; data: EventItem[] } }> => {
    const params = new URLSearchParams({
      month: month.toString(),
      year: year.toString(),
      ...(limit && { limit: limit.toString() })
    });
    const response = await fetch(`${BASE_URL}/events/public?${params}`);
    if (!response.ok) throw new Error('Failed to fetch events calendar');
    return response.json();
  },

  getUpcomingEvents: async (month?: number, year?: number): Promise<{ message: string; data: { currentPage: number; totalCount: number; totalPages: number; data: EventItem[] } }> => {
    const params = new URLSearchParams();
    if (month) params.append('month', month.toString());
    if (year) params.append('year', year.toString());
    
    const url = `${BASE_URL}/events/upcoming-events${params.toString() ? `?${params.toString()}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch upcoming events');
    return response.json();
  }
};

// Custom hooks for each API endpoint
export const useNews = (page = 1, limit = 200) => {
  return useQuery({
    queryKey: ['news', page, limit],
    queryFn: () => apiService.getNews(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const usePastEventsWithWinners = () => {
  return useQuery({
    queryKey: ['pastEventsWithWinners'],
    queryFn: apiService.getPastEventsWithWinners,
    staleTime: 30 * 60 * 1000, // 30 minutes - past events don't change often
  });
};

export const useFAQ = (language = 'en') => {
  return useQuery({
    queryKey: ['faq', language],
    queryFn: () => apiService.getFAQ(language),
    staleTime: 60 * 60 * 1000, // 1 hour - FAQ rarely changes
  });
};

export const useEventsCalendar = (month: number, year: number, limit?: number) => {
  return useQuery({
    queryKey: ['eventsCalendar', month, year, limit],
    queryFn: () => apiService.getEventsCalendar(month, year, limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!(month && year), // Only run if month and year are provided
  });
};

export const useUpcomingEvents = (month?: number, year?: number) => {
  return useQuery({
    queryKey: ['upcomingEvents', month, year],
    queryFn: () => apiService.getUpcomingEvents(month, year),
    staleTime: 2 * 60 * 1000, // 2 minutes - upcoming events change more frequently
    refetchInterval: 5 * 60 * 1000, // Auto-refetch every 5 minutes
  });
};