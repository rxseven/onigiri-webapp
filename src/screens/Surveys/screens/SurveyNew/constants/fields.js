export default [
  {
    label: 'Survey title',
    name: 'title',
    type: 'text',
    required: true
  },
  {
    label: 'From',
    name: 'from',
    type: 'text',
    required: false
  },
  {
    label: 'Subject line',
    name: 'subject',
    type: 'text',
    required: true
  },
  {
    label: 'Body',
    name: 'body',
    type: 'textarea',
    required: true
  },
  {
    label: 'Recipient list',
    name: 'recipients',
    type: 'textarea',
    required: true,
    helper: 'A comma separated list of emails'
  },
  {
    label: 'Landing page',
    name: 'landing',
    type: 'text',
    required: false,
    helper: 'The webpage where people end up after they click survey options'
  }
];
