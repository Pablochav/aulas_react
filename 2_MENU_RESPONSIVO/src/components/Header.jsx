import{ List } from "@phosphor-icons/react"

function Header() {
  return (
    <header>
        <div className="mobile">
            <div className="manu_logo">
                <button>
                    <List size ={32} />
                </button>
                <h1>Logo</h1>
            </div>
        </div>
    </header>
  )
}

export default Header
