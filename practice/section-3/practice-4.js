function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var count1=1;
var flag;
 var collection_c=[];
 var keke=object_b.value;
 for(var i=0;i<collection_a.length;i++){
   flag=true;
   if(collection_a[i].length==3)
   {
       var temp=new Object();
   temp.key=collection_a[i].charAt(0);
   temp.count=parseInt(collection_a[i].charAt(2));
       collection_c.push(temp);
   continue;
   }
   else if(collection_a[i]==collection_a[i+1])
 {
   count1++;
   flag=false;
   continue;
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
 for(var i=0;i<collection_c.length;i++)
 console.log(collection_c[i].key+'='+collection_c[i].count);
 return collection_c;
}
