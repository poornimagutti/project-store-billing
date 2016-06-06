appStore.controller('productController', ['$scope', 'dataService', function($scope, dataService) {
    $scope.billFlag = false;
    $scope.productList = dataService.productList();

    $scope.purchaselist = [];

    $scope.getItem = function(pcode) {

        for (var i = 0; i < $scope.productList.length; i++) {
            if ($scope.productList[i].product_code == pcode) {
                $scope.productName = $scope.productList[i].product_name;
                $scope.productCostPerUnit = $scope.productList[i].product_cost;
                $scope.productUnits = 1;
            } else {
                if ($scope.productList[i].product_code != pcode && i == $scope.productList.length - 1) {
                    // alert('No Such Product Code is available');
                }
            }
        }
    }

    $scope.itemIndex = null;

    $scope.addProduct = function() {


        if ($scope.productCode == null || $scope.productUnits == null) {
            alert('Please Enter Product Code');
        } else {
            var productdetails = {};
            productdetails.product_code = $scope.productCode;
            productdetails.product_name = $scope.productName;
            productdetails.product_cost = $scope.productCostPerUnit;
            productdetails.product_quantity = $scope.productUnits;
            productdetails.product_totalcost = ($scope.productUnits) * ($scope.productCostPerUnit);

            if ($scope.purchaselist.length < 5) {
                if ($scope.itemIndex == null) {
                    $scope.purchaselist.push(productdetails);
                } else {
                    $scope.purchaselist.splice($scope.itemIndex, 1, productdetails);
                }
            } else {
                alert('You can add only 5 items');
            }
        }

        //clearing data 
        $scope.productCode = "";
        $scope.productName = "";
        $scope.productCostPerUnit = "";
        $scope.productUnits = "";
    }

    $scope.editProduct = function(itemNo, product) {
        $scope.productCode = product.product_code;
        $scope.productName = product.product_name;
        $scope.productCostPerUnit = product.product_cost;
        $scope.productUnits = product.product_quantity;
        $scope.itemIndex = itemNo;

    }

    $scope.removeProduct = function(item) {
        $scope.purchaselist.splice(item, 1);
    }

    $scope.generateBill = function() {

        // Calculate of total items cost and bill generation 
        var totalAmount = 0;
        for (var i = 0; i < $scope.purchaselist.length; i++) {
            totalAmount = totalAmount + $scope.purchaselist[i].product_totalcost;
        }
        $scope.Amount = totalAmount;
        $scope.billFlag = true;
        $scope.today = new Date();
    }
}]);
