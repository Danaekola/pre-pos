function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(var x = 0;x < collection_a.length; x++)
    searchSameElement1(collection_a[x],collection_b,result);
  return result;
}
function searchSameElement1(elementA,collectionB,result){
  for(var y = 0;y < collectionB.length; y++)
    searchSameElement2(y,elementA,result,collectionB);
}
function searchSameElement2(index,elementA,result,collectionB){
  for(var k = 0;k < collectionB[index].length; k++)
    if(elementA == collectionB[index][k])
	  result.push(elementA);
}
