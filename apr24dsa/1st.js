function dailyTemperatures(arr) {
  
    const res = new Array(arr.length).fill(0);
    const stk = [];
  
    for (let i = 0; i < arr.length; i++) {
      
      
      while (stk.length > 0 && arr[i] > arr[stk[stk.length - 1]]) {
        
        const prevIndex = stk.pop();
        
        res[prevIndex] = i - prevIndex;
        
        
      }
      
      stk.push(i);
    }
    
  
    return res;
    
  }
  
  let arr = [73, 74, 75, 71, 69, 72, 76, 73];
  console.log(dailyTemperatures(T)); 
  