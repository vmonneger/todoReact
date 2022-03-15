

export default function Card({title, description, id, getCardId, done, getDone}) {
  const checkTask = done

  return (
    <div className="p-3 col-xs-12 col-md-6">
      <div className="card">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{ title }</h5>
            <i 
              className="bi bi-trash3 text-danger pe-auto" 
              onClick={() => getCardId(id)} 
              style={{cursor: "pointer", padding: "10px"}}
            >
            </i>
          </div>
          <p className="card-text">{ description }</p>
          {checkTask 
            ? <button className="btn btn-primary me-4" onClick={() => getDone(id, false)}>Tâche faite</button>
            : <button className="btn btn-danger me-4" onClick={() => getDone(id, true)}>Tâche non faite</button>
          }
        </div>
      </div>
    </div>
  )
}