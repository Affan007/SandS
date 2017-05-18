/**
 * Created by Affan_2 on 15/05/2017.
 */
angular.module('sands')
    .controller('base', ['$scope', 'User', '$location', function($scope, User, $location) {
        $scope.currentPage = 1;
        $scope.ItemsPerPage = 20;
        function makeDouble(dbl) {
            return (dbl < 10) ? '0' + dbl.toString() : dbl.toString();
        }

        User.FetchTotal($scope.currentPage, $scope.ItemsPerPage)
            .success(function(data, status, headers, config) {
                console.log(headers("x-total-count"));
                $scope.totalItems = headers("x-total-count")
                $scope.pages = $scope.totalItems / $scope.ItemsPerPage;
                $scope.Painationarray = [];
                for (var i = 1; i <= $scope.pages; i++) {
                    var  dbl=makeDouble(i)
                    $scope.Painationarray.push(dbl);
                }
            })
            .error(function(data) {
                console.log(data)
            })


        var columnDefs = [{
                headerName: "id",
                field: "id",
                width: 90
            },
            {
                headerName: "postId",
                field: "postId",
                width: 90
            },
            {
                headerName: "name",
                field: "name",
                width: 220
            },
            {
                headerName: "email",
                field: "email",
                width: 200
            },
            {
                headerName: "body",
                field: "body",
                width: 500
            }
        ];

        var rowData = [{
                make: "Toyota",
                model: "Celica",
                price: 35000
            },
            {
                make: "Ford",
                model: "Mondeo",
                price: 32000
            },
            {
                make: "Porsche",
                model: "Boxter",
                price: 72000
            }
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            pagination: true,
            paginationPageSize: $scope.ItemsPerPage,
            rowSelection: 'single',
            onSelectionChanged: onSelectionChanged,
            suppressPaginationPanel: true,
            suppressScrollOnNewData: true,
        };

        function onSelectionChanged() {
            var selectedRows = $scope.gridOptions.api.getSelectedRows();
            var selectedRowsString;
            selectedRows.forEach(function(selectedRow, index) {
                selectedRowsString = selectedRow;
            });
            $location.path('/details');
            $scope.$apply();
            User.DetailsStore(selectedRowsString);

        }

        Fetch(function(data1) {
            gridOptions.api.setRowData(data1)
        })

        $scope.start = 0;
        $scope.customPage = 1;
        function Fetch(callback) {
            $scope.goToPage = function(page) {
                $scope.customPage = page;
                $scope.start = ((page - 1) * $scope.ItemsPerPage);
                $scope.end = page * $scope.ItemsPerPage;
                var userdata = {
                    'start': $scope.start,
                    'end': $scope.ItemsPerPage
                };

                User.FetchComments(userdata)
                    .success(function(data, status, headers, config) {
                        $scope.data = data;
                        $scope.gridOptions.api.setRowData(data)
                    })
                    .error(function(data) {
                        console.log(data)
                    })


            }
            $scope.goToPage();
            $scope.first = function() {
                $scope.start = 0;
                $scope.customPage = 0;
                var userdata = {
                    'start': $scope.start,
                    'end': $scope.ItemsPerPage
                };

                User.FetchComments(userdata)
                    .success(function(data) {
                        $scope.data = data;
                        $scope.gridOptions.api.setRowData(data)

                    })
                    .error(function(data) {
                        console.log(data)
                    })
            }


            $scope.last = function() {
                $scope.start = $scope.Painationarray[$scope.Painationarray.length - 2] * $scope.ItemsPerPage;
                $scope.customPage = 0;
                var userdata = {
                    'start': $scope.start,
                    'end': $scope.ItemsPerPage
                };
                User.FetchComments(userdata)
                    .success(function(data) {
                        $scope.data = data;
                        $scope.gridOptions.api.setRowData(data)
                    })
                    .error(function(data) {
                        console.log(data)
                    })
            }
            $scope.back = function() {
                var page = $scope.customPage;
                $scope.start = ((page - 2) * $scope.ItemsPerPage);
                $scope.end = page * $scope.ItemsPerPage;
                var userdata = {
                    'start': $scope.start,
                    'end': $scope.ItemsPerPage
                };
                User.FetchComments(userdata)
                    .success(function(data) {
                        $scope.data = data;
                        $scope.gridOptions.api.setRowData(data)
                    })
                    .error(function(data) {
                        console.log(data)
                    })
                $scope.customPage--;
            }

            $scope.next = function(page) {
                var page = $scope.customPage;
                $scope.start = ((page) * $scope.ItemsPerPage);
                $scope.end = page * $scope.ItemsPerPage;
                var userdata = {
                    'start': $scope.start,
                    'end': $scope.ItemsPerPage
                };
                User.FetchComments(userdata)
                    .success(function(data) {
                        $scope.data = data;
                        $scope.gridOptions.api.setRowData(data)
                    })
                    .error(function(data) {
                        console.log(data)
                    })
                $scope.customPage++;
            }
        }
    }]);
