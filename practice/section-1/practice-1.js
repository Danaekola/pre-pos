function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  for(var x=0;x<collection_a.length;x++)
	  searchSameElement(collection_a[x],collection_b,result);
      return result;
}
function searchSameElement(a_element,collection_b,result){
      for(var y=0;y<collection_b.length;y++)
		   if(a_element==collection_b[y])
		    result.push(a_element);
}
