function App(){

    const[tweet, setTweet] = React.useState('');

    return(
        <div>
            {/* タイトル */}
            <h1>シンプルなX風アプリ</h1>

            {/* ツイート入力欄 */}
            <input
            type="text"
            value={tweet}
            onChange={(e)=>setTweet(e.target.value)}
            placeholder="いまどうしてる？"
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);