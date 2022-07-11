function IconSwitch(props) {
    const {icon, onSwitch} = props;
    return (
        <span
            className="material-icons"
            onClick={() => onSwitch(icon)}>
            {icon}
        </span>
    );

}

export default IconSwitch;