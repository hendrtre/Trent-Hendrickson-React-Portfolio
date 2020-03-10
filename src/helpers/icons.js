import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faJedi, 
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"


const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faJedi, 
        faPlusCircle, 
        faPhone,
        faEnvelope,
        faMapMarkedAlt
    )   
}

export default Icons 