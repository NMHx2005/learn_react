import "./todo.css"


const Header = (props) => {
    // Destructuring props to extract name and usd
    const { list } = props;



    return (
        <div>
            {list && list.map((item) => (
                <div key={item.id} className="todo-item">
                    <span>Tên công việc: {item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Header;