var deals = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50."

var allDeals = deals.split(',');

var newDealList = [];

function getPrice(){
  var price = deal.split('for')
}

for (var i = 0; i < allDeals.length; i++) {
  var deal = allDeals[i];
  newDealList.push({
    deal : deal.trim(''),
    price : getPrice(deal)
  })
  return allDeals;
  //return newDealList
  console.log(newDealList);
}
