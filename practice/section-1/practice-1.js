function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(var x = 0;x < collection_a.length; x++)
    searchSameElement(collection_a[x],collection_b,result);
  return result;
}
function searchSameElement(elementA,collectionB,result){
  for(var y = 0;y < collectionB.length; y++)
    if(elementA == collectionB[y])
	  result.push(elementA);
}
