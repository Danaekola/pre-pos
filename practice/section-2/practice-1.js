function count_same_elements(collection) {
  //在这里写入代码
  var count1=1,flag;
  var result=[];
  for(var m=0;m<collection.length-1;m++){
	  flag=true;
	  if(collection[m]==collection[m+1]){
	     count1++;
	     flag=false;
	     if(m!=collection.length-2)
	       continue;
	     else
		   flag=true;
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
