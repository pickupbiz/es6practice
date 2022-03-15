const getGreetingCard = (
  custName,
  clientName,
  cityName,
  greetName
) => `Dear ${custName},

${clientName} would like to wish you the ${greetName}. We would like to pass few benefits to you. ${custName} please visit our outlet at ${cityName} to explore exciting offers on occasion of ${greetName}.

Thanks and Regards,

${clientName}`;
console.log(
  getGreetingCard("Laiq", "Google India", "Hyderabad", "Eid Mubarak")
);
