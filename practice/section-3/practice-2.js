function create_updated_collection(collection_a, object_b) {
  for(var x = 0; x < collection_a.length; x++){
    searchSameElement(collection_a[x],object_b);
    console.log(collection_a[x].key+'='+collection_a[x].count);
  }
  return collection_a;
}
function searchSameElement(elementA,objectB){
  var temp=objectB.value;
  for(var y = 0; y < temp.length; y++)
    if(elementA.key == temp[y])
	  elementA.count = elementA.count-Math.floor(elementA.count/3);
}
