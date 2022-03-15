const getJobApplication = (
  hrName,
  designation,
  companyName,
  candidateName,
  city
) => `
Respected ${hrName},
I would like to apply for position of ${designation} in ${companyName} at ${city}.
I have attached my resume here for the ${designation}. Please consider my profile for the ${designation}.

Regards,

${candidateName}
`;

console.log(
  getJobApplication(
    "Srisha",
    "Software Engineer",
    "Zensar Technologies",
    "Tiya Sharma",
    "Hyderabad"
  )
);
