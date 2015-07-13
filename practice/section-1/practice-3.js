function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
   var result=[];
   var temp=object_b.value;
   for(var x=0;x<collection_a.length;x++)
	  searchSameElement(collection_a[x],temp,result);
      return result;
}
function searchSameElement(a_element,temp,result){
      for(var y=0;y<temp.length;y++)
		   if(a_element==temp[y])
		    result.push(a_element);
}
