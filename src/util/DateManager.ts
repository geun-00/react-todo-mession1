import { format, parseISO } from 'date-fns';

//현재 시간을 문자열로 반환
export const getCurrentISOString = (): string => new Date().toISOString();

//날짜 문자열을 보기 좋은 형식으로 포맷팅
export const formatDate = (date: string, formatString: string = 'yyyy.MM.dd'): string => {
  return format(parseISO(date), formatString);
};