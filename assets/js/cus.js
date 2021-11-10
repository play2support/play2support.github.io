const changeMode = document.querySelector(".change-mode")

const toDark = () => {
    document.documentElement.setAttribute('theme', 'dark')
    localStorage.setItem('theme','dark')
}

const toLight = () => {
    document.documentElement.setAttribute('theme', 'light')
    localStorage.setItem('theme','light')
}


changeMode.addEventListener('change', function () {
    const color = localStorage.getItem('theme')
    if (color === 'dark') {
        toLight()
    } else {
        toDark()
    }
})

const color = localStorage.getItem('theme')
switch(color){
	case 'light':
		toLight()
    	changeMode.removeAttribute('checked')
    	break
   case 'dark':
   default:
		toDark()
		changeMode.setAttribute('checked', 'checked')
   	break
}

