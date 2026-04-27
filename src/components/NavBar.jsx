import { navLinks } from "../constants"
export const NavBar = () => {
  return (
    <header>
        <nav className="flex items-center justify-between">
            <h1>Diego Banovac</h1>
            <ul className="flex items-center gap-6 list-none">
                {navLinks.map((link)=>(
                    <li key ={link.label}>
                        <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>
             <div className="flex items-center gap-3">
                <button>
                    <span>Contact me</span>
                </button>
             </div>
        </nav>
        
    </header>
  )
}

export default NavBar