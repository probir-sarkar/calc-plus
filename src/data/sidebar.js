export const sidebarData = [
  {
    title: "Health and Fitness",
    links: [
      {
        label: "BMI Calculator",
        href: "/health-and-fitness/bmi-calculator",
        details:
          "Calculate your Body Mass Index (BMI) to determine whether you are underweight, overweight, or at a healthy weight.",
      },
    ],
  },
  {
    title: "Unit Converters",
    links: [
      {
        label: "Length",
        href: "/unit-converters/length",
        details:
          "Convert between different units of length, such as centimeters, meters, kilometers, inches, feet, yards, and miles.",
      },
      {
        label: "Area",
        href: "/unit-converters/area",
        details:
          "Convert between different units of area, such as square centimeters, square meters, square kilometers, square inches, square feet, square yards, and square miles.",
      },
    ],
  },
  {
    title: "Finance",
    links: [
      {
        label: "EMI Calculator",
        href: "/finance/emi-calculator",
        details:
          "Calculate your Equated Monthly Installment (EMI) to determine how much you need to pay every month towards your loan.",
      },
      {
        label: "GST Calculator",
        href: "/finance/gst-calculator",
        details: "Calculate the GST amount and the net price of a product or service based on the GST rate.",
      },
      {
        label: "FD Calculator",
        href: "/finance/fd-calculator",
        details:
          "Calculate the maturity amount of your Fixed Deposit (FD) based on the principal amount, interest rate, and tenure.",
      },
    ],
  },
  {
    title: "Mathematics",
    links: [
      {
        label: "Percentage Calculator",
        href: "/mathematics/percentage-calculator",
        details: "Calculate the percentage of a number or the percentage change between two numbers.",
      },
      {
        label: "Age Calculator",
        href: "/mathematics/age-calculator",
        details: "Calculate your age in years, months, and days.",
      },
      {
        label: "Factorial Calculator",
        href: "/mathematics/factorial-calculator",
        details: "Calculate the factorial of a number.",
      },
    ],
  },
];

export const allLinks = sidebarData.flatMap((item) => item.links);
