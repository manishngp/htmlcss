function largestArea(heights) {
    let max = 0;
    heights.push(0); 
  
    for (let i = 0; i < heights.length; i++) {

      while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {

        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
      }
      stack.push(i);
    }
  
    return max;
  }
  
  const heights = [2, 1, 5, 6, 2, 3];
  console.log(largestArea(heights)); 