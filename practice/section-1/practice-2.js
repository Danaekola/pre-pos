function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
var result=[];
for(var x=0;x<collection_a.length;x++)
	  searchSameElement1(collection_a[x],collection_b,result);
      return result;
}
function searchSameElement1(a_element,collection_b,result){
      for(var y=0;y<collection_b.length;y++)
		  searchSameElement2(y,a_element,result,collection_b);
}
function searchSameElement2(index,a_element,result,collection_b){
      for(var k=0;k<collection_b[index].length;k++)
		  if(a_element==collection_b[index][k])
		          result.push(a_element);
}
