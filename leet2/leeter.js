//medium leet code Skyline

var maxIncreaseKeepingSkyline = function(grid) {
    let max_row=[];
    for (let i=0; i<grid.length; i++){
        let max=0
        for (let j=0; j<grid[i].length; j++){
            if(grid[i][j] > max){
                max=grid[i][j]
            }
        }    
        max_row.push(max)
    }
    
    let max_column=[];
    for (let i=0; i<grid.length; i++){
        let max=0
        for (let j=0; j<grid[i].length; j++){
            if(grid[j][i] > max){
                max=grid[j][i]
            }
        }    
        max_column.push(max)
    }
    
    let total=0
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[i].length; j++){
            total+=(grid[i][j]-(Math.min(max_column[i], max_row[j])))
        }    
    }
    total=total*-1
    
    return total
    
};