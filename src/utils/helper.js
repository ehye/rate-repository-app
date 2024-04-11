export const roundCount = (count) =>
  count >= 1000 ? (Math.round(count / 100) / 10).toString() + 'K' : count
