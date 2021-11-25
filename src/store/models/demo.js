const demoStore = {
  state: {
    status: -1,
    message: '',
    data: null,
  },
  reducers: {
    result(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async getResult(payload, rootState) {
      // const params = {
      //   name: 'stark',
      //   age: 18,
      // };
      // const res = await request.get('https://api.shudong.wang/v1/movies/coming', params);
      // console.log('JSON.parse(res.data)', JSON.parse(res.data))
      // this.result(JSON.parse(res.data))
    },
  }),
};

export default demoStore;
