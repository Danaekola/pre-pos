function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
       for(var x=0;x<collection_a.length;x++){
	   searchSameElement(collection_a[x],object_b);
       console.log(collection_a[x].key+'='+collection_a[x].count);
  }
       return collection_a;
}
function searchSameElement(a_element,object_b){
       var temp=object_b.value;
	   for(var y=0;y<temp.length;y++)
		   if(a_element.key==temp[y])
		      a_element.count=a_element.count-Math.floor(a_element.count/3);

  }
