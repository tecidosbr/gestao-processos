import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { IcsEntity } from '../model';

export class IcsService extends InMemoryDBService<IcsEntity> {
  public constructor(args) {
    super(args);
    this.records = records;
  }
}

export const records: IcsEntity[] = [
  {
    id: '01',
    description: 'GENERALIDADES. TERMINOLOGIA. NORMALIZAÇÃO. DOCUMENTAÇÃO',
  },
  {
    id: '03',
    description:
      'SERVIÇOS. ORGANIZAÇÃO, GESTÃO E QUALIDADE DE EMPRESAS. ADMINISTRAÇÃO. TRANSPORTE. SOCIOLOGIA.',
  },
  { id: '07', description: 'CIÊNCIAS NATURAIS E APLICADAS' },
  { id: '11', description: 'TECNOLOGIA DA SAÚDE' },
  { id: '13', description: 'MEIO AMBIENTE. PROTEÇÃO DA SAÚDE. SEGURANÇA' },
  { id: '17', description: 'METROLOGIA E MEDIÇÃO. FENÔMENOS FÍSICOS' },
  { id: '19', description: 'ENSAIOS' },
  { id: '21', description: 'COMPONENTES E SISTEMAS MECÂNICOS PARA USO GERAL' },
  {
    id: '23',
    description: 'COMPONENTES E SISTEMAS PARA FLUIDOS PARA USO GERAL',
  },
  { id: '25', description: 'TECNOLOGIAS DE FABRICAÇÃO' },
  { id: '27', description: 'ENERGIA E TRANSMISSÃO DE CALOR' },
  { id: '29', description: 'ENGENHARIA ELÉTRICA' },
  { id: '31', description: 'ELETRÔNICA' },
  { id: '33', description: 'TELECOMUNICAÇÕES. ÁUDIO E VÍDEO' },
  { id: '35', description: 'TECNOLOGIA DA INFORMAÇÃO' },
  { id: '37', description: 'TECNOLOGIA DE IMAGEM' },
  { id: '39', description: 'MECÂNICA DE PRECISÃO. JOALHERIA' },
  { id: '43', description: 'VEÍCULOS RODOVIÁRIOS' },
  { id: '45', description: 'ENGENHARIA FERROVIÁRIA' },
  { id: '47', description: 'CONSTRUÇÃO NAVAL E ESTRUTURAS MARÍTIMAS' },
  { id: '49', description: 'ENGENHARIA AEROESPACIAL' },
  { id: '53', description: 'EQUIPAMENTOS PARA MOVIMENTAÇÃO DE CARGA' },
  { id: '55', description: 'EMBALAGEM E DISTRIBUIÇÃO DE MERCADORIAS' },
  { id: '59', description: 'TECNOLOGIA TÊXTIL E DO COURO' },
  { id: '61', description: 'INDÚSTRIA DO VESTUÁRIO' },
  { id: '65', description: 'AGRICULTURA' },
  { id: '67', description: 'TECNOLOGIA DE ALIMENTOS' },
  { id: '71', description: 'TECNOLOGIA QUÍMICA' },
  { id: '73', description: 'MINERAÇÃO E MINERAIS' },
  { id: '75', description: 'PETRÓLEO E TECNOLOGIAS ASSOCIADAS' },
  { id: '77', description: 'METALURGIA' },
  { id: '79', description: 'TECNOLOGIA DA MADEIRA' },
  { id: '81', description: 'INDÚSTRIAS DE VIDRO E CERÂMICA' },
  { id: '83', description: 'INDÚTRIAS DE BORRACHA E PLÁSTICOS' },
  { id: '85', description: 'TECNOLOGIA DO PAPEL' },
  { id: '87', description: 'INDUSTRIA DA PINTURA E DA COR' },
  { id: '91', description: 'EDIFICAÇÕES E MATERIAIS DE CONSTRUÇÃO' },
  { id: '93', description: 'ENGENHARIA CIVIL' },
  {
    id: '95',
    description: 'ASSUNTOS MILITARES. ENGENHARIA MILITAR. ARMAMENTOS',
  },
  {
    id: '97',
    description: 'EQUIPAMENTO DOMÉSTICO E COMERCIAL. ENTRETENIMENTO. ESPORTES',
  },
];
