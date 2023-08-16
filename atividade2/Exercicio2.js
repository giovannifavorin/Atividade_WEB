// Função para criar uma matriz vazia de tamanho rows x cols
function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols).fill(0));
    }
    return matrix;
  }
  
  // Função para preencher uma matriz com valores aleatórios
  function fillMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.floor(Math.random() * 10); // Preenche com valores de 0 a 9
      }
    }
  }
  
  // Função para imprimir uma matriz
  function printMatrix(matrix) {
    for (let row of matrix) {
      console.log(row.join(" "));
    }
  }
  
  // Função para calcular a matriz transposta
  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = createMatrix(cols, rows);
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposed[j][i] = matrix[i][j];
      }
    }
  
    return transposed;
  }
  
  // Definir as dimensões da matriz
  const rows = 3;
  const cols = 4;
  
  // Criar e preencher a matriz A
  const matrixA = createMatrix(rows, cols);
  fillMatrix(matrixA);
  
  // Imprimir a matriz A
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  // Calcular e imprimir a transposta da matriz A
  const transposedMatrixA = transposeMatrix(matrixA);
  console.log("\nTransposta da Matriz A:");
  printMatrix(transposedMatrixA);
  