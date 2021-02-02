import React, { FunctionComponent, useState } from 'react';
import { useForm } from "react-hook-form";

import { ComiteListDto, OrganismoListDto, IcsListDto, NormaListDto, SearchNormaDto } from "../../../../service/src/dto";
import { useFetchApi } from '../../api';

const bodyStyle = {
  margin: 0,
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.5',
  color: '#212529'
};

export const App: FunctionComponent = () => {
  const [searchNormaDto, setSearchNormaDto] = useState<Partial<SearchNormaDto>>({});

  const { data: organismos } = useFetchApi<OrganismoListDto>('organismo');
  const { data: comites } = useFetchApi<ComiteListDto>('comite');
  const { data: icss } = useFetchApi<IcsListDto>('ics');
  const { data: normas } = useFetchApi<NormaListDto>('norma/search', [searchNormaDto]);

  const { register, handleSubmit, reset } = useForm<{
    palavrasChave: string,
    comite: string,
    ics: string,
    organismos: string[],
  }>();

  const onSubmit = (data: any) => {
    setSearchNormaDto({
      search: '*',
    });
    console.log(data);
  }

  return (
    <div className="container-fluid" style={bodyStyle}>
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">
            <i className="bi-filter" />
            <span>Filtros</span>
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col col-12">
                <label>Organismos</label>
              </div>
              <div className="col col-12">
                {organismos?.list?.map(o => (
                  <div key={o.id} className="form-check m-3" style={{ display: "inline-block" }}>
                    <label className="form-check-label">
                      <input ref={register} className="form-check-input" type="checkbox" name="organismos" value={o.id} />
                      {o.description}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col col-12 col-md-6">
                <label className="form-label">Palavra Chave</label>
                <input ref={register} type="text" className="form-control" name="palavrasChave" />
              </div>
              <div className="mb-3 col col-12 col-md-6">
                <label className="form-label">Comite</label>
                <input ref={register} className="form-control" list="comites" name="comite" />
                <datalist id="comites">
                  {comites?.list?.map(c => (
                    <option key={c.id} value={c.description} />
                  ))}
                </datalist>
              </div>
              <div className="mb-3 col col-12 col-md-6">
                <label className="form-label">ICS/CIN</label>
                <input ref={register} className="form-control" list="icss" name="ics" />
                <datalist id="icss">
                  {icss?.list?.map(c => (
                    <option key={c.id} value={c.description} />
                  ))}
                </datalist>
              </div>
            </div>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2">
                <input type="submit" className="btn btn-primary" value="Buscar" />
              </div>
              <div className="btn-group">
                <button className="btn btn-outline-secondary" onClick={() => reset()}>Limpar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card m-3">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col" className="d-none d-md-table-cell">Titulo</th>
                  <th scope="col" className="d-none d-md-table-cell">Palavras Chave</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {normas?.list.map(n => (
                  <tr key={n.id}>
                    <th>{n.codigo}</th>
                    <td className="d-none d-md-table-cell">{n.titulo}</td>
                    <td className="d-none d-md-table-cell">{n.palavrasChave.join(', ')}</td>
                    <td><a type="button" className="btn btn-primary bi-download" target="_blank" rel="noopener noreferrer" href={`https://sigo.file.core.windows.net/gestao-normas/norma/${n.filename}`}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
