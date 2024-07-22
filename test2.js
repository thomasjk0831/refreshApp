const fs = require('fs')
const POSSIBLELEFT = '╣ ═ ╝ ╗ ╩ ╦ * ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const POSSIBLERIGHT = '╠ ═ ╔ ╚ ╩ ╦ * ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const POSSIBLEUP = '╣ ╠ ╝ ╚ ╩ ║ * ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const POSSIBLEDOWN = '╣ ╠ ╔ ╗ ╦ ║ * ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const POSSIBLESINK = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function getConnected(filepath){
   const fileContent = fs.readFileSync(filepath, 'utf8');
   const lines = fileContent.split('\n');
   const graph = {}
   let source = ''

   lines.forEach(line => {
    const parts = line.split(' ');
    if (parts.length > 1) {
        const key = parts.slice(1).map(Number); 
        graph[key] = parts[0];
        if(parts[0] === '*')
            source = key.join(',')
    }
});

const stack = [source]
const visited = new Set()
const connectedSinks = []
while(stack.length){
    const currentNode = stack.pop()
    if(!visited.has(currentNode)){
        visited.add(currentNode)
        if(POSSIBLESINK.includes(graph[currentNode])){
            connectedSinks.push(graph[currentNode])
        }

        const nextNodes = getNextNodes(currentNode, graph)
        for(node of nextNodes){
            if(!visited.has(node))
                stack.push(node)
        }
    }

}

return connectedSinks.sort().join('')
}

function getNextNodes(currentNode, graph){
    const possibleMoves = []
    const nodeType = graph[currentNode]
    arrayCurrentNode = currentNode.split(',').map(Number)
    const x = arrayCurrentNode[0]
    const y = arrayCurrentNode[1]
    if(graph[[x-1,y].join(',')] && POSSIBLELEFT.includes(nodeType) && POSSIBLERIGHT.includes(graph[[x-1,y].join(',')])){
        possibleMoves.push([x-1, y].join(','))
       }
       if(graph[[x+1,y].join(',')] && POSSIBLERIGHT.includes(nodeType) && POSSIBLELEFT.includes(graph[[x+1,y].join(',')] )){
        possibleMoves.push([x+1, y].join(','))
       }
       if(graph[[x,y-1].join(',')] && POSSIBLEUP.includes(nodeType) && POSSIBLEDOWN.includes(graph[[x,y-1].join(',')])){
        possibleMoves.push([x, y-1].join(','))
       }
       if(graph[[x,y+1].join(',')] && POSSIBLEDOWN.includes(nodeType) && POSSIBLEUP.includes(graph[[x,y+1].join(',')])){
        possibleMoves.push([x, y+1].join(','))
       }
       return possibleMoves
}

console.log(getConnected('./coding_qual_input.txt'))