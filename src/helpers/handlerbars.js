const Handlebars = require('handlebars');

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, _sort) => {
    const sortType = field === _sort.column ? _sort.type : 'default';

    const icons = {
      default: 'bi bi-filter',
      asc: 'bi bi-sort-down-alt',
      desc: 'bi bi-sort-down',
    };
    const types = {
      default: 'desc',
      asc: 'desc',
      desc: 'asc',
    };

    const icon = icons[sortType];
    const type = types[sortType];

    // prevent XSS attack, escape href on the url, cz user can edit it on the URL
    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`,
    );
    const output = `<a href="${href}">
      <i class="${icon}"></i>
    </a>`;

    return new Handlebars.SafeString(output);
  },
};
