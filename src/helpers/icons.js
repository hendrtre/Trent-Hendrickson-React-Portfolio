import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faJedi, 
    faPlusCircle 
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faJedi, faPlusCircle)   
}

export default Icons 