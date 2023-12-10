export default function TubButton({ children, onSelect }) {

    return <li><button onClick={onSelect}>{children}</button></li>
}

