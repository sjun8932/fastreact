import './App.css';

const information = {
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다. 반갑습니다.',
    user: {
        name: '박상준',
        ImgUrl: 'https://w.namu.la/s/dfa30564fb91f6b91c21419685e4c786d72dbe1e0af5f7cbaa0c712e548251a53cf19e909ac88ad424c9f4ac1d518012c4c4fcf60be649d1580443fb722fb886df56f07151f0e8e922423b38f72331fbc7eea7a6793539b1362e378eb722f775d4851463a070491e4fd12927ea8357c1'
    }
}

function User(props) {
    return (
        <div>
            <img src={props.user.ImgUrl} alt="image"/>
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




export {information};
export default Board;
