appStore.controller('productController', ['$scope', function($scope) {
    $scope.productList = [
        { product_code: 'p01', product_name: 'Product01', product_cost: 200 },
        { product_code: 'p02', product_name: 'Product02', product_cost: 200 },
        { product_code: 'p03', product_name: 'Product03', product_cost: 200 },
        { product_code: 'p04', product_name: 'Product04', product_cost: 200 },
        { product_code: 'p05', product_name: 'Product05', product_cost: 200 },
        { product_code: 'p06', product_name: 'Product06', product_cost: 200 },
        { product_code: 'p07', product_name: 'Product07', product_cost: 200 },
        { product_code: 'p08', product_name: 'Product08', product_cost: 200 },
        { product_code: 'p09', product_name: 'Product09', product_cost: 200 },
        { product_code: 'p10', product_name: 'Product10', product_cost: 200 },
        { product_code: 'p11', product_name: 'Product11', product_cost: 200 },
        { product_code: 'p12', product_name: 'Product12', product_cost: 200 },
        { product_code: 'p13', product_name: 'Product13', product_cost: 200 },
        { product_code: 'p14', product_name: 'Product14', product_cost: 200 },
        { product_code: 'p15', product_name: 'Product15', product_cost: 200 },
        { product_code: 'p16', product_name: 'Product16', product_cost: 200 },
        { product_code: 'p17', product_name: 'Product17', product_cost: 200 },
        { product_code: 'p18', product_name: 'Product18', product_cost: 200 },
        { product_code: 'p19', product_name: 'Product19', product_cost: 200 },
        { product_code: 'p20', product_name: 'Product20', product_cost: 200 },
        { product_code: 'p21', product_name: 'Product21', product_cost: 200 },
        { product_code: 'p22', product_name: 'Product22', product_cost: 200 },
        { product_code: 'p23', product_name: 'Product23', product_cost: 200 },
        { product_code: 'p24', product_name: 'Product24', product_cost: 200 },
        { product_code: 'p25', product_name: 'Product25', product_cost: 200 },
    ];

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

    $scope.addProduct = function() {


        if ($scope.productCode == " " || $scope.productName == " " || $scope.productUnits == "") {
            alert('Please Enter some values');
        } else {
            var productdetails = {};
            if ($scope.productUnits == " ") {
                $scope.productUnits = 1;
            }
            productdetails.product_code = $scope.productCode;
            productdetails.product_name = $scope.productName;
            productdetails.product_cost = $scope.productCostPerUnit;
            productdetails.product_quantity = $scope.productUnits;
            productdetails.product_totalcost = ($scope.productUnits) * ($scope.productCostPerUnit);

            if ($scope.purchaselist.length < 5) {
                $scope.purchaselist.push(productdetails);
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

    $scope.generateBill = function() {

        // Calculate the total items cost and generate bill  

        alert('Calculate the total items cost and generate bill');

    }
}]);
