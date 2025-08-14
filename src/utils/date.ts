export function formatTimeAgo(
  from: Date,
  to: Date = new Date(),
  locale?: string,
  options: Intl.RelativeTimeFormatOptions = { numeric: 'auto', style: 'long' }
): string {
  // Use Intl.RelativeTimeFormat for localized, high-quality relative time strings
  const rtf = new Intl.RelativeTimeFormat(locale, options);

  const units = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
  } as const;

  // Negative means 'from' is in the past relative to 'to', which Intl expects
  const deltaMs = from.getTime() - to.getTime();
  const absMs = Math.abs(deltaMs);

  let unit: keyof typeof units;
  if (absMs < units.minute) unit = 'second';
  else if (absMs < units.hour) unit = 'minute';
  else if (absMs < units.day) unit = 'hour';
  else if (absMs < units.month) unit = 'day';
  else if (absMs < units.year) unit = 'month';
  else unit = 'year';

  const value = Math.round(deltaMs / units[unit]);
  return rtf.format(value, unit);
}

export function isAnniversaryToday(date: Date, now: Date = new Date()): boolean {
  return (
    now.getMonth() === date.getMonth() &&
    now.getDate() === date.getDate() &&
    now.getFullYear() >= date.getFullYear()
  );
}


