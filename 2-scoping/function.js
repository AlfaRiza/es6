// ES6
{
    let sum = (x, y) => {
        return x + y;
    }
    // foo() === 1
    {
        let sum = (x, y) => { return x * y }
        console.log(sum(3, 5));
    }
    console.log(sum(3, 5));
}

// ES5
(function () {
    var sum = function (x, y) { return x + y }
        // foo() === 1
        (function () {
            var sum = function (x, y) { return x * y }
            // foo() === 2
            console.log(sum(3, 5))
        })();
    console.log(sum(3, 5))
})()

