'use strict';

angular.module('ichor.views.dashboard', [])
.component('dashboardView', {
  templateUrl: 'views/dashboard/dashboard.view.html',
  controller: DashboardViewController
})

DashboardViewController.$inject = [
	'$state',
	'$scope',
	'$stateParams'
];

function DashboardViewController($state, $scope, $stateParams) {
	var ctrl = this;

	ctrl.$onInit = function () {
		if ($stateParams.user === null) {
			$state.go('login');
		}
		
		ctrl.user = $stateParams.user;
		ctrl.state = 'components'
	}
};