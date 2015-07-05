function count_same_elements(collection) {
  //在这里写入代码
  var count1=1;
  var flag;
  var result=[];
  for(var i=0;i<collection.length-1;i++){
	  flag=true;
	  if(collection[i]==collection[i+1])
	{
	  count1++;
	  flag=false;
	  if(i!=collection.length-2)
	    continue;
	  else
		  flag=true;
	}
	if(flag==true){
		var temp=new Object();
		temp.key=collection[i];
		temp.count=count1;
        result.push(temp);
		count1=1;
	}


	}

return result;
}
