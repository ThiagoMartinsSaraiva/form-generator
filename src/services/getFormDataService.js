export const getFormDataService = {
  async run() {
      const response = await fetch('https://65665153eb8bb4b70ef3297d.mockapi.io/api/forms')
      const json = await response.json()
      const [data] = json
      return data
  }
};
