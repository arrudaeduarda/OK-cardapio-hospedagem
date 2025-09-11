import { destinos } from '../../model/data/destinos';
import './Galeria.css';
import { ArrowUpRight } from 'lucide-react';


export default function Galeria() {
  return (
    <section className="secao-destinos">
      <h2>Escolha o seu destino</h2>
      
      <div className="container-galeria">
        {destinos.map((destino, index) => (
          <div 
            key={index} 
            className="galeria"
            style={{ backgroundImage: `url(${destino.imagem})` }}
          >
            <div className="galeria-conteudo">
              <h3>{destino.titulo}</h3>
              <p>{destino.descricao}</p>
              <button>
                SAIBA MAIS
                <span className="seta-icone"><ArrowUpRight color="white" strokeWidth={2.5} size={20} /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}