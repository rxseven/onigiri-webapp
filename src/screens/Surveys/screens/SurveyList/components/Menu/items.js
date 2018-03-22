export default [
  {
    icon: 'list',
    selection: 'active',
    title: 'Active',
    value: { mode: 'active', query: null }
  },
  {
    icon: 'check',
    selection: 'completed',
    title: 'Completed',
    value: { mode: 'completed', query: { completed: true } }
  },
  {
    icon: 'box',
    selection: 'archived',
    title: 'Archived',
    value: { mode: 'archived', query: { archived: true } }
  }
];
