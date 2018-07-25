// Module dependencies
import React from 'react';
import { Pie } from 'react-chartjs-2';

// Companion files
import './styles.scss';

// Component
const Chart = ({ data }) => {
  // Configuration
  const response = data.yes + data.no;

  // Chart
  const chart = {
    data: {
      labels: ['Yes', 'No'],
      datasets: [
        {
          data: [data.yes, data.no],
          backgroundColor: ['#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#36A2EB', '#FFCE56']
        }
      ]
    },
    legend: {
      position: 'bottom'
    }
  };

  // View
  return (
    response > 0 && (
      <div styleName="wrapper">
        <Pie data={chart.data} legend={chart.legend} />
      </div>
    )
  );
};

// Module exports
export default Chart;
