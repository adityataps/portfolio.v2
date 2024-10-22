/**
 * @file @/services/PersonService.ts
 * @description Service for person operations.
 */

/**
 * Gets a string with the name and age.
 * @param {string} name - name of the person
 * @param {number} age - age of the person
 * @returns {string} - name and age string for the person
 */
function getNameAndAgeString(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

export { getNameAndAgeString };
