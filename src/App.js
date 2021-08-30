import './App.css';



function User(props) {
    return (
        <div>
            <img src={props.user.ImgUrl} alt="profile"/>
            <br/>
            <strong>{props.user.name}</strong>
        </div>
    );
}

function Board(props){
    return(
        <section>
            <User user={props.user}/>
            {props.title}
            <hr/>
            {props.content}
        </section>
    );
}

export default Board;
