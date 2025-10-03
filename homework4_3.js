const yearBorn = prompt("In which year were you born?");
if (yearBorn === null) {
  alert("It's a shame you didn't want to enter your year of birth.");
} else {
  const whereYouLive = prompt("Where do you live?");
  if (whereYouLive === null) {
    alert("It's a shame you didn't want to enter the city you live in.");
  } else {
    const sport = prompt("What is your favorite sport?");
    if (sport === null) {
      alert("It's a shame you didn't want to enter your favorite sport.");
    }
    const date = new Date().getFullYear();
    const age = date - yearBorn;
    let city = "";
    switch (whereYouLive.toLowerCase()) {
      case "kyiv":
        city = "you live in the capital of Ukraine";
        break;
      case "washington":
        city = "you live in the capital of USA";
        break;
      case "london":
        city = "you live in the capital of Great Britain";
        break;
      default:
        city = `you live in ${whereYouLive}`;
    }
    let sports = "";
    switch (sport.toLowerCase()) {
      case "football":
        sports = "Cool! Do you want to become like Andriy Shevchenko?";
        break;
      case "tennis":
        sports = "Cool! Do you want to become like Novak Djokovic?";
        break;
      case "box":
        sports = "Cool! Do you want to become like Oleksandr Usyk?";
        break;
      default:
        sports = `Great! ${sport} is a wonderful sport!`;
    }
    alert(`You are ${age} years old, ${capitals}. ${sports}`);
  }
}
