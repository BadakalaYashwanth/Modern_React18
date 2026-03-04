export function checkEligibility(age) {
  if (typeof age !== "number" || age < 0) {
    return "Invalid age"
  }

  if (age < 18) {
    return "Not eligible"
  }

  if (age >= 60) {
    return "Eligible with senior benefits"
  }

  return "Eligible"
}
