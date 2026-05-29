function Exponent({count, exponent}) {

    const total = count ** exponent;
    const arrMultiplications = Array(exponent).fill(count)

    return(
       <div className="exponent-counter-container">
        <p className="exponent-label">{count}<sup>{exponent}</sup></p>
        <p className="exponent-result">{arrMultiplications.join(" * ")} = <span className="total">{total}</span></p>
  </div> 
    )
}
export default Exponent