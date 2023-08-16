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
  
  // Função para multiplicar duas matrizes
  function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    
    if (colsA !== rowsB) {
      console.log("Não é possível calcular a multiplicação das matrizes.");
      return null;
    }
    
    const resultMatrix = createMatrix(rowsA, colsB);
    
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        resultMatrix[i][j] = sum;
      }
    }
    
    return resultMatrix;
  }
  
  // Definir as dimensões das matrizes A e B
  const rowsA = 3;
  const colsA = 2;
  const rowsB = 2;
  const colsB = 4;
  
  // Criar e preencher as matrizes A e B
  const matrixA = createMatrix(rowsA, colsA);
  const matrixB = createMatrix(rowsB, colsB);
  fillMatrix(matrixA);
  fillMatrix(matrixB);
  
  // Imprimir as matrizes A e B
  console.log("Matriz A:");
  console.log(matrixA);
  console.log("\nMatriz B:");
  console.log(matrixB);
  
  // Multiplicar as matrizes A e B e imprimir o resultado
  const resultMatrix = multiplyMatrices(matrixA, matrixB);
  if (resultMatrix !== null) {
    console.log("\nResultado da multiplicação (C = A x B):");
    console.log(resultMatrix);
  }
  