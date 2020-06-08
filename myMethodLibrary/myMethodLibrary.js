   /*||In here i write my own array method,  ||
     ||String method and Math object method  ||
     ||i try to use my own creativity to     ||
     ||make them work just like the normal.  || 
     ||methods.                              || 
     || I'm not an expert just an intermediat||
     || trying to improve.                   ||*/  

// ARRAY METHODS

// concat()
 Array.prototype.myConcat = function(){
 	var returnArray = Object(this) ;
 	for(i = 0; i<arguments.length; i++){
 	  if(typeof(arguments[i])=="object"){
 	   for(j = 0; j<arguments[i].length; j++){
 	   	  returnArray.length+=1;
  			returnArray[returnArray.length-1]= arguments[i][j];
  			} 
  	  }
  	  else{
  	     returnArray.length+=1;
			returnArray[returnArray.length-1]= arguments[i];				
  	  }
  	}
  	  return returnArray;
 }

// copyWithin()
 Array.prototype.myCopyWithin = function(target, start, end){
     if(target == undefined && start == undefined && end == undefined){
     	target = 0; 
     } 
     if(start == undefined) start = 0;
     if(end == undefined) end = this.length;
     
 	for(i = target; i < this.length; i++){
 		this[i] = this[start];
 		start += 1;
 		if(start == end) break;
 	}
 }

// entries()
 Array.prototype.myEntries = function(){
 	var returnArray = [];
 	for(i = 0; i < this.length; i++){
 		returnArray.length += 1;
 		returnArray[i] = [i, this[i]];
 	}
 	  return returnArray;
 }

// fill()
 Array.prototype.myFill = function(value, start, end){
 	if(value){
 		if(start == undefined) start = 0;
 		if(end == undefined) end = this.length;
 		for(i = start; i < this.length; i++){
 	  	this[i] = value;
 	  	start += 1;
 	  	if(start == end) break;
 		}
 	}
 }

// valueof()
 Array.prototype.myValueOf = function(){
 	var returnArray = this;
 	return returnArray;
 }

// unshift()
 Array.prototype.myUnshift = function(){
 	
 	this.length += arguments.length
 	
 	for(i = this.length-1; i  >= 0; i--){
 		if((i - arguments.length) < 0 ) break;
 		
 		this[i] = this[i-arguments.length];
 	}
 	for(i = 0; i < arguments.length; i++){ 
 	     this[i] = arguments[i];
     }
     return this.length;
 }

// toString()
 Array.prototype.myToString = function(){
 	var returnString = "";
 	for(i = 0; i < this.length; i++){
 		if(i == this.length-1){
 			 returnString += (this[i]);
 		}
 		else{
  			returnString += (this[i] + ",");
  	   }
 	}
 	 return returnString;
 }

// slice()
 Array.prototype.mySlice = function(start, end){
 	var returnArray = [];
 	
 	if(start < 0){
 		if( end < 0 ){
 			
 	 for(i = this.length+start; i < this.length+end; i++){
 		returnArray.length += 1;
 		returnArray[returnArray.length-1] = this[i];
 	 }
 	    }else if(end == undefined){
 	    	
 	 for(i = this.length+start; i < this.length; i++){
 		returnArray.length += 1;
 		returnArray[returnArray.length-1] = this[i]; 
 	 }   		
     	}
 	} 
 	else if(start > 0){
 		if(end != undefined){
 	 for(i = start; i < end; i++){
 		returnArray.length += 1;
 		returnArray[returnArray.length-1] = this[i];
 	 }
 	    }else{
      for(i = start; i < this.length; i++){
 		returnArray.length += 1;
 		returnArray[returnArray.length-1] = this[i];
 	 } 		
     	}
 	    
 	}
 	return returnArray;
 }

// shift()
 Array.prototype.myShift = function(){
 	var returnValue = this[0];
 	for(i = 0; i < this.length; i++){
 		this[i] = this[i+1];
 	}
 	this.length -= 1;
 	return returnValue;
 }

// reverse()
 Array.prototype.myReverse = function(){
 	var returnArray = [];
 	for(i = this.length-1; i >= 0; i--){
 		returnArray.length += 1;
 		returnArray[returnArray.length-1] = this[i];
 	}
 	return returnArray;
 }

// push()
 Array.prototype.myPush = function(){
 	for(i = 0; i < arguments.length; i++){
 		this.length += 1;
 		this[this.length-1] = arguments[i];
 	}
 	return this.length;
 }

// pop()
 Array.prototype.myPop = function(){
 	var returnValue = this[this.length-1];
 	this.length -= 1;
 	return returnValue;
 }

// lastIndexOf()
 Array.prototype.myLastIndexOf = function(item, start){
 	var returnValue;
 	if(start === undefined) start = this.length;
 	if(start >= 0){
 		for(i = start; i >= 0; i--){
 			if(this[i] == item){
 				returnValue = i;
 				break;
 			}
 			else{
 				returnValue = -1;
 			}
 		}
 	}
 	if(start < 0){
 		for(i = this.length+start; i >= 0; i--){
 			if(this[i] == item){
 				returnValue = i;
 				break;
 			}
 			else{
 				returnValue = -1;
 			}
 		}
 	}
 	return returnValue; 	
 }

// join()
 Array.prototype.myJoin =  function(separator){
	var returnString = "";
	if(separator == undefined) separator = ",";
	for(i = 0; i < this.length; i++){
 		if(i == this.length-1){
 			 returnString += (this[i]);
 		}
 		else{
  			returnString += (this[i] + separator);
  	   }
 	}
 	  return returnString;
 }

// isArray()
 Array.myIsArray = function(obj){
 	if(typeof(obj) == "object"){
 	  if(Object.getPrototypeOf(obj) === Array.prototype){
 		   return true;
 	  }else return false;
 	 }
 	 else return false;
 }

// indexOf()
 Array.prototype.myIndexOf = function(item,start){
 	var returnValue;
 	if(start === undefined) start = 0;
 	if(start >= 0){
 		for(i = start; i < this.length; i++){
 			if(this[i] == item){
 				returnValue = i;
 				break;
 			}
 			else{
 				returnValue = -1;
 			}
 		}
 	}
 	if(start < 0){
 		for(i = this.length+start; i < this.length; i++){
 			if(this[i] == item){
 				returnValue = i;
 				break;
 			}
 			else{
 				returnValue = -1;
 			}
 		}
 	}
 	return returnValue; 	 	
 }

// includes()
 Array.prototype.myIncludes = function(element,start){
 	if(start === undefined) start = 0;
 	var returnValue;
 		for(i = start; i < this.length; i++){
 			if(this[i] === element){
 				returnValue = true;
 				break;
 			}
 			else returnValue = false;
 		}
 	return returnValue;
 }
 
// i'm creating a clone here because i realise i might need it
// better to do it once than multiple times...
//from here down , i also thought i'll be wise to use some of my methods
  Array.prototype.myClone = function(){
		var clone = [];
		for(i = 0; i < this.length; i++){
			clone.length+=1;
			clone[i] = this[i];
		}
		return clone;
	}

//  reduce()
 Array.prototype.myReduce = function(func,initialValue){
		var arr = this;
		var cloneArr = this.myClone();
		if(initialValue !=  undefined) cloneArr.myUnshift(initialValue);
		var total = cloneArr[0];
 	  for(i = 1; i < cloneArr.length; i++){
  		var currentIndex = i;
  		var currentValue = cloneArr[i];
  		total = func(total,currentValue,currentIndex,arr);
  	}
  	return total;
  }
	
// reduceRight
 Array.prototype.myReduceRight = function(func,initialValue){
		var arr = this;
		var cloneArr = this.myClone();
		if(initialValue !=  undefined) cloneArr.myPush(initialValue);
		var total = cloneArr[cloneArr.length-1];
 	  for(i = cloneArr.length-2; i >= 0; i--){
  		var currentIndex = i;
  		var currentValue = cloneArr[i];
  		total = func(total,currentValue,currentIndex,arr);
  	}
  	return total;
	}

// some()
 Array.prototype.mySome = function(func,thisValue){
		var returnValue;
		var arr = this;
 	  for(i = 0; i < this.length; i++){
  		var currentIndex = i;
  		var currentValue = this[i];
			if(func(currentValue,currentIndex,arr)) returnValue = true;
			else returnValue = false;
  	}
  	return returnValue;
	}

// filter()
 Array.prototype.myFilter = function(func,thisValue){
	 var returnArray = [];
	 var arr = Object(this);
	 for(i = 0; i < this.length; i++){
			var currentIndex = i;
			var currentValue = this[i];
			if(func(currentValue,currentIndex,arr)){
				returnArray.length += 1;
				returnArray[returnArray.length-1] = currentValue;
			} 
		}
		return returnArray;
 }