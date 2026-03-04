export const calculateFinalPrice = function (age, price, userType, cibil) {

  // Input validation
  if (
    typeof age !== "number" || age < 0 ||
    typeof price !== "number" || price <= 0
  ) {
    return "Invalid input"
  }

  // Student logic
  if (userType === "student") {

    if (age >= 80) {
      return `As your age is ${age}, you are considered a senior category`
    }

    if (age >= 18) {
      return `You are ${age} years old and eligible for 15% student discount`
    }

    return "Student discount not applicable for minors"
  }

  // Employee logic
  if (userType === "employee") {

    if (typeof cibil !== "number") {
      return "Invalid CIBIL score"
    }

    if (cibil >= 650) {
      return `Your CIBIL score is ${cibil}. You are eligible for 20% discount`
    }

    return "CIBIL score too low for discount"
  }

  // Senior logic
  if (userType === "senior") {
    return price * 0.7
  }

  // Default case
  return price
}
