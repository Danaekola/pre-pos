function collect_same_elements(collection_a, object_b) {
  var result = [];
  var temp = object_b.value;
  for(var x = 0; x < collection_a.length; x++)
    searchSameElement(collection_a[x],temp,result);
  return result;
}
function searchSameElement(elementA,temp,result){
  for(var y = 0; y < temp.length; y++)
    if(elementA == temp[y])
	  result.push(elementA);
}
