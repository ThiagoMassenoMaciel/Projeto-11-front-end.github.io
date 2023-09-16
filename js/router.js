import * as B from './background.js'

export class Router{
  routes = { }

  add(NameRoute, GoPath){
    this.routes[NameRoute] = GoPath
  }

  route( event ){

    event = event || window.event
    
    event.preventDefault()

    window.history.pushState({}, "" , event.target.href)

    const swap = event.target.dataset.changeback
    console.log(`\n event.target.dataset.changeback :  ${swap} \n`)
    console.log(`\n event.target.dataset.changeback :  ${B.change[swap]} \n`)

    B.change.run(swap);

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