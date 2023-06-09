import { faker } from "@faker-js/faker";

const labels = [
  "Last 1h",
  "Last 2h",
  "Last 3h",
  "Last 4h",
  "Last 5h",
  "Last 6h",
  "Last 7h",
  "Last 8h",
  "Last 9h",
  "Last 10h",
  "Last 11h",
  "Last 12h",
];

export const TemperatureData = {
  labels,
  datasets: [
    {
      label: "Temperature °C",
      data: labels.map(() => faker.datatype.number({ min: 25, max: 30 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const TemperatureOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature Measurements (°C)",
    },
  },
};

export const HumidityData = {
  labels,
  datasets: [
    {
      label: "Himdity %",
      data: labels.map(() => faker.datatype.number({ min: 40, max: 70 })),
      borderColor: "#00C4FF",
      backgroundColor: "#99DBF5",
    },
  ],
};

export const HumidityOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Humidity Measurements (°C)",
    },
  },
};

export const LightData = {
  labels,
  datasets: [
    {
      label: "Brightness %",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 80 })),
      borderColor: "#ffb805",
      backgroundColor: "#FFF5B8",
    },
  ],
};

export const LightOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Brightness Measurements (°C)",
    },
  },
};
