// @flow
// Module dependencies
import * as React from 'react';
import { Pie } from 'react-chartjs-2';

// Companion files
import './styles.scss';

// Static types
type Props = {
  data: {
    no: number,
    yes: number
  }
};

type Return = React.Node | void;

// Component
const Chart = ({ data: { no, yes } }: Props): Return => {
  // Configuration
  const response = no + yes;

  // Chart
  const chart = {
    data: {
      labels: ['No', 'Yes'],
      datasets: [
        {
          data: [no, yes],
          backgroundColor: ['#FFCE56', '#36A2EB'],
          hoverBackgroundColor: ['#FFCE56', '#36A2EB']
        }
      ]
    },
    legend: {
      position: 'bottom'
    }
  };

  // View
  return (
    <If condition={response > 0}>
      <div styleName="wrapper">
        <Pie data={chart.data} legend={chart.legend} />
      </div>
    </If>
  );
};

// Module exports
export default Chart;
