function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var temp=object_b.value;
var x;
  for(var i=0;i<collection_a.length;i++){
	  for(var j=0;j<temp.length;j++)
	  if(collection_a[i].key==temp[j]){
	  x=collection_a[i].count/3;

      collection_a[i].count=collection_a[i].count-Math.floor(x);
  }
  }
   for(var i=0;i<collection_a.length;i++)
	console.log(collection_a[i].key+'='+collection_a[i].count);
   return collection_a;
}
