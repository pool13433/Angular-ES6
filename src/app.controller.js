import angular from 'angular'
import _ from 'lodash'

angular.module('app')
    .controller('AppController', AppController)

function AppController($http,URL_LIB) {
    const vm = this
    this.name = 'CCCCCCC';
    this.list = []
    this.tracks = []
    this.select = 'Artist'
    this.resetList = reserListTrack
    $http
        .get(URL_LIB)
        .then((res) => res.data)
        .then((res) => {
            vm.tracks = res
            reserListTrack()
        })

    function reserListTrack() {
        vm.list = _(vm.tracks)
            .map((track) => track[vm.select])
            .uniq()
            .value()
    }
}
