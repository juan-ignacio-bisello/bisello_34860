import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <h1 className=''>Ecommerce</h1>
            <div style={{ backgroundColor: '#ffee00', display: 'flex'}}>
                <button onClick={() => {console.log('hizo click')}}>Celulares</button>
                <button onClick={() => {console.log('hizo click')}}>Tablet</button>
                <button onClick={() => {console.log('hizo click')}}>Notebook</button>
            </div>
        </nav>
    )
}

export default Navbar