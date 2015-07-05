function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var temp=object_b.value;
 for(var i=0;i<collection_a.length;i++){
   for(var j=0;j<temp.length;j++)
   if(collection_a[i].key==temp[j])
   collection_a[i].count--;
 }
  for(var i=0;i<collection_a.length;i++)
 console.log(collection_a[i].key+'='+collection_a[i].count);
  return collection_a;

}
