export class MainController {

  constructor ($http, $sce) {
    'ngInject';
    this._cards = [];
    this.$sce = $sce;
    $http({
      method: 'GET',
      url: 'http://0.0.0.0:9000/cards'
    }).then((response) => {
      this._cards = response.data;
    });
  }

  get cards() {
    return this._cards;
  }

  getClass(card) {
    return `col-${card.layout.desktop.cols} row-${card.layout.desktop.rows}`;
  }

  getImg(card) {
    return this.$sce.trustAs('html', atob(card.img));
  }

}
