namespace Components {
  export interface User {
    name: string
  }
  export class Header {
    constructor() {
      const header = document.createElement('h1')
      header.innerHTML = 'This is Header'
      document.body.appendChild(header)
    }
  }
  
  export class Content {
    constructor () {
      const content = document.createElement('div')
      content.innerHTML = 'This is content'
      document.body.appendChild(content)
    }
  }
  export class Footer {
    constructor () {
      const footer = document.createElement('div')
      footer.innerHTML = 'This is footer'
      document.body.appendChild(footer)
    }
  }
}