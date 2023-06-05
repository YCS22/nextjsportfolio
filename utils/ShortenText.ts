export default function ShortenText(
  text: any,
  startingPoint: any,
  maxLength: any
) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}
