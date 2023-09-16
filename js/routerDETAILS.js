

export class Router{
  routes = { }

  add(NameRoute, GoPath){
    this.routes[NameRoute] = GoPath
  }

  route( event ){

    event = event || window.event
    
    event.preventDefault()

    window.history.pushState({}, "" , event.target.href)

    console.log("Entrou no prevent default com o event : \n" , event)
    
    console.log(`\n event.target :  ${event.target} \n`)

    console.log(`\n event.target.href :  ${event.target.href} \n`)

    console.log(`\n event.target.dataset :  ${event.target.dataset} \n`)

    console.log(`\n event.target.dataset.changeback :  ${event.target.dataset.changeback} \n`)

    this.handle()
  }

  handle(){
    const ancora = document.querySelector('section')

    const {pathname} = window.location

    console.log(`apelido do caminho à ser direcionado : ${pathname}`)

    const GoToPath = this.routes[pathname] || this.routes["/error"]

    console.log(GoToPath)

    fetch(GoToPath)
    .then( data => data.text()                 )
    .then( html => ancora.innerHTML = html     )

  }

}