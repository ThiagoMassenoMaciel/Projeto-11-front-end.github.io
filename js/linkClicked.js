const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

export const Bolding = {

  l(){
    link1.classList.add('bold')
    link2.classList.remove('bold')
    link3.classList.remove('bold')
  }
  ,
  ll(){
    link2.classList.add('bold')
    link1.classList.remove('bold')
    link3.classList.remove('bold')
  }
  ,
  lll(){
    link3.classList.add('bold')
    link1.classList.remove('bold')
    link2.classList.remove('bold')
  }
  ,
  run( DataSet){

        switch( DataSet ){
          case "l":
            this.l()
            break
  
          case "ll":
            this.ll()
            break

          case "lll":
            this.lll()
            break
        }
  }
}
// This class MAYBE  in order to write again the methods and data0sets why i not using the data-set that already exist ? 
// Because i am building this aplication with growth
// mais manutenível


/*
Ancora = const link
evento = metodos(){       add classe com alterações         }
*/
//Ancora : tag link 
//evento : font-weight: 700 
//         e 
//         font-size :  2.4rem