const btnDiv = {
    display: 'flex',
    flexDirection: 'row',
}

const btn = {
    padding: '0.5rem',
    backgroundColor: 'red',
    color: 'white',
    margin: '0.5rem',
    borderRadius: '5px'
}

function Buttons() {
    return (
        <div style={btnDiv}>
            <button style={btn}><i class="fa-solid fa-heart"></i></button>
            <button style={btn}><i class="fa-solid fa-trash"></i></button>           
        </div>

    )
}

export default Buttons