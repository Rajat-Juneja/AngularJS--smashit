app.controller("ctrl",($scope,$interval,$timeout)=>{
    var images = angular.element(document.querySelectorAll(".col-4"));
    var timer;
images.addClass("pause");
    $timeout(()=>{
    timer = $interval(()=>{

        var random = parseInt(Math.random()*10);
        // console.log(random);
        
        // var val = $interval(()=>{
            // console.log(random);
            images[random].classList.remove("pause");
        // },1000);
// console.log(images[2].classList.remove("pause"));
$timeout(()=>{images[random].classList.add("pause");},550);

            // $interval.cancel(val);

            

    },1500);


   var Over = $interval(()=>{

        if($scope.score == 11){
                $interval.cancel(timer);
                for(var i=0;i<images.length;i++){
                    images[i].classList.remove("pause");
                }
                swal({
type: 'success',
title: 'You won',
text: 'Please refresh to play',
showConfirmButton: true,
}).then(()=>{
location.reload();
})
                $interval.cancel(Over);
            }
            
    },100);

    $scope.Increment=()=>{
        if($scope.score<11)
        $scope.score++;
    }

},5000);

});