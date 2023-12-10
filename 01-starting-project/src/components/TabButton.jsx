export default function TubButton(props) {
    function clickHandler() {
        console.log("Helo world");
    }

    return <li><button onClick={clickHandler}>{props.children}</button></li>
}

