import axios from 'axios';
import { NormaDto, SearchNormaDto } from 'src/dto/norma.dto';

export class NormaService {
  public async search(data: SearchNormaDto): Promise<NormaDto[]> {
    const response = await axios({
      url: 'https://sigo.search.windows.net/indexes/azuresql-index/docs/search',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ED5091093E1998C47E4605104E38AFE9',
      },
      params: {
        'api-version': '2020-06-30',
      },
      data,
    });

    return response.data.value;
  }
}
