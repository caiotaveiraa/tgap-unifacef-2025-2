export default class Graph {

    // Método contrutor
    constructor(isDirected = false) {
        /*
            Nesta implementação, o grafo pode ser direcionado ou não,
            dependendo do valor do atributo isDirected . Vértices e
            arestas são representados por uma lista de adjacência,
            implementando com o uso de uma classe Map nativa em JavaScript.
        */
        this.isDirected = isDirected
        this.vertices = new Set()   // Set não permite elementos repetidos
        this.adjList = new Map()
    }

    // Método que adiciona um vértice ao grafo
    addVertex(v) {
        // Adiciona o vértice ao conjunto vertices, caso ainda não exista
        if (!this.vertices.has(v)) {
            this.vertices.add(v)
        }

        // Cria um conjunto vazio associado ao vértice na lista de adjacência
        this.adjList.set(v, new Set())
    }
}