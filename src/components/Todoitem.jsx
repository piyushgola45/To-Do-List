function Todoitem({item,deleteitem})
{
    return <>
        {item.map((it)=>(
            <div className="row" style={{'marginTop':'20px'}}>
                <div className="col">
                    {it.name}
                </div>
                <div className="col">
                    {it.date}
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={()=>deleteitem(it.name)}>
                        DELETE
                    </button>
                </div>
            </div>
        ))}
    </>
}
export default Todoitem;