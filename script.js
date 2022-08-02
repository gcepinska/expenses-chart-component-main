"use strict";

const jsonData = function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const day = data.map((e) => e.day);
      const amount = data.map((e) => e.amount);
      // console.log(day);
      // console.log(amount);
      new Chart("myChart", {
        type: "bar",
        data: {
          labels: day,
          datasets: [
            {
              backgroundColor: "hsl(10, 79%, 65%)",
              data: amount,
              borderRadius: 5,
              hoverBackgroundColor: "hsl(10, 100%, 85%)",
              borderSkipped: "middle",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: "hsl(25, 47%, 15%)",
              caretSize: 0,
              padding: 8,
              caretPadding: 10,
              yAlign: "bottom",
              displayColors: false,
              callbacks: {
                title: (i) => {
                  return ``;
                },
                label: function (context) {
                  let label = context.dataset.label || "";

                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(context.parsed.y);
                  }
                  return label;
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: { display: false },
            },
          },
        },
      });
    });
};

jsonData();
