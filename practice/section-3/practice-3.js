function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var count1=1,x;
  var flag,keke=object_b.value;
  var collection_c=[];
  for(var i=0;i<collection_a.length-1;i++){
	  flag=true;
	  if(collection_a[i]==collection_a[i+1])
	{
	  count1++;
	  flag=false;
	  if(i!=collection_a.length-2)
	    continue;
	  else
		  flag=true;
	}
	if(flag==true){
		var temp=new Object();
		temp.key=collection_a[i];
		temp.count=count1;
        collection_c.push(temp);
		count1=1;
	}
}
for(var i=0;i<collection_c.length;i++){
	  for(var j=0;j<keke.length;j++)
	  if(collection_c[i].key==keke[j]){
	  x=collection_c[i].count/3;

      collection_c[i].count=collection_c[i].count-Math.floor(x);
  }
  }

   return collection_c;

}
