import React, { FunctionComponent, useCallback } from 'react';
import { useForm } from "react-hook-form";

import { ComiteListDto, OrganismoListDto, IcsListDto } from "../../../../service/src/dto";
import { useFetchApi } from '../../api';

const bodyStyle = {
  margin: 0,
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.5',
  color: '#212529'
};

const App: FunctionComponent = () => {
  const { data: organismos } = useFetchApi<OrganismoListDto>('organismo');
  const { data: comites } = useFetchApi<ComiteListDto>('comite');
  const { data: icss } = useFetchApi<ComiteListDto>('ics');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container-fluid" style={bodyStyle}>
      <div className="card">
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
                <input ref={register} type="text" className="form-control" />
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
            <input type="submit" className="btn btn-primary" value="Buscar" />
          </form>
        </div>
      </div>
    </div>
  );
};


export default App;
