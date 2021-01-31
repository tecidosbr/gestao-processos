import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ComiteEntity } from '../model';

export class ComiteService extends InMemoryDBService<ComiteEntity> {
  public constructor(args) {
    super(args);
    this.records = records;
  }
}

export const records: ComiteEntity[] = [
  {
    id: 'ABNT/CB-001',
    description: 'Comitê Brasileiro de Mineração e Metalurgia',
  },
  {
    id: 'ABNT/CB-002',
    description: 'Comitê Brasileiro da Construção Civil',
  },
  {
    id: 'ABNT/CB-003',
    description: 'Comitê Brasileiro de Eletricidade',
  },
  {
    id: 'ABNT/CB-004',
    description: 'Comitê Brasileiro de Máquinas e Equipamentos Mecânicos',
  },
  {
    id: 'ABNT/CB-005',
    description: 'Comitê Brasileiro Automotivo',
  },
  {
    id: 'ABNT/CB-006',
    description: 'Comitê Brasileiro Metroferroviário',
  },
  {
    id: 'ABNT/CB-007',
    description:
      'Comitê Brasileiro de Navios, Embarcações e Tecnologia Marítima',
  },
  {
    id: 'ABNT/CB-008',
    description: 'Comitê Brasileiro de Aeronáutica e Espaço',
  },
  {
    id: 'ABNT/CB-009',
    description: 'Comitê Brasileiro de Gases Combustíveis',
  },
  {
    id: 'ABNT/CB-010',
    description: 'Comitê Brasileiro de Química',
  },
  {
    id: 'ABNT/CB-011',
    description: 'Comitê Brasileiro de Couro, Calçados e Artefatos de Couro',
  },
  {
    id: 'ABNT/CB-012',
    description: 'Comitê Brasileiro de Agricultura e Pecuária',
  },
  {
    id: 'ABNT/CB-013',
    description: 'Comitê Brasileiro de Bebidas',
  },
  {
    id: 'ABNT/CB-014',
    description: 'Comitê Brasileiro de Informação e Documentação',
  },
  {
    id: 'ABNT/CB-015',
    description: 'Comitê Brasileiro do Mobiliário',
  },
  {
    id: 'ABNT/CB-016',
    description: 'Comitê Brasileiro de Transportes e Tráfego',
  },
  {
    id: 'ABNT/CB-017',
    description: 'Comitê Brasileiro de Têxteis e do Vestuário',
  },
  {
    id: 'ABNT/CB-018',
    description: 'Comitê Brasileiro de Cimento, Concreto e Agregados',
  },
  {
    id: 'ABNT/CB-019',
    description: 'Comitê Brasileiro de Refratários',
  },
  {
    id: 'ABNT/CB-020',
    description: 'Comitê Brasileiro de Energia Nuclear',
  },
  {
    id: 'ABNT/CB-021',
    description: 'Comitê Brasileiro de Computadores e Processamento de Dados',
  },
  {
    id: 'ABNT/CB-022',
    description: 'Comitê Brasileiro de Impermeabilização',
  },
  {
    id: 'ABNT/CB-023',
    description: 'Comitê Brasileiro de Embalagem e Acondicionamento',
  },
  {
    id: 'ABNT/CB-024',
    description: 'Comitê Brasileiro de Segurança Contra Incêndio',
  },
  {
    id: 'ABNT/CB-025',
    description: 'Comitê Brasileiro da Qualidade',
  },
  {
    id: 'ABNT/CB-026',
    description: 'Comitê Brasileiro Odonto-Médico-Hospitalar',
  },
  {
    id: 'ABNT/ONS-027',
    description: 'Organismo de Normalização Setorial de Tecnologia Gráfica',
  },
  {
    id: 'ABNT/CB-028',
    description: 'Comitê Brasileiro de Siderurgia',
  },
  {
    id: 'ABNT/CB-029',
    description: 'Comitê Brasileiro de Celulose e Papel',
  },
  {
    id: 'ABNT/CB-030',
    description: 'Comitê Brasileiro de Tecnologia Alimentar',
  },
  {
    id: 'ABNT/CB-031',
    description: 'Comitê Brasileiro de Madeira',
  },
  {
    id: 'ABNT/CB-032',
    description: 'Comitê Brasileiro de Equipamentos de Proteção Individual',
  },
  {
    id: 'ABNT/CB-033',
    description:
      'Comitê Brasileiro de Joalheria, Gemas, Metais Preciosos e Bijuteria',
  },
  {
    id: 'ABNT/ONS-034',
    description: 'Organismo de Normalização Setorial de Petróleo',
  },
  {
    id: 'ABNT/CB-035',
    description: 'Comitê Brasileiro do Alumínio',
  },
  {
    id: 'ABNT/CB-036',
    description:
      'Comitê Brasileiro de Análises Clínicas e Diagnóstico in Vitro',
  },
  {
    id: 'ABNT/CB-037',
    description: 'Comitê Brasileiro de Vidros Planos',
  },
  {
    id: 'ABNT/CB-038',
    description: 'Comitê Brasileiro de Gestão Ambiental',
  },
  {
    id: 'ABNT/CB-039',
    description: 'Comitê Brasileiro de Implementos Rodoviários',
  },
  {
    id: 'ABNT/CB-040',
    description: 'Comitê Brasileiro de Acessibilidade',
  },
  {
    id: 'ABNT/CB-041',
    description: 'Comitê Brasileiro de Minérios de Ferro',
  },
  {
    id: 'ABNT/CB-042',
    description: 'Comitê Brasileiro de Soldagem',
  },
  {
    id: 'ABNT/CB-043',
    description: 'Comitê Brasileiro de Corrosão',
  },
  {
    id: 'ABNT/CB-044',
    description: 'Comitê Brasileiro de Cobre',
  },
  {
    id: 'ABNT/CB-045',
    description: 'Comitê Brasileiro de Pneus e Aros',
  },
  {
    id: 'ABNT/CB-046',
    description: 'Comitê Brasileiro de Áreas Limpas e Controladas',
  },
  {
    id: 'ABNT/CB-047',
    description: 'Comitê Brasileiro de Amianto Crisotila',
  },
  {
    id: 'ABNT/CB-048',
    description: 'Comitê Brasileiro de Máquinas Rodoviárias',
  },
  {
    id: 'ABNT/CB-049',
    description: 'Comitê Brasileiro de Óptica e Instrumentos Ópticos',
  },
  {
    id: 'ABNT/CB-050',
    description:
      'Comitê Brasileiro de Materiais, Equipamentos e Estruturas Oceânicas para Indústria de Petróleo e Gás Natural',
  },
  {
    id: 'ABNT/ONS-051',
    description:
      'Organismo de Normalização Setorial de Embalagem e Acondicionamento Plásticos',
  },
  {
    id: 'ABNT/CB-052',
    description: 'Comitê Brasileiro do Café',
  },
  {
    id: 'ABNT/CB-053',
    description: 'Comitê Brasileiro de Normalização em Metrologia',
  },
  {
    id: 'ABNT/CB-054',
    description: 'Comitê Brasileiro do Turismo',
  },
  {
    id: 'ABNT/CB-055',
    description:
      'Comitê Brasileiro de Refrigeração, Ar-Condicionado, Ventilação e Aquecimento',
  },
  {
    id: 'ABNT/CB-056',
    description: 'Comitê Brasileiro da Carne e do Leite',
  },
  {
    id: 'ABNT/CB-057',
    description:
      'Comitê Brasileiro de Higiene Pessoal, Perfumaria e Cosméticos',
  },
  {
    id: 'ABNT/ONS-058',
    description:
      'Organismo de Normalização Setorial de Ensaios Não Destrutivos',
  },
  {
    id: 'ABNT/CB-059',
    description: 'Comitê Brasileiro da Fundição',
  },
  {
    id: 'ABNT/CB-060',
    description:
      'Comitê Brasileiro de Ferramentas Manuais, Abrasivas e de Usinagem',
  },
  {
    id: 'ABNT/CEE-061',
    description: 'Comissão de Estudo Especial de Álcool Combustível',
  },
  {
    id: 'ABNT/CEE-062',
    description: 'Comissão de Estudo Especial de Biodiesel',
  },
  {
    id: 'ABNT/CEE-063',
    description: 'Comissão de Estudo Especial de Gestão de Riscos',
  },
  {
    id: 'ABNT/CEE-064',
    description:
      'Comissão de Estudo Especial de Fabricação de Veículo Acessível',
  },
  {
    id: 'ABNT/CEE-065',
    description: 'Comissão de Estudo Especial de Recursos Hídricos',
  },
  {
    id: 'ABNT/CEE-066',
    description:
      'Comissão de Estudo Especial de Utensílios Domésticos Metálicos',
  },
  {
    id: 'ABNT/CEE-067',
    description: 'Comissão de Estudo Especial de Tecnologias de Hidrogênio',
  },
  {
    id: 'ABNT/CEE-068',
    description:
      'Comissão de Estudo Especial de Avaliação da Qualidade do Solo e Água para Levantamento de Passivo Ambiental e Análise de Risco à Saúde Humana',
  },
  {
    id: 'ABNT/CEE-069',
    description: 'Comissão de Estudo Especial de Sistemas de Armazenagem',
  },
  {
    id: 'ABNT/CEE-070',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Profissional de Acesso por Corda',
  },
  {
    id: 'ABNT/CEE-071',
    description:
      'Comissão de Estudo Especial de Poliestireno Expandido para Isolação Térmica',
  },
  {
    id: 'ABNT/CEE-072',
    description: 'Comissão de Estudo Especial de Tabaco e Produtos de Tabaco',
  },
  {
    id: 'ABNT/CEE-073',
    description:
      'Comissão de Estudo Especial de Tubos e Acessórios de Polietileno para Sistemas Enterrados para Redes de Distribuição e Adução de Água',
  },
  {
    id: 'ABNT/CEE-074',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Operadores de Aciarias',
  },
  {
    id: 'ABNT/CEE-075',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Operadores de Alto-Fornos',
  },
  {
    id: 'ABNT/CEE-076',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Operadores de Ponte Rolante e Pórtico na Área Minerometalúrgica',
  },
  {
    id: 'ABNT/CEE-077',
    description:
      'Comissão de Estudo Especial de Aproveitamento de Água de Chuva',
  },
  {
    id: 'ABNT/CEE-078',
    description: 'Comissão de Estudo Especial de Informática em Saúde',
  },
  {
    id: 'ABNT/CEE-079',
    description: 'Comissão de Estudo Especial de Serviço em Pequeno Comércio',
  },
  {
    id: 'ABNT/CEE-080',
    description:
      'Comissão de Estudo Especial de Sistemas de Prevenção e Proteção Contra Explosão',
  },
  {
    id: 'ABNT/CEE-081',
    description:
      'Comissão de Estudo Especial de Minérios, Concentrados e Produtos Primários de Cobre e Níquel',
  },
  {
    id: 'ABNT/CEE-082',
    description: 'Comissão de Estudo Especial de Vidraria de Laboratório',
  },
  {
    id: 'ABNT/CEE-083',
    description:
      'Comissão de Estudo Especial de Aplicações de Métodos Estatísticos',
  },
  {
    id: 'ABNT/CEE-084',
    description:
      'Comissão de Estudo Especial de Segurança de Documentação Eletrônica',
  },
  {
    id: 'ABNT/CEE-085',
    description: 'Comissão de Estudo Especial de Televisão Digital',
  },
  {
    id: 'ABNT/CEE-086',
    description: 'Comissão de Estudo Especial de Cofres',
  },
  {
    id: 'ABNT/CEE-087',
    description: 'Comissão de Estudo Especial de Cadeia Apícola',
  },
  {
    id: 'ABNT/CEE-088',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Profissional de Resgate por Corda em Altura e em Espaço Confinado',
  },
  {
    id: 'ABNT/CEE-089',
    description: 'Comissão de Estudo Especial de Nanotecnologia',
  },
  {
    id: 'ABNT/CB-090',
    description:
      'Comitê Brasileiro de Qualificação e Certificação de Pessoas no Processo Construtivo para Edificações',
  },
  {
    id: 'ABNT/CEE-091',
    description:
      'Comissão de Estudo Especial de Sistemas para Redes de Coleta de Efluentes à Vácuo',
  },
  {
    id: 'ABNT/CEE-092',
    description:
      'Comissão de Estudo Especial de Serviços de Atendimento ao Consumidor',
  },
  {
    id: 'ABNT/CEE-093',
    description:
      'Comissão de Estudo Especial de Gestão de Projetos, Programas e Portfólio',
  },
  {
    id: 'ABNT/CEE-094',
    description:
      'Comissão de Estudo Especial de Laje Pré-Fabricada, Pré-Laje e de Armaduras Treliçadas Eletrossoldadas',
  },
  {
    id: 'ABNT/CEE-095',
    description: 'Comissão de Estudo Especial de Estufas e Viveiros Agrícolas',
  },
  {
    id: 'ABNT/CEE-096',
    description:
      'Comissão de Estudo Especial de Segurança de Brinquedos Infláveis de Grande Porte',
  },
  {
    id: 'ABNT/CEE-097',
    description:
      'Comissão de Estudo Especial de Gestão de Segurança para Cadeia Logística',
  },
  {
    id: 'ABNT/CEE-098',
    description: 'Comissão de Estudo Especial de Cadeiras de Praia',
  },
  {
    id: 'ABNT/CB-099',
    description: 'Comitê Brasileiro de Qualificação e Certificação de Pessoas',
  },
  {
    id: 'ABNT/CEE-100',
    description: 'Comissão de Estudo Especial de Segurança dos Brinquedos',
  },
  {
    id: 'ABNT/CEE-101',
    description:
      'Comissão de Estudo Especial de Tubos Plásticos para Irrigação e Drenagem Agrícola',
  },
  {
    id: 'ABNT/CEE-102',
    description:
      'Comissão de Estudo Especial de Segurança de Artigos Escolares',
  },
  {
    id: 'ABNT/CEE-103',
    description: 'Comissão de Estudo Especial de Manejo Florestal',
  },
  {
    id: 'ABNT/CEE-104',
    description: 'Comissão de Estudo Especial de Segurança de Alimentos',
  },
  {
    id: 'ABNT/CEE-105',
    description:
      'Comissão de Estudo Especial de Copos Plásticos Descartáveis Termoformados',
  },
  {
    id: 'ABNT/CEE-106',
    description: 'Comissão de Estudo Especial de Análises Ecotoxicológicas',
  },
  {
    id: 'ABNT/CEE-107',
    description: 'Comissão de Estudo Especial de Portas Automáticas',
  },
  {
    id: 'ABNT/CEE-108',
    description: 'Comissão de Estudo Especial de Produtos para Escrita',
  },
  {
    id: 'ABNT/CEE-109',
    description: 'Comissão de Estudo Especial de Segurança e Saúde Ocupacional',
  },
  {
    id: 'ABNT/CEE-110',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Pessoal da Área de Manutenção',
  },
  {
    id: 'ABNT/CEE-111',
    description: 'Comissão de Estudo Especial de Responsabilidade Social',
  },
  {
    id: 'ABNT/CEE-112',
    description: 'Comissão de Estudo Especial de Serviços Financeiros',
  },
  {
    id: 'ABNT/CEE-113',
    description: 'Comissão de Estudo Especial de Cabos de Aço e Acessórios',
  },
  {
    id: 'ABNT/CEE-114',
    description:
      'Comissão de Estudo Especial de Galvanização por Imersão a Quente.',
  },
  {
    id: 'ABNT/CEE-115',
    description:
      'Comissão de Estudo Especial de Tubos e Conexões de CPVC-poli(cloreto de vinila)clorado para Sistemas de Proteção Contra Incêndio por Chuveiro Automático',
  },
  {
    id: 'ABNT/CB-116',
    description: 'Comitê Brasileiro de Gestão e Economia de Energia',
  },
  {
    id: 'ABNT/CEE-117',
    description: 'Comissão de Estudo Especial de Parques de Diversão',
  },
  {
    id: 'ABNT/CEE-118',
    description:
      'Comissão de Estudo Especial de Equipamentos de Proteção Individual para o Setor de Petróleo e Petroquímico',
  },
  {
    id: 'ABNT/CEE-119',
    description: 'Comissão de Estudo Especial de Hotelaria Embarcada',
  },
  {
    id: 'ABNT/CEE-120',
    description: 'Comissão de Estudo Especial de Segurança de Playgrounds',
  },
  {
    id: 'ABNT/CEE-121',
    description: 'Comissão de Estudo Especial de Sistema APM',
  },
  {
    id: 'ABNT/CEE-122',
    description: 'Comissão de Estudo Especial de Cartuchos para Impressoras',
  },
  {
    id: 'ABNT/CEE-123',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Inspetor de Controle Dimensional',
  },
  {
    id: 'ABNT/CEE-124',
    description: 'Comissão de Estudo Especial de Escadas Transportáveis',
  },
  {
    id: 'ABNT/CEE-125',
    description:
      'Comissão de Estudo Especial de Matérias-Primas para Uso na Indústria de Borracha',
  },
  {
    id: 'ABNT/CEE-126',
    description:
      'Comissão de Estudo Especial de Ergonomia da Interação Humano-Sistema',
  },
  {
    id: 'ABNT/CEE-127',
    description:
      'Comissão de Estudo Especial de Sistemas Inteligentes de Transporte',
  },
  {
    id: 'ABNT/CEE-128',
    description:
      'Comissão de Estudo Especial de Critérios de Sustentabilidade em Bioenergia',
  },
  {
    id: 'ABNT/CEE-129',
    description: 'Comissão de Estudo Especial de Resíduos de Serviços de Saúde',
  },
  {
    id: 'ABNT/CEE-130',
    description:
      'Comissão de Estudo Especial de Gestão da Pesquisa, Desenvolvimento e Inovação',
  },
  {
    id: 'ABNT/CEE-131',
    description:
      'Comissão de Estudo Especial de Vestimenta de Segurança para Combate a Incêndio',
  },
  {
    id: 'ABNT/CEE-132',
    description:
      'Comissão de Estudo Especial de Calçado de Segurança para Combate a Incêndio',
  },
  {
    id: 'ABNT/CEE-133',
    description:
      'Comissão de Estudo Especial de Capacete de Segurança para Combate a Incêndio',
  },
  {
    id: 'ABNT/CEE-134',
    description:
      'Comissão de Estudo Especial de Modelagem de Informação da Construção',
  },
  {
    id: 'ABNT/CEE-135',
    description: 'Comissão de Estudo Especial de Radiações Ionizantes',
  },
  {
    id: 'ABNT/CEE-136',
    description:
      'Comissão de Estudo Especial de Ergonomia - Antropometria e Biomecânica',
  },
  {
    id: 'ABNT/CEE-137',
    description: 'Comissão de Estudo Especial de Ciências Forenses',
  },
  {
    id: 'ABNT/CEE-138',
    description:
      'Comissão de Estudo Especial de Equipamentos para Limpeza de Ar e Outros Gases',
  },
  {
    id: 'ABNT/CEE-139',
    description: 'Comissão de Estudo Especial de Controle e Combate a Fraudes',
  },
  {
    id: 'ABNT/CEE-140',
    description:
      'Comissão de Estudo Especial de Qualificação e Certificação de Operadores de Laboratórios em Indústrias Siderúrgicas, Metal-mecânicas, Petrolíferas e Mineração',
  },
  {
    id: 'ABNT/CEE-141',
    description:
      'Comissão de Estudo Especial de Trabalhos com Gás Sulfídrico (H2S) - Padrões, Práticas e Programas de Treinamento',
  },
  {
    id: 'ABNT/CEE-142',
    description: 'Comissão de Estudo Especial de Gestão de Eventos',
  },
  {
    id: 'ABNT/CEE-143',
    description:
      'Comissão de Estudo Especial de Grãos Não Geneticamente Modificados',
  },
  {
    id: 'ABNT/CEE-144',
    description:
      'Comissão de Estudo Especial de Segurança de Carrinhos para Crianças',
  },
  {
    id: 'ABNT/CEE-145',
    description:
      'Comissão de Estudo Especial de Minérios de Alumínio, Óxidos de Alumínio, Alumínio Primário e Insumos para Produção de Alumínio Primário',
  },
  {
    id: 'ABNT/CEE-146',
    description: 'Comissão de Estudo Especial de Mercado Voluntário de Carbono',
  },
  {
    id: 'ABNT/CEE-147',
    description:
      'Comissão de Estudo Especial de Segurança de Artigos para Festas',
  },
  {
    id: 'ABNT/CEE-148',
    description: 'Comissão de Estudo Especial de Gestão Empresarial Cartorária',
  },
  {
    id: 'ABNT/CEE-149',
    description:
      'Comissão de Estudo Especial de Redes de Proteção para Edificações',
  },
  {
    id: 'ABNT/CEE-150',
    description: 'Comissão de Estudo Especial de Materiais de Referência',
  },
  {
    id: 'ABNT/CEE-151',
    description:
      'Comissão de Estudo Especial de Pesquisa Social, de Opinião e de Mercado',
  },
  {
    id: 'ABNT/CEE-152',
    description: 'Comissão de Estudo Especial de Produção de Carvão Vegetal',
  },
  {
    id: 'ABNT/CEE-153',
    description:
      'Comissão de Estudo Especial de Semiacabados de Ultra-alto Peso Molecular (UHMW)',
  },
  {
    id: 'ABNT/CEE-154',
    description: 'Comissão de Estudo Especial de Fósforos de Segurança',
  },
  {
    id: 'ABNT/CEE-155',
    description:
      'Comissão de Estudo Especial de Materiais Isolantes Térmicos e Acústicos',
  },
  {
    id: 'ABNT/CEE-156',
    description: 'Comissão de Estudo Especial de Cana de Açucar',
  },
  {
    id: 'ABNT/CEE-157',
    description: 'Comissão de Estudo Especial de Microbiologia de Alimentos',
  },
  {
    id: 'ABNT/CEE-158',
    description: 'Comissão de Estudo Especial de Recall de Produtos',
  },
  {
    id: 'ABNT/CEE-159',
    description: 'Comissão de Estudo Especial de Toldos e Persianas',
  },
  {
    id: 'ABNT/CEE-160',
    description: 'Comissão de Estudo Especial de Pão do Dia Tipo Francês',
  },
  {
    id: 'ABNT/CEE-161',
    description: 'Comissão de Estudo Especial de Sistema de Blindagem',
  },
  {
    id: 'ABNT/CEE-162',
    description:
      'Comissão de Estudo Especial de Elaboração de Orçamentos e Formação de Preços de Empreendimentos de Infraestrutura',
  },
  {
    id: 'ABNT/CEE-163',
    description:
      'Comissão de Estudo Especial de Qualificação de Inspetor de Fabricação para o Setor Petróleo e Gás',
  },
  {
    id: 'ABNT/CB-164',
    description: 'Comitê Brasileiro de Tintas',
  },
  {
    id: 'ABNT/CEE-165',
    description:
      'Comissão de Estudo Especial de Aparelho para Melhoria da Qualidade da Água para Consumo Humano',
  },
  {
    id: 'ABNT/CEE-166',
    description:
      'Comissão de Estudo Especial de Serviços de Abastecimento de Água e de Esgotamento Sanitário',
  },
  {
    id: 'ABNT/CEE-167',
    description: 'Comissão de Estudo Especial de Chapas Acrílicas',
  },
  {
    id: 'ABNT/CEE-168',
    description: 'Comissão de Estudo Especial de Símbolos Gráficos',
  },
  {
    id: 'ABNT/CEE-169',
    description:
      'Comissão de Estudo Especial de Serviços de Inspeções de Estruturas de Concretos',
  },
  {
    id: 'ABNT/CEE-170',
    description:
      'Comissão de Estudo Especial de Tubos de Poliamida para Condução de Gás Combustível',
  },
  {
    id: 'ABNT/CEE-171',
    description: 'Comissão de Estudo Especial de Agrotóxicos e Afins',
  },
  {
    id: 'ABNT/CEE-172',
    description:
      'Comissão de Estudo Especial de Fitas Politetrafluoretileno (PTFE) para Vedação de Roscas',
  },
  {
    id: 'ABNT/CEE-173',
    description:
      'Comissão de Estudo Especial de Segurança em Transporte de Pessoas por Cabo',
  },
  {
    id: 'ABNT/CEE-174',
    description: 'Comissão de Estudo Especial de Análise Sensorial',
  },
  {
    id: 'ABNT/CEE-175',
    description: 'Comissão de Estudo Especial de Geossintéticos',
  },
  {
    id: 'ABNT/CEE-176',
    description: 'Comissão de Estudo Especial de Cera de Carbaúba',
  },
  {
    id: 'ABNT/CB-177',
    description: 'Comitê Brasileiro de Saneamento Básico',
  },
  {
    id: 'ABNT/CB-178',
    description:
      'Comitê Brasileiro de Componentes de Sistemas Hidráulicos Prediais',
  },
  {
    id: 'ABNT/CB-179',
    description: 'Comitê Brasileiro de Cerâmica Vermelha',
  },
  {
    id: 'ABNT/CEE-180',
    description:
      'Comissão de Estudo Especial de Equipamento de Proteção Individual para Combate a Incêndio Florestal',
  },
  {
    id: 'ABNT/CB-181',
    description: 'Comitê Brasileiro de Desinfestantes e Produtos de Limpeza',
  },
  {
    id: 'ABNT/CEE-182',
    description:
      'Comissão de Estudo Especial de Fertilizantes e Corretivos de Solo',
  },
  {
    id: 'ABNT/CEE-183',
    description:
      'Comissão de Estudo Especial de Distribuição e Manuseio de Cloro-Soda',
  },
  {
    id: 'ABNT/CEE-184',
    description:
      'Comissão de Estudo Especial de Chuveiros e Lava-Olhos de Emergência',
  },
  {
    id: 'ABNT/CEE-185',
    description: 'Comissão de Estudo Especial de Parede de Concreto Celular',
  },
  {
    id: 'ABNT/CEE-186',
    description: 'Comissão de Estudo Especial de Cloro-Soda',
  },
  {
    id: 'ABNT/CEE-187',
    description: 'Comissão de Estudo Especial de Rochas Ornamentais',
  },
  {
    id: 'ABNT/CEE-188',
    description: 'Comissão de Estudo Especial de Ferragens',
  },
  {
    id: 'ABNT/CB-189',
    description: 'Comitê Brasileiro de Placas Cerâmicas para Revestimento',
  },
  {
    id: 'ABNT/CEE-190',
    description: 'Comissão de Estudo Especial de Utensílios de Vidro',
  },
  {
    id: 'ABNT/CEE-191',
    description: 'Comissão de Estudo Especial de Esquadrias',
  },
  {
    id: 'ABNT/CEE-192',
    description: 'Comissão de Estudo Especial de Aquicultura',
  },
  {
    id: 'ABNT/CEE-193',
    description:
      'Comissão de Estudo Especial de Materiais Não Convencionais para Reforço de Estruturas de Concreto',
  },
  {
    id: 'ABNT/CEE-194',
    description: 'Comissão de Estudo Especial de Planejamento Portuário',
  },
  {
    id: 'ABNT/CEE-195',
    description:
      'Comissão de Estudo Especial de Perfil de PVC Rígido para Forros',
  },
  {
    id: 'ABNT/CEE-196',
    description: 'Comissão de Estudo Especial de Acústica',
  },
  {
    id: 'ABNT/CEE-197',
    description: 'Comissão de Estudo Especial de Bens Remanufaturados',
  },
  {
    id: 'ABNT/CB-198',
    description: 'Comitê Brasileiro de Brinquedos',
  },
  {
    id: 'ABNT/CEE-199',
    description:
      'Comissão de Estudo Especial de Sistemas Integrados para Robôs Industriais',
  },
  {
    id: 'ABNT/CEE-200',
    description: 'Comissão de Estudo Especial de Artesanato',
  },
  {
    id: 'ABNT/CEE-201',
    description:
      'Comissão de Estudo Especial de Produção Sustentável de Ferro Gusa a Carvão Vegetal',
  },
  {
    id: 'ABNT/CEE-202',
    description:
      'Comissão de Estudo Especial de Revestimentos de Pisos Vinílicos e de Linóleo Semiflexíveis.',
  },
  {
    id: 'ABNT/CB-203',
    description:
      'Comitê Brasileiro de Tratores, Máquinas Agrícolas e Florestais',
  },
  {
    id: 'ABNT/CEE-204',
    description: 'Comissão de Estudo Especial de Piso Laminados',
  },
  {
    id: 'ABNT/CEE-205',
    description:
      'Comissão de Estudo Especial de Gesso Natural e Seus Derivados',
  },
  {
    id: 'ABNT/CEE-206',
    description: 'Comissão de Estudo Especial de Grão Abrasivos',
  },
  {
    id: 'ABNT/CEE-207',
    description: 'Comissão de Estudo Especial de Isqueiros de Segurança',
  },
  {
    id: 'ABNT/CEE-208',
    description:
      'Comissão de Estudo Especial de Produção Sustentável de Couros',
  },
  {
    id: 'ABNT/CEE-209',
    description:
      'Comissão de Estudo Especial de Tubos e Conexões de Polietileno para Condução de Gás Combustível',
  },
  {
    id: 'ABNT/CB-210',
    description:
      'Comitê Brasileiro de Segurança em Artigos para Bebês e Crianças',
  },
  {
    id: 'ABNT/CEE-211',
    description:
      'Comissão de Estudo Especial de Suplementos Nutricionais e Alimentos para Fins Especiais',
  },
  {
    id: 'ABNT/CEE-212',
    description:
      'Comissão de Estudo Especial de Mitigação de Interferências Elétricas',
  },
  {
    id: 'ABNT/CEE-213',
    description: 'Comissão de Estudo Especial de Bagaço de Cana-de-Açúcar',
  },
  {
    id: 'ABNT/CEE-214',
    description: 'Comissão de Estudo Especial de Avicultura',
  },
  {
    id: 'ABNT/CEE-215',
    description: 'Comissão de Estudo Especial de Piscinas',
  },
  {
    id: 'ABNT/CEE-216',
    description: 'Comissão de Estudo Especial de Indicação Geográfica',
  },
  {
    id: 'ABNT/CB-217',
    description: 'Comitê Brasileiro de Drywall',
  },
  {
    id: 'ABNT/CEE-218',
    description:
      'Comissão de Estudo Especial de Efluentes Gasosos em Dutos e Chaminés de Fontes Estacionárias',
  },
  {
    id: 'ABNT/CEE-219',
    description: 'Comissão de Estudo Especial de Serviços de Design',
  },
  {
    id: 'ABNT/CEE-220',
    description:
      'Comissão de Estudo Especial de Elaboração de Projetos para Disposição de Rejeitos e Estéreis em Mineração',
  },
  {
    id: 'ABNT/CEE-221',
    description: 'Comissão de Estudo Especial de Solos',
  },
  {
    id: 'ABNT/CEE-222',
    description: 'Comissão de Estudo Especial de Terra Armada',
  },
  {
    id: 'ABNT/CEE-223',
    description: 'Comissão de Estudo Especial de Circo',
  },
  {
    id: 'ABNT/CEE-224',
    description:
      'Comissão de Estudo Especial de Superfícies para Áreas Desportivas',
  },
  {
    id: 'ABNT/CEE-225',
    description: 'Comissão Estudo Especial de Espaço Confinado',
  },
  {
    id: 'ABNT/CEE-226',
    description:
      'Comissão de Estudo Especial de Composto Polimérico para Assentamento',
  },
  {
    id: 'ABNT/CEE-227',
    description: 'Comissão de Estudo Especial de Meliponicultura',
  },
  {
    id: 'ABNT/CEE-228',
    description: 'Comissão de Estudo Especial de Bem-Estar Animal',
  },
  {
    id: 'ABNT/CEE-229',
    description: 'Comissão de Estudo Especial de Garrafas Térmicas',
  },
  {
    id: 'ABNT/CEE-230',
    description: 'Comissão de Estudo Especial de Food Trucks',
  },
  {
    id: 'ABNT/CEE-231',
    description:
      'Comissão de Estudo Especial de Pontes de Concreto Simples, Armado e Protendido',
  },
  {
    id: 'ABNT/CEE-232',
    description:
      'Comissão de Estudo Especial de Telhas de Policloreto de Vinila (PVC)',
  },
  {
    id: 'ABNT/CEE-233',
    description: 'Comissão de Estudo Especial de Carros Alegóricos',
  },
  {
    id: 'ABNT/CEE-234',
    description:
      'Comissão de Estudo Especial de Chapas Planas e Domos de Poliéster Reforçado com Fibras de Vidro',
  },
  {
    id: 'ABNT/CEE-235',
    description: 'Comissão de Estudo Especial de Telhas Betuminosas',
  },
  {
    id: 'ABNT/CEE-236',
    description:
      'Comissão de Estudo Especial de Tubos e Mangueiras para sistemas de armazenamento de líquidos inflamáveis e combustíveis',
  },
  {
    id: 'ABNT/CEE-237',
    description: 'Comissão de Estudo Especial de Desenho Técnico',
  },
  {
    id: 'ABNT/CEE-238',
    description:
      'Comissão de Estudo Especial de Avaliação e Monitoramento Ambiental em Áreas Offshore',
  },
  {
    id: 'ABNT/CEE-239',
    description:
      'Comissão de Estudo Especial de Serviços de Tradução, Interpretação e Tecnologias Relacionadas',
  },
  {
    id: 'ABNT/CEE-240',
    description:
      'Comissão de Estudo Especial de Perfis Pultrudados de Polímero Reforçado de Fibra de Vidro (PRFV)',
  },
  {
    id: 'ABNT/CEE-241',
    description:
      'Comissão de Estudo Especial de Método Não Destrutivo (MND) de Perfuração Direcional Horizontal',
  },
  {
    id: 'ABNT/CEE-242',
    description: 'Comissão de Estudo Especial de Pellets',
  },
  {
    id: 'ABNT/CEE-243',
    description:
      'Comissão de Estudo Especial de Compósitos Concentrados de Aditivos Químicos (Masterbatches)',
  },
  {
    id: 'ABNT/CEE-244',
    description: 'Comissão de Estudo Especial de Biossegurança e Bioproteção',
  },
  {
    id: 'ABNT/CEE- 245',
    description:
      'Comissão de Estudo Especial de Estruturas Modulares Revestidas com Membranas Técnicas',
  },
  {
    id: 'ABNT/CEE-246',
    description:
      'Comissão de Estudo Especial de Gestão de Resíduos Sólidos e Logística Reversa',
  },
  {
    id: 'ABNT/CEE-247',
    description:
      'Comissão de Estudo Especial de Governança e Gestão de Compras Públicas',
  },
  {
    id: 'ABNT/CB-248',
    description:
      'Comitê Brasileiro de Esquadrias,Componentes e Ferragens em Geral',
  },
  {
    id: 'ABNT/CEE-249',
    description: 'Comissão de Estudo Especial de Inspeção Predial',
  },
  {
    id: 'ABNT/CEE-250',
    description:
      'Comissão de Estudo Especial de Serviços de Educação e Aprendizagem',
  },
  {
    id: 'ABNT/CEE-251',
    description: 'Comissão de Estudo Especial de Gestão de Ativos',
  },
  {
    id: 'ABNT/CEE-261',
    description: 'Comissão de Estudo Especial de Manufatura Aditiva',
  },
  {
    id: 'ABNT/CEE-267',
    description: 'Comissão de Estudo Especial de Facility Management',
  },
  {
    id: 'ABNT/CEE-268',
    description:
      'Comissão de Estudos Especial de Cidades e Comunidades Sustentáveis',
  },
  {
    id: 'ABNT/CEE-276',
    description: 'Comissão de Estudo Especial de Biotecnologia',
  },
  {
    id: 'ABNT/CEE-277',
    description: 'Comissão de Estudo Especial de Compras Sustentáveis',
  },
  {
    id: 'ABNT/CEE-278',
    description: 'Comissão de Estudo Especial Antissuborno',
  },
  {
    id: 'ABNT/CEE-298',
    description: 'Comissão de Estudo Especial de Terras Raras',
  },
  {
    id: 'ABNT/CEE-299',
    description: 'Comissão de Estudo Especial de Açúcar',
  },
  {
    id: 'ABNT/CEE-307',
    description:
      'Comissão de Estudo Especial de Blockchain e Tecnologias de Registro Distribuídas',
  },
  {
    id: 'ABNT/CEE-309',
    description: 'Comissão de Estudo Especial de Governança de Organizações',
  },
  {
    id: 'ABNT/CEE-323',
    description: 'Comissão de Estudo Especial de Economia Circular',
  },
  {
    id: 'ABNT/CEE-331',
    description: 'Comissão de Estudo Especial de Biodiversidade',
  },
];
