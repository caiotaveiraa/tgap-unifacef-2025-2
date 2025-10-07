import WeightedGraph from './lib/weighted-graph.class.js'

const grafo = new WeightedGraph()

// Adicionando as arestas
grafo.addEdge('Igarapava', 'Ituverava', 37)
grafo.addEdge('Igarapava', 'Jeriquara', 41)
grafo.addEdge('Igarapava', 'Rifaina', 47)
grafo.addEdge('Ituverava', 'Guará', 14)
grafo.addEdge('Guará', 'São Joaquim da Barra', 21)
grafo.addEdge('Guará', 'Ribeirão Corrente', 25)
grafo.addEdge('São Joaquim da Barra', 'São José da Bela Vista', 37)
grafo.addEdge('São José da Bela Vista', 'Franca', 33)
grafo.addEdge('Ribeirão Corrente', 'São José da Bela Vista', 27)
grafo.addEdge('Ribeirão Corrente', 'Jeriquara', 26)
grafo.addEdge('Ribeirão Corrente', 'Cristais Paulista', 25)
grafo.addEdge('Cristais Paulista', 'Franca', 21)
grafo.addEdge('Jeriquara', 'Pedregulho', 15)
grafo.addEdge('Pedregulho', 'Cristais Paulista', 23)
grafo.addEdge('Pedregulho', 'Rifaina', 28)
grafo.addEdge('Franca', 'Restinga', 15)
grafo.addEdge('Restinga', 'Batatais', 40)
grafo.addEdge('Franca', 'Batatais', 50)
grafo.addEdge('Franca', 'Patrocínio Paulista', 19)
grafo.addEdge('Patrocínio Paulista', 'Itirapuã', 9)
grafo.addEdge('Franca', 'Ibiraci', 39)
grafo.addEdge('Cristais Paulista', 'Claraval', 24)
grafo.addEdge('Claraval', 'Ibiraci', 25)
grafo.addEdge('Ibiraci', 'Patrocínio Paulista', 39)
grafo.addEdge('Batatais', 'Patrocínio Paulista', 64)

// Executando o algoritmo de Dijkstra a partir da cidade Restinga
const resultado = grafo.shortestDistance("Restinga")

// Exibindo os resultados
console.log("Menores distâncias a partir de Restinga:")
for (let cidade in resultado) {
  console.log(`${cidade}: ${resultado[cidade].distance} km`)
}