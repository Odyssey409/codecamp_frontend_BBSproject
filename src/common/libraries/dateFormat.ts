export const getDate = (date: string | Date): string => {
  const _date = new Date(date);
  const yyyy: number = _date.getFullYear();
  const mm: string = String(_date.getMonth() + 1).padStart(2, "0"); // 2자리로 맞추기
  const dd: string = String(_date.getDate()).padStart(2, "0"); // 2자리로 맞추기
  return `${yyyy}-${mm}-${dd}`;
};
