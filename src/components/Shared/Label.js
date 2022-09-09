function Label(props) {
    return (
        <label htmlFor={props.htmlFor} className="ml-1 text-sm">{props.children}</label>
    );
}

export default Label;
