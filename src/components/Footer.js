//Se Importa NavBars
import NavBars from "./NavBars"
const links = ["Vehiculos", "Electronica", "Libros", "Contactame", "faq"]

const Footer = () => {
    return(
        <footer>
            <p>Copyright &copy;- 2022</p>
            <p>Todos los Derechos Reservados</p>
            <NavBars 
                link={links}
                
            />
        </footer>
    )
}
export default Footer