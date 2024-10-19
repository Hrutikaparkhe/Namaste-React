
//this is how we can create our own customize array
class MyArr {
constructor(){
    this.length=0;
    this.data={}
}
//method to push the data in array
push(item){//this is how we define method inside class
this.data[this.length]=item
this.length++;
}
//method to fetch data with given index
get(index){
return this.data[index]
}
//mehtod to pop out the last item from item
pop(){
    const lastItem= this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
}
//this method will shift array to left i.e., remove first element completely and array start indexing from 0 from 2nd element
shift(){

    const fisrtItem = this.data[0]
    //re-indexing
    for(let i=0;i<this.length;i++){
        this.data[i]=this.data[i+1]
    }

    delete this.data[this.length-1]
    this.length--
    return fisrtItem
   
}
//this method is delete the array element by index and re index all the elements
deleteByIndex(index){
const item = this.data[index]
for(let i=index;i<this.length-1;i++){
this.data[i]=this.data[i+1]
}
delete this.data[this.length-1]
this.length--
return item
}
}
const MynewArr=new MyArr()//this how we create an instance for our class in javascript
MynewArr.push('apple')
MynewArr.push(1)
MynewArr.push('pine')
MynewArr.push('jawar')
MynewArr.push(7)

MynewArr.push('orange')
console.log(MynewArr.get(1))
console.log(MynewArr.pop())
console.log(MynewArr)
MynewArr.shift()
console.log(MynewArr)
MynewArr.deleteByIndex(2)
console.log(MynewArr,"hi")

