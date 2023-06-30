export const calculateTimeAgo = (date) => {
  const currentDate = new Date();
  const [day, month, year] = date.split('.');
  const articleDate = new Date(`${year}-${month}-${day}`);
  const timeDiff = Math.abs(currentDate - articleDate);
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hoursDiff === 0) {
      const minutesDiff = Math.floor(timeDiff / (1000 * 60));
      return `${minutesDiff} ${getPluralSuffix(minutesDiff, 'minuta', 'minuty', 'minut')} temu`;
    }
    return `${hoursDiff} ${getPluralSuffix(hoursDiff, 'godzina', 'godziny', 'godzin')} temu`;
  }
  return `${daysDiff} dni temu`;
};

const getPluralSuffix = (count, form1, form2_4, form5) => {
  if (count === 1) {
    return form1;
  }
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return form2_4;
  }
  return form5;
};
