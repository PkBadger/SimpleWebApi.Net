var app = angular.module("spa", ["ngResource", "ngRoute"]);

app.factory('employeeService', function ($resource) {
    return $resource('/api/employes/:id',
        { id: "@Id" },
        {
            update: {method: 'PUT'}
        });
});

app.factory('departmentService', function ($resource) {
    return $resource('/api/departments/:id',
        { id: '@Id' },
        {
            update: { method: 'PUT' }
        });
});

app.controller("maninController", function ($scope) {

});

app.controller("employeeController", function ($scope, employeeService, departmentService) {
    $scope.departments = departmentService.query();
    $scope.employees = employeeService.query();
    $scope.employee = {
        Id: 0,
        Name: '',
        Position: '',
        DeparmentId: 0
    }

    $scope.deleteEmployee = function (department) {
        employeeService.remove(department, $scope.refreshData);
    };

    $scope.refreshData = function () {
        $scope.employees = employeeService.query();
    };

    $scope.showAddDialog = function () {
        $("#modal-dialog").modal("show");
    };

    $scope.saveEmployee = function () {
        employeeService.save($scope.employee, $scope.refreshData);
        $scope.clearCurrentEmployee();

    };

    $scope.clearCurrentEmployee = function () {
        $("#modal-dialog").modal("hide");

        $scope.employee = {
            Id: 0, Name: '',
            Position: '',
            departmentId: 0
        };
    };
});

app.controller("departmentController", function ($scope, departmentService) {
    $scope.departments = departmentService.query();

    $scope.department = {
        Id:0,
        Name:''
    }

    $scope.deleteDeparment = function (department) {
        departmentService.remove(department, $scope.refreshData);
    };

    $scope.refreshData = function () {
        $scope.departments = departmentService.query();
    };

    $scope.showAddDialog = function () {
        $("#modal-dialog").modal("show");
    };

    $scope.saveDepartment = function () {
        departmentService.save($scope.department, $scope.refreshData);
        $scope.clearCurrentDeparment();
        
    };

    $scope.clearCurrentDeparment = function () {
        $("#modal-dialog").modal("hide");

        $scope.department = { Id: 0, Name: '' };
    };
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'mainController'
        })
        .when('/employees', {
            templateUrl: '/Content/Views/Employees.html',
            controller: 'employeeController'
        })
        .when('/deparments', {
            templateUrl: '/Content/Views/Deparments.html',
            controller: 'departmentController'
        })
});