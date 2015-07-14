function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  getCollectionC(collection_a,collection_c);
  for(var x = 0; x < collection_c.length; x++)
    searchSameElement(collection_c[x],object_b);
  return collection_c;
}
function searchSameElement(elementA,objectB){
  var temp  =objectB.value;
  for(var y = 0; y < temp.length; y++)
	if(elementA.key == temp[y])
	  elementA.count = elementA.count-Math.floor(elementA.count/3);
}
function getCollectionC(collection_a,collection_c){
  var count1 = 1,flag;
  for(var m = 0; m < collection_a.length-1; m++){
    flag = true;
	if(collection_a[m] == collection_a[m+1]){
	   count1++;
	   flag = false;
	   if(m != collection_a.length-2)
	     continue;
	   else
		 flag = true;
	 }
	 if(flag == true){
		var temp = new Object();
		temp.key = collection_a[m];
		temp.count = count1;
        collection_c.push(temp);
		count1 = 1;
	  }
  }
}
