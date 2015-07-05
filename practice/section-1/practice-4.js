function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var temp=object_b.value;
  for(var i=0;i<collection_a.length;i++)
	{
	  for(var j=0;j<temp.length;j++)
		  {
         if(collection_a[i].key==temp[j])
			 {
               result.push(collection_a[i].key);
			 }
	      }
    }
	return result;
}
