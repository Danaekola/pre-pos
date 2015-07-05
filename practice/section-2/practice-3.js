function count_same_elements(collection) {
  //在这里写入代码
  var x;
var count1=1;
 var flag;
 var result=[];
for(var i=0;i<collection.length;i++){
        if(collection[i].length!=1)
        {
                   if(!isNaN(collection[i].charAt(3))
         x=parseInt(collection[i].charAt(2));
         else
                   x=parseInt(collection[i].charAt(2)+collection[i].charAt(3));
             collection.length+=x-1;
                 for(var k=collection.length-x;k>i;k--)
                collection[k+x-1]=collection[k];
                 for(var m=i;m<=m+x-1;m++)
                collection[m]=collection[i].charAt(0);
    }
}

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
