export default {
  methods: {
    formatDate(value, options) {
      options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Intl.DateTimeFormat("ru-Ru", options).format(new Date(value));
    },
  },
};
