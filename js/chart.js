export const chart = (canvasId, chartConfig, data, labels, colors) => {
  const chartCanvas = document.getElementById(canvasId);

  const dataSets = data.map((set, index) => {
    set.borderColor = colors[index % colors.length];
    set.fill = false;
    return set;
  });

  const chartData = {
    labels: labels,
    datasets: dataSets,
  };

  const chart = new Chart(chartCanvas, {
    ...chartConfig,
    data: chartData,
  });
};
