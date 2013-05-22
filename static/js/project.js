function SumCtrl($scope) {
  $scope.intRegEx = /^\-?\d*$/;
  $scope.listRegEx = /^\s*[+-]?\d+(,\s*[+-]?\d+)*$/;

  $scope.findSum = function() {

    var input = $scope.inputList.split(/[ ,]+/);
    var target = parseInt($scope.targetSum);

    var hash = {}

    // convert the input to ints and hash them
    for (var i = 0; i < input.length; i++) {
        var val = parseInt(input[i]);
        input[i] = val;
        if (hash[val]) {
            hash[val] == hash[val] + 1;
        } else {
            hash[val] = 1;
        }
    }

    var found = false;

    for (var i = 0; i < input.length; i++) {
        if (target == input[i]) {
            if (hash[searchVal] == 2) {
                found = true;
                break;
            }
        } else {
            var searchVal = target - input[i];
            console.log(searchVal);
            if (hash[searchVal]){
                found = true;
                break;
            }
        }
    }

    if (!found) {
        $scope.result = "False";
    } else {
        $scope.result = "True";
    }
  };
}
