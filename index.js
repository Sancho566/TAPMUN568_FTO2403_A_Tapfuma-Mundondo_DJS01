/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleration
const calcNewVel = (vel, acc, time) => {
  // Check if the inputs are of the correct type
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input: vel, acc, and time should be numbers.');
  }

  // Convert acceleration from m/s^2 to km/h^2
  const acc_kmh2 = acc * 12960; // 1 m/s^2 = 12960 km/h^2

  // Calculate new velocity
  return vel + (acc_kmh2 * time / 3600); // Convert time from seconds to hours
};

// Calculate new distance
const d2 = d + (vel * time / 3600); // Convert time from seconds to hours

// Calculate remaining fuel
const rf = fuel - (fbr * time); // Ensure fuel is reduced by the burn rate over the given time

// Calculate new velocity based on acceleration
const vel2 = calcNewVel(vel, acc, time);

// Output the corrected values
console.log(`Corrected New Velocity: ${vel2.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${d2.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${rf.toFixed(2)} kg`);
