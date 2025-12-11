import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'; 
import { dados } from './Dados';
import Viagens from './Produtos';


function DetalhesViagem() {

    let {id} = useParams()

    let viagem = dados.filter((viagem:any) => viagem.id == id)[0]
    console.log(viagem)

    return <div>
                <h3>Viagem {id} - {viagem.nome}</h3>
                <p>preço: {viagem.preco} €</p>
                <img src={"/"+viagem.imagem} width={500} />
        </div>
}
export default DetalhesViagem