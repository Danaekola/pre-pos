function count_same_elements(collection) {
  //在这里写入代码
  var count1=1;
 var flag;
  var result=[];
  for(var i=0;i<collection.length;i++){
	  flag=true;
	  if(collection[i].length==3)
	  {
        var temp=new Object();
		temp.key=collection[i].charAt(0);
		temp.count=parseInt(collection[i].charAt(2));
        result.push(temp);
		continue;
	  }
	  else if(collection[i]==collection[i+1])
	{
	  count1++;
	  flag=false;
	  continue;
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
