function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0); 
  
    for (let i = 0; i < heights.length; i++) {

      while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
        
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
  
    return maxArea;
  }
  
  const heights = [2, 1, 5, 6, 2, 3];
  console.log(largestRectangleArea(heights)); 