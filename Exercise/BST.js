class Node{
   constructor(value, left=null, null=right){
      this.value = value;
      this.left	= left;
      this.right = right;
  }
  inOrderTraversal(){
      if(this.left != null) this.left.inOrderTraversal();
      console.log(this.value);
      if(this.right != null) this.riht.inOrderTraversal();
  }
}

var t1 = new Tree();
t1.add(10);
t1.add(5);
t1.add(15);
t1.add(7);
t1.add(4);
t1.add(12);
t1.add(16);
console.log(t1);

class Tree{
   condtructor(){
      this.root = null;
   }

add(value){
  //if root is null,create node and add as root, then return
  //currentNode = root, done = false
  //while(!done)
    //if value < currentNode.value then
      //if currentNode.left != null currentNode = this.left
      //else add at currentNode.left, done= true
    //else if value > currentNode.value
      //if currentNode.right != null then currentNode = this.right
      //else add at currentNode.right done = true
  //else
    //you decide
  }
}
