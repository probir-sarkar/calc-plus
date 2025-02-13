/**
 * Converts a given weight in kilograms to pounds.
 * @param {number} kg - Weight in kilograms.
 * @returns {number} - Weight in pounds.
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

/**
 * Converts a given weight in pounds to kilograms.
 * @param {number} lbs - Weight in pounds.
 * @returns {number} - Weight in kilograms.
 */
export function lbsToKg(lbs: number): number {
  return lbs / 2.20462;
}

/**
 * Converts a given height in centimeters to feet.
 * @param {number} cm - Height in centimeters.
 * @returns {number} - Height in feet.
 */
export function cmToFeet(cm: number): number {
  return cm / 30.48;
}

/**
 * Converts a given height in feet to centimeters.
 * @param {number} feet - Height in feet.
 * @returns {number} - Height in centimeters.
 */
export function feetToCm(feet: number): number {
  return feet * 30.48;
}
