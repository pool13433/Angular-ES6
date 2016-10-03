import angular from 'angular'
import _ from 'lodash'

class DetailController{
  constructor($stateParams,$http,URL_LIB){
    this.type = $stateParams.type
    this.data = $stateParams.data
    this.list = []
    $http
    .get(URL_LIB)
    .then((res) => res.data)
    .then((res) => {
      //console.log(res);
      this.list = _(res)
      .filter((track) => track[this.type] === this.data)
      .value()
      console.log(this.list)
    })

  }
}

angular
.module('app')
.controller('DetailController',DetailController)
