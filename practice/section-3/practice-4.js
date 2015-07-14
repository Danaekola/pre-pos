function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  getCollectionC(collection_a,collection_c);
  for(var x = 0; x < collection_c.length; x++){
    searchSameElement(collection_c[x],object_b);
    console.log(collection_c[x].key+'='+collection_c[x].count);
  }
  return collection_c;
}
function searchSameElement(elementA,objectB){
  var temp = objectB.value;
  for(var y = 0; y < temp.length; y++)
  if(elementA.key == temp[y])
    elementA.count = elementA.count-Math.floor(elementA.count/3);
}
function getCollectionC(collection_a,collection_c){
  var count1 = 1,flag;
  for(var m = 0; m < collection_a.length; m++){
    flag = true;
	if(collection_a[m].length == 3){
      var temp = new Object();
	  temp.key = collection_a[m].charAt(0);
	  temp.count = parseInt(collection_a[m].charAt(2));
      collection_c.push(temp);
	  continue;
	}
	else if(collection_a[m] == collection_a[m+1]){
	        count1++;
	        flag=false;
	        continue;
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
