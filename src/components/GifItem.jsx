

export const GifItem = ({ title, url, id }) => {
    
  return (
    <div className="card">
        <img src={ url } alr={ title} />
        <p>{ title }</p>
    </div>
    //<li key={ id }>{ title }</li>
  )
}
