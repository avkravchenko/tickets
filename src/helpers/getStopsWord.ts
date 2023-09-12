export default function getStopsWord(stops: number) {
  switch (stops) {
    case 0:
      return "пересадок";
    case 1:
      return "пересадка";
    default:
      return "пересадки";
  }
}
