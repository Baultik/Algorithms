
// Implement
//
//  [ ] BinaryTree class
//  [ ] add node functionality
//  [ ] find node functionality
//  [ ] remove node functionality (extra credit)
//

function BinaryTreeNode(data) {
    this.left = null;
    this.right = null;
    this.data = data;

    this.add = function (node) {
        if (this.left) {
            this.right = node;
        } else {
            this.left = node;
        }

        return this;
    };
    this.find = function (value) {
        if (this.left && this.left.data === value) {
            console.log("found node",this.left);
            return this.left;
        } else if (this.right && this.right.data === value) {
            console.log("found node",this.right);
            return this.right;
        } else {
            var val = this.left ? this.left.find(value) : null;
            console.log("searching left node ",val);
            if (val) return val;

            val = this.right ? this.right.find(value) : null;
            console.log("searching right node ",val);
            if (val) return val;
        }

        return null;
    };
    this.remove = function () {
        //recursively ?
    }
}

var root = new BinaryTreeNode(4);
root.add(new BinaryTreeNode(2).add(new BinaryTreeNode(3)).add(new BinaryTreeNode(1))).add(new BinaryTreeNode(5));
debugger;
var node = root.find(2);
console.log(node);