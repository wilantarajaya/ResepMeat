class DataSource {
  static searchMeals(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${keyword} tidak ditemukan`);
      });
  }
}
export default DataSource;
