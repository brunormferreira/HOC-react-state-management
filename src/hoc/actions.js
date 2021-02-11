/* eslint-disable import/no-anonymous-default-export */
// if you want, you can call api's here.

export default (state, setData) => ({
  action1: async () => {
    setData({ label: 'loading', value: true });

    try {
      // ... await...
    } catch (e) {
      setData({ label: 'error', value: true });
    }

    setData({ label: 'loading', value: false });
  },

  customlog: (message, value) => {
    if (!value && !message) {
      return console.log('Please, send a value and a message to log.');
    }

    !message
      ? console.log('This is your log:', value)
      : console.log(message, value);
  },

  insertValues: (data) => {
    setData({ label: 'arr', value: data });
  },

  cloneArrExampleUsingStateParam: (state) => {
    const { arr } = state;

    const cloneArr = [...arr];

    setData({ label: 'arr', value: cloneArr });
  },
});
