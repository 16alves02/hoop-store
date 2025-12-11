import produtosData from "./produtos.json"

export const produtos = produtosData as Array<{
  id: number;
  nome: string;
  jogador: string;
  equipa: string;
  preco: number;
  imagens: string[];
  descricao: string;
}>