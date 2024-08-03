export const timeManagement = (time: string) => {
  const len = time.length;
  if (len <= 3) {
    return `${time}0`;
  }
  return time;
};
export function timeDurationManage(time: string, duration: string): string {
  let [hours, minutes] = time.split(":").map(Number);
  const durationMinutes = parseInt(duration);
  let totalMinutes = minutes + durationMinutes;
  if (totalMinutes >= 60) {
    hours += Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
  }

  hours %= 24;

  return `${hours.toString().padStart(2, "0")}:${totalMinutes
    .toString()
    .padStart(2, "0")}`;
}
