'use strict';

angular.module('ichor.views.login', [])
.component('loginView', {
  templateUrl: 'views/login/login.view.html',
  controller: LoginViewController
})

LoginViewController.$inject = [
	'$state'
];

function LoginViewController($state) {
	var ctrl = this;

	ctrl.credentials = { username: null, password: null };

	ctrl.login = login;

	function login() {
		for(let index in users) {
			if (users[index].username === ctrl.credentials.username || users[index].email === ctrl.credentials.username) {
				if (users[index].password === ctrl.credentials.password) {
					$state.go('dashboard', { user : users[index]});
				}
			}
		}

		ctrl.loginError = true;
	}
};