// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Prop types
export default exact({
  core: {
    actions: PropTypes.shape({
      getData: PropTypes.func.isRequired,
      updatePagination: PropTypes.func.isRequired
    }),
    children: PropTypes.node.isRequired,
    state: PropTypes.shape({
      isEmpty: PropTypes.bool.isRequired,
      isError: PropTypes.objectOf(PropTypes.string),
      meta: PropTypes.shape({
        paging: PropTypes.shape({
          next: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
          previous: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
        }),
        query: PropTypes.shape({
          limit: PropTypes.number,
          page: PropTypes.number
        }),
        summary: PropTypes.shape({
          pages: PropTypes.number,
          total: PropTypes.number
        })
      }),
      mode: PropTypes.string,
      pagination: PropTypes.shape({
        current: PropTypes.number,
        more: PropTypes.bool,
        next: PropTypes.number,
        query: PropTypes.objectOf(PropTypes.bool),
        total: PropTypes.number
      }),
      query: PropTypes.objectOf(PropTypes.bool)
    })
  },
  content: { children: PropTypes.node.isRequired },
  empty: { children: PropTypes.node.isRequired }
});
