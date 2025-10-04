function Cars(){
const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

   const x = 5;
    let y = "Apple";
    if(x<10){
        y="Banana";
    }

  return (
    <>
      <h1 style={mystyles}>My car</h1>
      <h3>{y}</h3>
    </>
  );
}



export default Cars