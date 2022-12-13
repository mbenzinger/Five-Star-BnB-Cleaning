
function Error404() {
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="${process.env.REACT_APP_SERVER_URL}images/represent.jpg" alt="representative image" />
        </main>
    );
}

export default Error404;