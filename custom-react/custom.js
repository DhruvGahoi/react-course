function customRender(reactElement,container){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // if (prop === 'children') continue
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://instagram.com",
        target: '_blank'
    },
    children : 'Click me to visit instagram'
}

const rootContainer = document.getElementById("root")

customRender(reactElement,rootContainer)