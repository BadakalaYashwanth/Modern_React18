// Named exported class
export class DiscountService {

  constructor(age, price) {
    this.age = age
    this.price = price
  }

  // Method to validate input
  isValid() {
    return (
      typeof this.age === "number" &&
      this.age >= 0 &&
      typeof this.price === "number" &&
      this.price > 0
    )
  }

  // Method to calculate discount
  calculate() {
    if (!this.isValid()) {
      return "Invalid input"
    }

    if (this.age >= 60) {
      return this.price * 0.7
    }

    if (this.age >= 18) {
      return this.price * 0.85
    }

    return this.price
  }
}
