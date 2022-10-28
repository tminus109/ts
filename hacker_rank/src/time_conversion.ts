function convertTime(s: string): string {
  let militaryTime = "";
  const period = s.slice(s.length - 2);
  const timeUnits = s.slice(0, s.length - 2).split(":");
  const hours = timeUnits[0];

  if (period === "AM" && hours === "12") {
    timeUnits[0] = "00";
  } else if (period === "PM" && hours === "12") {
    timeUnits[0] = "12";
  } else if (period === "PM") {
    timeUnits[0] = (parseInt(hours) + 12).toString();
  }

  militaryTime = timeUnits[0] + ":" + timeUnits[1] + ":" + timeUnits[2];

  return militaryTime;
}

console.log(convertTime("12:01:00PM"));
console.log(convertTime("12:01:00AM"));
console.log(convertTime("07:05:45PM"));
