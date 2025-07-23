const temperature = 0;
const windSpeed = 0;

const calculateWindChill = (T, V) => (T > 50 || V <= 3) ? "N/A" : Math.round(35.74 + 0.6215 * T - 35.75 * Math.pow(V, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
