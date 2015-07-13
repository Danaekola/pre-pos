function count_same_elements(collection) {
  //在这里写入代码
  var count1=1,flag;
  var result=[];
  for(var m=0;m<collection.length;m++){
	  flag=true;
	  if(collection[m].length==3){
        var temp=new Object();
		temp.key=collection[m].charAt(0);
		temp.count=parseInt(collection[m].charAt(2));
        result.push(temp);
		continue;
	  }
	  else if(collection[m]==collection[m+1]){
	       count1++;
	       flag=false;
	       continue;
	  }
	  if(flag==true){
		var temp=new Object();
		temp.key=collection[m];
		temp.count=count1;
        result.push(temp);
		count1=1;
	  }
  }
  return result;
}
