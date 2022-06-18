/* Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

    Terrible: tip 0%
    Poor: tip 5%
    Good: tip 10%
    Great: tip 15%
    Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

    "Rating not recognised" in Javascript, Python and Ruby...
    ...or null in Java
    ...or -1 in C#

Because you're a nice person, you always round up the tip, regardless of the service. */

function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    let tip
    switch (rating) {
        case 'excellent' : 
        tip = (amount * .2);
        break;
        case 'great' : 
        tip = (amount * .15);
        break;
        case 'good' :
        tip = (amount * .1);
        break;
        case 'poor' :
        tip = (amount * .05);
        break;
        case 'terrible' :
        tip = 0;
        break;
        default :
        return 'Rating not recognised';
        break;
    }
    return Math.ceil(tip)
  }